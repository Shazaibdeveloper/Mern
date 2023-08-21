import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const About = () => {
   const navigate = useNavigate();
   const [data,setdata] = useState();

   const callAbout = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!res.ok) { // Check if response status is not OK
        navigate('/signin'); // Navigate before throwing the error
        const err = new Error('Request failed');
        throw err;
      }

      const response = await res.json();
      setdata(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() =>{
      callAbout()
    },[]);


  return (
 
    <>
    <section id="about" className="about">
     
      <div className="container py-5 px-5">
      <form method='GET' >
        <div className="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="./assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{data.name}</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row pt-3">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Proffession : </strong> <span>{data.work}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Number      : </strong> <span>{data.number}</span></li>
                 
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>email:</strong> <span>{data.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>ID:</strong> <span>{data._id}</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
 </form>
      </div>
     
    </section>
    </>
  )
}

export default About