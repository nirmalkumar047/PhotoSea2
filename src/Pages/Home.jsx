import React from 'react'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Header from  '../components/header'
import College from '../components/College'


function Home() {
  return (
    <div>
        <Header/>
        <Search/>
        <IntroPost/>
        <College/>
        <Blogs/>
        <Footer/>
        

    </div>
  )
}

export default Home