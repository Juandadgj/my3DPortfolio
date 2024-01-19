import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallCard from "./canvas/Ball";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map(({name,icon}, i) => (
        <div key={i}>
          {/* <BallCanvas icon={technology.icon} /> */}
        {console.log(name,"22")}

          <BallCard name={name} icon={icon} index={i}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");