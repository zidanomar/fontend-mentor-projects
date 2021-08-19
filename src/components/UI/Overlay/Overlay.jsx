import React from 'react';

import classes from './Overlay.module.css';
import OverlayMenu from './OverlayMenu/OverlayMenu';
const Overlay = (props) => {
  return (
    <div
      className={
        props.toggleIsActive
          ? `container ${classes.overlay} ${classes['fade-in']}`
          : `container ${classes.overlay} ${classes['fade-out']}`
      }
    >
      <OverlayMenu />
    </div>
  );
};

export default Overlay;
