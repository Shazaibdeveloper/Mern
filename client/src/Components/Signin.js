import React, { useState } from 'react'

const Signin = () => {

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
    
        const response = await res.json();
        if (res.status === 400 || !response.token) {
            window.alert("Invalid signin");
            console.log("Invalid signin");
        } else {
            window.alert("Successful signin");
            console.log("Successful signin");
        }
    }
    
    

  return (
     <>

     <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                        <a href="#" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input value={email}    onChange={(e) => setemail(e.target.value) } type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                          
                            <div className="form-group form-button">
                                <input onClick={loginUser} type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </>
  )
}

export default Signin