import React from 'react'
import { Outlet } from "react-router-dom"
import { IndexUtils } from './utils/index';

import HatLoadingComponent from "./pages/components/hatLoadingComponent";

function Index() {

    const { isLoading } = IndexUtils();

  return (
    <>
    {isLoading? ( 
      <main className='container'>                
        <HatLoadingComponent />
      </main>
    ) : (
      <>
        <Outlet/>
      </>
    )}
    </>
  )
}

export default Index
