import React from 'react';
import Hero from '../../../Hero/Hero';
import { HeroData } from '../../../../data';

const HeroSection = () => (
  <div className="grid grid-cols-1 xl:grid-cols-3">
      <div className="grid col-span-1 xl:col-span-3 ">
      <div className="object-cover w-[100%] h-[400px] xl:h-[500px]" >
        <Hero data={HeroData} />
      </div>
      </div>
  </div>



);

export default HeroSection;