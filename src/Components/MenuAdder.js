import React,{useState} from "react";
import Ingredients from "./Ingredients";
import Recipes from "./Recipes"

let objApi={};


// let Element;
export default function MenuAdder(props) {
    const [click,setClick]=useState(false)
    const [text,setText]=useState('');
    const clicker=(event)=>{
    // console.log(event.target.placeholder)
    // obj.name=event.target.value;
    // obj={
    //     [event.target.placeholder]:event.target.value,
    // }
    // objApi[event.target.placeholder]=event.target.value
    setText(event.target.value);
    objApi[event.target.placeholder]=text
    // console.log(objApi)
    }
    const clickSetter=()=>{
        setClick(()=>true);
    }

    if (props.click) {
        return (
            // <h1>Hello World</h1>
            // const array=[
            <>
            <form className="my-4 overflow-hidden" >

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Name of the dish" onInput={clicker} onClick={clickSetter}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Cook-Time</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Total time to cook"  onInput={clicker} onClick={clickSetter}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Serving </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="Total Servings"  onInput={clicker} onClick={clickSetter}/>
                    </div>
                </div>
                <div class="form-group row" >
                    <div className="col-sm-2" >
                    <label for="exampleFormControlTextarea1">Instructions</label>
                    </div>
                    <div className="col-sm-9">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Instructions" rows="3" cols="74" style={{resize:'none'}} onInput={clicker} onClick={clickSetter}></textarea>
                    </div>
                </div>

            </form>
            <Ingredients/>
            <Recipes clicked={click}/>
            
            </>
            // ,
            // <div>
            //     <h1>{text}</h1>     
            // </div>
            // ]
            // const Element=
            //         <div>
            //             <h1>{text}</h1>     
            //         </div>}
            
            // const array=[Menuadder,Element];
            // return array;
        )
    }
    
}
export {objApi}
// export {Element};