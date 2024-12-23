import React from 'react'

function AddButton({btnName,dispatch,reset = false}) {

  return (
    <button  onClick={() => dispatch({type:reset ? 0 : btnName})}>{btnName}</button>
  )
}

export default AddButton