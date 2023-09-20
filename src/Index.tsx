import React from 'react'
import { IndexUtils } from './utils/index';

import HatLoadingComponent from "./pages/components/hatLoadingComponent";
import BannerComponent from './pages/components/BannerComponent';
import NavegationComponent from './pages/components/NavegationComponent';
import FooterComponent from './pages/components/FooterComponent';

function Index() {

    const { isLoading } = IndexUtils();

  return (
    <>
    {isLoading? ( 
        <section className='loading-logo-align animate__animated animate__fadeIn'>                
        <HatLoadingComponent />
      </section>
    ) : (
      <section>
        <article className='p-3'>
        <nav>
          <BannerComponent/>
          <NavegationComponent/>
        </nav>
        </article>
        <FooterComponent/>
      </section>
    )}
    </>
  )
}

export default Index
