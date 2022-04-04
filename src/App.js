import React,{useState} from 'react';
import MenuAdder from './Components/MenuAdder';

function App() {
  const [clicked,setClick]=useState(false);
  // const clicked=false;
 return(
   <>
   <div className='contain d-flex flex-row'>
        <div className='left w-50 d-flex justify-content-center h-50'>
        <button type="button" className="btn btn-primary my-1  " onClick={()=>setClick(true)}> Add recipe</button>
        </div>
        <div className='right w-50'>
            <MenuAdder click={clicked}/>
        </div>
   </div>
   </>
 )
}
export default App;
