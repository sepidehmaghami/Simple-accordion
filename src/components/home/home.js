import React from "react";
import Text from "../text/text";
const Home =()=>{

    const panel =[
        {
            "key" : "1",
            "title":"What is a dog ?",
            "txt":`This panel can only be collapsed by clicking text
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            "key" : "2",
            "title":"What is a cat ?",
            "txt":`The cat (Felis catus) is a domestic species of small carnivorous mammal.
            It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.`
        },
        {
            "key" : "3",
            "title":"What is a flower ?",
            "txt":`the seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly coloured corolla (petals) and a green calyx (sepals).`
        }
    ]
  
    return(
        <div>
           <div>
              <Text panel={panel}/>
           </div>
           
        </div>
    );

}

export default Home;