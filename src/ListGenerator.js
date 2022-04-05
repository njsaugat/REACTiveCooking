import React from "react";
// import Ingredients from "./Components/Ingredients";
import IngredientsComponent from "./Components/IngredientsComponent";

export default function ListGenerator(props) {
    // console.log(props.clicked)
    if (props.clicked === true) {
        // const array = [<IngredientsComponent />]
        const array = []
        // console.log(props.counter)
        // harek choti counter ko value change hunxa useState lai use garera
        // tesle garda entire component lai re-render garna parxa due to which
        // like sabai kura pheri render huda loop suru dekhi nai chalxa ani teti nai choti
        // array ma JSX pushed hunxa
        for (let i = 0; i < props.counter; i++) {
            // array.push(<IngredientsComponent counter={props.counter}/>)
            array.push(<IngredientsComponent />)
        }
        return array;
    }
}
