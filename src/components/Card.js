import { useState } from "react";

function Card({id,name,info,image,price,remove_element,undo_btnHandler,setTempvalue})
{
    const[readMore,setread]=useState(true);
    const [desc, setDesc]=useState(true);

    function readhandler()
    {
        setread(!readMore);
        setDesc(!desc);
    }

    function btn_handler()
    {
        remove_element(id);
        setTempvalue(id);
        undo_btnHandler();
    }



    const description=`${info.substring(0,200)}...`;
    return(
        <div className="single-card">

            <div className="image">
                <img src={image} alt="phatuk"></img>
            </div>

            <div className="details">
                <div className="price">₹{price}</div>

                <div className="name">{name}</div>

                <div className="info">{desc ?description:info } <span className="read-more" onClick={readhandler}>{readMore ? "Read more": "Show less"}</span></div>

            </div>
            <button className="not-interested-btn" onClick={btn_handler}>Not Interested</button>

        </div>
    )

}

export default Card;