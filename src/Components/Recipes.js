import React from "react";
import {objApi} from "./MenuAdder";
// import Element from "./MenuAdder";
// export element
export default function Recipes(props){
    console.log(objApi)
    // console.log(Element);
    if(props.clicked===true){
        return (
            <>
            {/* <Element/> */}
            {/* {console.log(objApi)} */}
            {/* {console.log(objApi["Name of the dish"])} */}
            <h1>{objApi["Name of the dish"]}</h1>
            <div>{objApi["Total time to cook"]}</div>
            <div>{objApi["Total Servings"]}</div>
            <div>{objApi["Instructions"]}</div>
            {/* <div>{objApi["Name of the dish"]}</div> */}
            </>
        )
    }
}