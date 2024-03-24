import { useState } from "react";
import data from "./data";
import './styles.css'


export default function Accordian() {
    const [singleSelect, setSingleSelect]=useState(null);
    function handleSingleSelect(getCurrentId){
        setSingleSelect(getCurrentId)
    }
    console.log(singleSelect)

  return (
   <div className="wrapper">
    <div className="accordian">
        {data&&data.length>0 ?(
         data.map((dataItem)=>
         ( <div className="item">
            <div onClick={()=>handleSingleSelect(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>
             {singleSelect===dataItem.id && (<div className="content">{dataItem.answer}</div>)}
            </div>

         ))
        ):
        (<div> Not Found </div>)
}

    </div>
   </div>
  );
}