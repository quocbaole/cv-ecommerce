import React from 'react';
import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
