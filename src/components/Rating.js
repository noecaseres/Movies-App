import React from 'react';
import '../CSS/Rating.css';

export const Rating = ({
    onSelect,
}) => {

const handleSelect =(value)=>{
    onSelect(value);
}

  return (
    <div className='text-light star_icons p-3'>
        <span onClick={()=>handleSelect(1)} id="1"className="fa fa-star"></span>
        <span onClick={()=>handleSelect(2)} id="2"className="fa fa-star"></span>
        <span onClick={()=>handleSelect(3)} id="3"className="fa fa-star"></span>
        <span onClick={()=>handleSelect(4)} id="4"className="fa fa-star"></span>
        <span onClick={()=>handleSelect(5)} id="5"className="fa fa-star"></span>
    </div>
  )
}
