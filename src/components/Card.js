import { useState } from "react";

   function Card({id,image,name,info, price, removeTour , tour}){

      const [readmore , setReadmore] = useState(false);

      const description = readmore ? info  : `${info.substring(0, 200)}...`;

      function readmoreHandler(){
         setReadmore(!readmore);
      }
   
       return ( 
       <div className="card">
          <img src={image} className="image" />
          <div className="tours-details">
            <div>
               <h4 className="tours-price">{price}</h4>
               <h4 className="tours-name">{name}</h4>
            </div>
            <div className="tours-description">
                 {description}
                 <span className="read-more" onClick={readmoreHandler}>{readmore ? `show less`: `readmore`}</span>
            </div>
          </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
               Nor Intrested
            </button>
        </div>
       );
    
   }

   export default Card;