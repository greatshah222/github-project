import React from 'react';

function Infoitem({ el }) {
  return (
    <article className='item'>
      <span className={el.color}>{el.icon}</span>
      <h3>{el.value}</h3>
      <p>{el.label}</p>
    </article>
  );
}

export default Infoitem;
