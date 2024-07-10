import React, { memo, useContext, useReducer, useRef } from 'react';
import { ThemeName } from '../App';

const Add = ({func}) => {   
    const  reducer=(state,action)=>{
        if(action.type ==='increase'){
            return state+1;
        }else if(action.type === 'decrease'){
            return state-1;
        }else{
            return state;
        }
    }
console.log('Child Components');
const {name,setName}= useContext(ThemeName);
console.log(name);
const [state,dispatch] = useReducer(reducer,1);
const inputRef = useRef();
const focusFn =()=>{
    inputRef.current.focus();
    console.log(inputRef);
}
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>setName('Jhon two')}>Set Name </button>
        <button onClick={()=>dispatch({type:'increase'})}>Add by 1 </button>
        <button onClick={()=>dispatch({type:'decrease'})}>Sub by 1 </button>
        <input type="text" ref={inputRef}   />
        <button onClick={focusFn}>Add Focus On Input </button>
        
    </div>
  )
}

export default memo(Add)