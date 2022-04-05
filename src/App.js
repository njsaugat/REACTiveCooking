import React,{useState} from 'react';
import MenuAdder from './Components/MenuAdder';
import Recipes from './Components/Recipes';
function App() {
  const [clicked,setClick]=useState(false);
  // const clicked=false;
  // console.log(MenuAdder);
  // console.log(<MenuAdder[0]/>)
  // const [comp1,comp2]=<MenuAdder/>
  // console.log(comp1)
  // console.log(comp2)
 return(
   <>
   <div className='contain d-flex flex-row'>
        <div className='left w-50 d-flex justify-content-center h-50'>
            {/* <Recipes click={clicked} /> */}
          
        <button type="button" className="btn btn-primary my-1  " onClick={()=>setClick(true)}> Add recipe</button>
        </div>
        <div className='right w-50'>
            <MenuAdder click={clicked}/>
        </div>
   </div>
   <div>
     {/* Hello */}
   </div>
   </>
 )
}
export default App;
