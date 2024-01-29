import React from 'react';
import './scrollTop.css'

import ScrollToTop from 'react-scroll-to-top';

const ScrollTop = () => {
    return (
        <div>
              <ScrollToTop smooth top={700} color='black' className='sct' />
        </div>
    );
};

export default ScrollTop;