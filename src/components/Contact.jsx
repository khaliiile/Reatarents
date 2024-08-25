import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container mt-5 ">
          <h1 className="text-center">Contact Us</h1>
          <div className="d-flex justify-content-center mt-5">
            <div className="container">
              <div>
                <h3>ADDRESS</h3>
                <p>
                  <i className="fa-solid fa-location-dot"></i> Rabat
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i> Phone: 0617454707
                </p>
                <p>
                  <i className="fa-regular fa-envelope"></i>{" "}
                  khalilnajib031@gmail.com
                </p>
              </div>
              <div>
                <h6>WORKING HOURS</h6>
                <p>8:00 am to 11:00 pm on Weekdays</p>
                <p>11:00 am to 1:00 Am on Weekends</p>
              </div>
              <div>
                <h6>FOLLOW US</h6>
                <a href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <form className="container">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
