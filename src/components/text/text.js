import React ,{useState} from "react";
import "./text.css"
import { AiFillCaretDown } from "react-icons/ai";

const Text =({panel})=>{
    const [disp, setDisp] = useState(false);
    const extra_styles = (disp) => {
        if (disp) {
            return {
                display:"block"
            };
            }
        else {
            return {
                display: "none",
            }
        }
    };

    return(
        <div className="accordion">
            {panel.map( (item) => {
            return( 
           <div key={item.key} className="panel">
              <div className="panel-title">
                  <p>{item.title}</p>
                  <AiFillCaretDown className="panel-icon" onClick={()=>setDisp(!disp)}/>
              </div>
                <p className="panel-text" style={extra_styles(disp)}>{item.txt}</p>          
            </div>
                )
        } )}
           
        </div>
    );

}

export default Text;