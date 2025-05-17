
import React  from "react";
import { useState } from "react";
function  ReadMoreLess  ( { Limit,children} ) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleBtn = () => {
        setIsExpanded(prevState => !prevState);
    }
   
    return( 
 <div className="read-more-less"> 

 
{isExpanded ? children : children.substring(0, Limit) }
 
 { children} 

 <button className="btn"  onClick={toggleBtn}> {isExpanded ? 'Read Lees' : '.... Read More'} </button>
 
 </div>
    )

}

export default ReadMoreLess;
