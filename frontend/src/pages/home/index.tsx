import React from 'react'
import style from './index.module.css';
import HeroSection from '../../components/heroSection';
import Category from '../../components/category';


function Home() {
  return (
    <div className={style.homeContainer}>
     <HeroSection/>
     <Category/>
    </div>
  )
}

export default Home;