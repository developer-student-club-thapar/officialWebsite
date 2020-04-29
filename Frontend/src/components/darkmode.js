import Darkmode from 'darkmode-js';
import React from 'react';
function Dark(){
  const darkmode = new Darkmode();
  return (<>
  {darkmode.showWidget()}
  </>)
}

export default Dark
