import React from 'react'
import '../Due.css'
export const Due = () => {
  return (
<div className="whats-due-container">
  <div className="qtitle">
    <h3>What's Due</h3>
    </div>
    <hr />
    <h3 className='qt'>Quiz Title</h3>
    <div className="due-info">
      <p>Course: Math 101</p>
      <p>Topic: Algebra</p>
      <p>Due Date: January 15, 2022</p>
    </div>
  </div>  
  )
}
