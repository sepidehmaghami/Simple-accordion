import React from "react";

const Text =(props)=>{

    return(
        <div>
            <p>{props.title}</p>
            <p>{props.txt}</p>
        </div>
    );

}

export default Text;