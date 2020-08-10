import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Infoitem({ el }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos='fade-left'>
      <article className='item'>
        <span className={el.color}>{el.icon}</span>
        <h3>{el.value}</h3>
        <p>{el.label}</p>
      </article>
    </div>
  );
}

export default Infoitem;
