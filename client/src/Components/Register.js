import React, { useState } from 'react'
 
const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        work: "",
        number: "",
        password: "",
        cpassword: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target; // Destructure event object correctly
        setUser(prevUser => ({ ...prevUser, [name]: value })); // Use functional update for state
    }

  return (
    <>
    <div className='main'>
    <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="post" className="register-form" id="register-form">
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input value={user.name} onChange={handleInput} type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-email"></i></label>
                                <input value={user.email} onChange={handleInput} type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-phone"></i></label>
                                <input value={user.number} onChange={handleInput} type="number" name="number" id="number" placeholder="Your Phone number"/>
                            </div>
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-keyboard"></i></label>
                                <input value={user.work} onChange={handleInput} type="text" name="work" id="work" placeholder="Your Work"/>
                            </div>
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-lock"></i></label>
                                <input value={user.password} onChange={handleInput} type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label ><i className="zmdi zmdi-lock-outline"></i></label>
                                <input value={user.cpassword} onChange={handleInput} type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label  className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <a href="#" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default Register