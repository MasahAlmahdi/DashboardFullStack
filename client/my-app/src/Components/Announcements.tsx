import React from 'react'
import '../Anon.css'
const Announcements = () => {
  return (
    <div className="announcement-container">
    <div className='titleAn'>
        <h3>Announcements</h3>
        </div>
        <hr />
    <div className="wrapperAnon">
    <img className="profile-pic" src="https://via.placeholder.com/50" alt="Profile Picture"/>
    <div className="announcement-content">
      <h3>John Doe</h3>
      <span className="announcement-date">January 1, 2022</span>
      <p className='pAnon'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper,
        ipsum vel cursus imperdiet, ex ligula fringilla elit, nec scelerisque tellus lectus nec libero.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta molestias corporis possimus in, asperiores, explicabo molestiae neque vero ex ducimus est error ad magni maiores sit quam doloremque adipisci repudiandae.
      </p>
    </div>
  </div>
  </div>
   )
}

export default Announcements