import { useState } from "react";
import Card from "./Card";

function Tour({tours,remove_element,addcards,undo_element})
{
    const [undo_btn ,set_undo_btn]=useState(false);
    const [value_from_card, setvalue_from_card]=useState(0);

    function undo_btnHandler()
    {
        set_undo_btn(true);
        setTimeout(function()
        {
            set_undo_btn(false);
        },2500);
    }

    function setTempvalue(val)
    {
        setvalue_from_card(val);
        // console.log("ander hai",value_from_card);
    }

    // console.log("bahar hai",value_from_card);


    function handleUndo()
    {
        undo_element(value_from_card);
    }


    return(
        <div className="contents">

            <button className={undo_btn ? "undo-btn undo-btn-active":"undo-btn"} onClick={handleUndo}>Undo</button>
            <div className="heading">
                <h2>Plan With Love</h2>
            </div>

            <div className="all-cards">
                {
                    tours.map(function(tour)
                    {
                        return <Card key={tour.id} {...tour} remove_element={remove_element} undo_btnHandler={undo_btnHandler} setTempvalue={setTempvalue} ></Card>
                    })
                }

            </div>
        </div>
    )
}

export default Tour;