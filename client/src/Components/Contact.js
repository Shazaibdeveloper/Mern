import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setdata] = useState();

  const userData = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        // Check if response status is not OK
        const err = new Error("Request failed");
        throw err;
      }

      const response = await res.json();
      setdata(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="contact-container" id="Contact">
        <div className="contact-content">
          <div className="head-para-container">
            <div className="cont-head">
              <h1>Let's talk!</h1>
            </div>
            <div className="cont-para">
              <p className="text-dark">
                You already know what you want to achieve online. Now you need
                the right strategic and technical guidance to deliver results.
              </p>
            </div>
          </div>
          <div className="contact-form">
            <form method="post">
              <label for="fname">Name</label>
              <input
                value={data.name}
                type="text"
                id="fname"
                name="Companyname"
              />
              <div className="first-last-div">
                <div className="first">
                  <label for="work">Proffession</label>
                  <input
                    value={data.work}
                    type="text"
                    id="fname"
                    name="firstname"
                  />
                </div>
              </div>
              <label for="lname">Email</label>
              <input
                value={data.email}
                type="email"
                id="lname"
                name="lastname"
              />
              <label for="lname">Description</label>
              <input
                value={data.message}
                type="text"
                id="Moredetails"
                name="lastname"
              />
              <div className="cont-input">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
