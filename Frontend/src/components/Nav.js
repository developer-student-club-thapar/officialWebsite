/** @format */
import React, { useEffect, useState } from 'react';
import { animated, useSpring, interpolate } from 'react-spring';

import NavSubPart from './NavSubPart';

function Nav(props) {
  const [Top, setisTop] = useState(true);
  const [scroll, setScroll] = useState(0);
  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 50;
    if (isTop !== Top) {
      setisTop(isTop);
    }
    setScroll(window.scrollY);
  });

  const { o } = useSpring({
    from: { o: 0 },
    o: scroll / 10 < 1 ? scroll / 100 : 1,
  });

  return (
    <React.Fragment>
      {/* {Top ? ( */}
      <animated.div
        style={{
          position: 'sticky',
          top: '0',
          zIndex: 100,
          background: o.interpolate(o => `rgba(255, 255, 255, ${o}`),
          boxShadow: o.interpolate(
            o =>
              `0 ${o * 4}px ${o * 8}px 0 rgba(0,0,0,${o * 0.2}),0 ${o *
                6}px ${o * 20}px 0 rgba(0,0,0,${o * 0.2})`,
          ),
        }}
      >
        <NavSubPart active={props.active} />
      </animated.div>
    </React.Fragment>
  );
}
export default Nav;
