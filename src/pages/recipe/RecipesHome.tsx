import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { Col, Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { RecipeUtils } from '../../utils/recipe/recipeUtils'
import { Image } from 'react-bootstrap';

/* TODO: 
  - add list of recipes 3 per row (improves layout)
  

  - add pagination
  - add search
  - add filter (improves back-end attributes)
  - add sort
  - add recipe card
  - add recipe card details
*/


function RecipesHome() {

  const { recipe } = RecipeUtils();


  return (
    <section className='bg-light_primary font-body-rb rounded-b-xl'>

      <article className='flex justify-center'>
        <div className='carouselAbsolute'> 
          {RecipesCarousel()}
        </div>
      </article>
      <article className='text-center pt-5'> 
        <Row>
          <Col>
            <RecipesList title='Salgados'/>
          </Col>

          <Col>
            <RecipesList title='Doces'/>
          </Col>

          <Col>
            <RecipesList title="Outros"/>
          </Col>
        </Row>
      </article>
    </section>
  )


  function RecipesList(props: { title?: string }) {
    return (
    <ListGroup as="ul">
      <h2 className='mb-2 text-xl bg-orange_primary text-light_primary'>{props.title}</h2> 
      {recipe.map((r, i) => (
        <ListGroup.Item as="li" key={i} className='flex justify-between'>             
            <Image src={r.imageLink ? r.imageLink : "https://via.placeholder.com/1080x1080"} className='ListIMG'/>                  
          <div className='flex-col mr-28 text-start'>
            <h1 className='ml-5'>- {r.title}</h1>
            <p className='text-sm ml-5'>{r.description}</p>
          </div>
            <button className='bg-orange_primary rounded text-light_primary p-2 ml-8'>Ver receita</button>
        </ListGroup.Item>
      ))}
    </ListGroup>)
  }

  function RecipesCarousel() {
    return(
      <Carousel fade slide>
        {
        recipe.map((r, i) => (
        <Carousel.Item key={i}>          
            <Image src={r.imageLink} className='GalleryIMG' thumbnail/>
          <Carousel.Caption className='bg-orange_primary'>
            <h3 className='text-3xl font-title-sy select-none'>{r.title}</h3>
            <p className="text-xl font-title-sy select-none">{r.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))
      }
      </Carousel>

    )
  }
}



export default RecipesHome