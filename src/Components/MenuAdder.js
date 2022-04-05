import React from "react";
import Ingredients from "./Ingredients";
const objApi={};
const clicker=(event)=>{
    console.log(event.target.placeholder)
    // obj.name=event.target.value;
    // obj={
    //     [event.target.placeholder]:event.target.value,
    // }
    objApi[event.target.placeholder]=event.target.value
    // console.log(objApi)
}
export {objApi}
export default function MenuAdder(props) {
    

    if (props.click) {
        return (
            // <h1>Hello World</h1>
            <>
            <form className="my-4 overflow-hidden" >

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Name of the dish" onChange={clicker} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Cook-Time</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Total time to cook"  onChange={clicker}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Serving </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Total Servings"  onChange={clicker}/>
                    </div>
                </div>
                <div class="form-group row" >
                    <div className="col-sm-2" >
                    <label for="exampleFormControlTextarea1">Instructions</label>
                    </div>
                    <div className="col-sm-9">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="74" style={{resize:'none'}} onChange={clicker}></textarea>
                    </div>
                </div>

            </form>
            <Ingredients/>
            </>
        )
    }
}