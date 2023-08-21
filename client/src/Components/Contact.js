import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    work: "",
    message: "",
  });

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
      setdata({
        ...data,
        name: response.name,
        work: response.work,
        email: response.email,
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, work, message } = data;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        message,
      }),
    });
    const resp = await res.json();
    if (!resp) {
      window.alert("Message not send");
    } else {
      window.alert("Message send successfully");
      setdata({ ...data, message: "" });
    }
  };

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
            <form method="POST">
              <label for="fname">Name</label>
              <input
                value={data.name}
                onChange={handleInput}
                type="text"
                id="fname"
                name="name"
              />
              <div className="first-last-div">
                <div className="first">
                  <label for="work">Proffession</label>
                  <input
                    value={data.work}
                    onChange={handleInput}
                    type="text"
                    id="fname"
                    name="work"
                  />
                </div>
              </div>
              <label for="lname">Email</label>
              <input
                value={data.email}
                onChange={handleInput}
                type="email"
                id="lname"
                name="email"
              />
              <label for="lname">Description</label>
              <input
                value={data.message}
                onChange={handleInput}
                type="text"
                id="Moredetails"
                name="message"
              />
              <div className="cont-input">
                <input onClick={contactForm} type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
