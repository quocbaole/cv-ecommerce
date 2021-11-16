import React from 'react'
import { InfoSection } from '../../components'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
