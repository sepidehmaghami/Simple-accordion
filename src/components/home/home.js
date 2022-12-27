import React, { useState } from "react";
import Text from "../text/text";
const Home =()=>{

    const [panel,setPanel] = useState(
        {
            title:"What is a dog ?",
            txt:`This panel can only be collapsed by clicking text
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            title:"What is a cat ?",
            txt:`The cat (Felis catus) is a domestic species of small carnivorous mammal.
            It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.`
        },
        {
            title:"What is a flower ?",
            txt:`the seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly coloured corolla (petals) and a green calyx (sepals).`
        },
    )
    return(
        <div>
            <Text title={panel.title} txt={panel.txt} />
        </div>
    );

}

export default Home;