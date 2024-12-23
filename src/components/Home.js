import React, { useReducer, useState } from 'react'
import AddButton from './button/AddButton'

const reducer = (state,actions) => {
  switch(actions.type){
    case "+1" :
      return {count :state.count +1};
      case "-1" :
        return {count :state.count -1};
      case 0 :
        return {count :0};
      default :
       
      throw new Error("Error");
  }
}


function Home() {
  const initialState = {
    count:0
  }
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div><p>{state.count}</p>
    <AddButton dispatch={dispatch} btnName={"+1"}/>
    <AddButton dispatch={dispatch}  btnName={"Reset"} reset={true}/>
    <AddButton dispatch={dispatch} btnName={"-1"}/></div>
    
  )
}

export default Home