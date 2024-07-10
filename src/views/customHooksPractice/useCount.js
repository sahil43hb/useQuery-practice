import  { useState } from 'react'

const useCount = () => {
const [num,setNum] = useState(1);

const inc = ()=>{
    setNum(num+1);
}
  
const dec =()=>{
    setNum(num-1);
}

return [num,inc,dec]

}

export default useCount