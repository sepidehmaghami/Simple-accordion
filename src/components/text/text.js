import React ,{useState} from "react";
import "./text.css"
import { AiFillCaretDown } from "react-icons/ai";

const Text =({panel})=>{
    const [disp, setDisp] = useState({});
    const toggle_disp =(item)=>{
        setDisp(!disp)
        item.display = !item.display
    }

    const extra_styles = (check) => {
        if (check) {
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
                  <AiFillCaretDown className="panel-icon" onClick={()=>toggle_disp(item)}/>
              </div>
                <p className="panel-text" style={extra_styles(item.display)}>{item.txt}</p>          
            </div>
                )
        } )}
           
        </div>
    );

}

export default Text;