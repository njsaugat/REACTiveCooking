import React,{useState} from "react";
import ListGenerator from "../ListGenerator";
import IngredientsComponent from "./IngredientsComponent";
export default function Ingredients() {
    const [click,onClicked]=useState(false);
    const [count,setCount]=useState(0);
    const listGenerator=()=>{
        onClicked(()=>true)
        setCount(prevCount=>prevCount+1);
    }
    return (
        <>
        <h2>Ingredients</h2>
        <IngredientsComponent/>
        <ListGenerator clicked={click} counter={count}/>
        <div className="w-10s0">
            <button type="button" className="btn btn-primary my-2" onClick={listGenerator}>Add Ingredient</button>
        </div>
        
        </>
    )
}