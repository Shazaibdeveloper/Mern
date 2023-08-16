import React from 'react'

const Contact = () => {
  return (
     <>
     <div className="contact-container" id="Contact">
      <div className="contact-content"><div className="head-para-container">
        <div className="cont-head"><h1>Let's talk!</h1></div>
        <div className="cont-para">
          <p className='text-dark'>You already know what you want to achieve
             online. Now you need the right strategic 
            and technical guidance to deliver results.</p>
          </div></div><div className="contact-form">
          <form method='post'>
          <label for="fname">Company name</label>
        <input type="text" id="fname" name="Companyname" />
        <div className="first-last-div"><div className="first">
        <label for="lname">First Name</label>
      <input type="text" id="lname" name="lastname" />
        </div><div className="last"><label for="fname">
        Last Name</label><input type="text" id="fname" name="firstname" />
        </div></div><label for="lname">Email</label>
      <input type="email" id="lname" name="lastname" />
      <label for="lname">More details</label>
    <input type="text" id="Moredetails" name="lastname" />
    <div className="cont-input"><input type="submit" value="Submit" />
    </div></form>
    </div>
  </div>
  </div>
      </>
  )
}

export default Contact