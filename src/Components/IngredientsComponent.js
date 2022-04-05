import React,{useContext,useState} from "react"
import { clickContext } from "./Ingredients"

export default function IngredientsComponent(props){
    const {clicking}=useContext(clickContext);
    
    const [click,onClicked]=useState(clicking);
    const elementDeleter=()=>{
        onClicked(()=>false)
    }
    if(click===true){
    return(
        <>
            <form className=" overflow-hidden d-flex flex-column justify-content-center" >
                <div className="flex row justify-content-start">
                    <div className="mx-3 " style={{width:'30.5%'}}>Name</div>
                    <div style={{width:'30%'}}>Amount</div>
                </div>
                <div className="form-row ">
                    <div className="col col-sm-4">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col col-sm-4">
                        <input type="text" className="form-control" placeholder="Amount"/>
                    </div>
                    <button type="button" className="btn btn-danger mx-2" style={{width:'10%'}} 
                    onClick={elementDeleter}
                    >x</button>
                </div>
            </form>
        </>
    )
    }
}