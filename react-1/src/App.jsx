// export const App=()=>{
//   return <h1>hi anna iam!in </h1> ;
// }
import React, { useState } from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>hi anna</h1>
//     </div>
//   )
// }

// export default App
// this jsx syntax code we are using it 

const App=()=>{
  const[num,setNum]=useState(10)
  return(
    <div>
      <h1>num is {num}</h1>
      <button onClick={()=>{
        setNum(num+10)
      }}>increment</button>
      <button onClick={()=>{
        setNum(num-10)}}>decrement</button>
    </div>
  )
}
export default App