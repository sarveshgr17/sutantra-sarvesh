import React from 'react'
import Description from '../components/Description'
import Grid from '../components/Grid'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Description/>
        <Grid/>
    </div>
  )
}

export default Home