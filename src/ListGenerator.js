import React from "react";
// import Ingredients from "./Components/Ingredients";
import IngredientsComponent from "./Components/IngredientsComponent";

export default function ListGenerator(props) {
    // console.log(props.clicked)
    if (props.clicked === true) {
        // const array = [<IngredientsComponent />]
        const array = []
        console.log(props.counter)
        for (let i = 0; i < props.counter; i++) {
            array.push(<IngredientsComponent/>)
        }
        return array;
    }
}
