import React from "react";
import "./Card.css";

const Card = ({ isNew, title, subtitle, price, image }) => {
  return (
    <>
      <div className="card" style={{display:"flex",alignItems:"center",width:"50%",justifyContent:"space-between",padding:"10px",marginTop:"10px",marginBottom:"10px"}}>
        
        <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{price}</p>
        </div>
        <div>
            <img width={200} className="image" src={image} alt="" />
        </div>
        
      </div>
    </>
  );
};

export default Card;
