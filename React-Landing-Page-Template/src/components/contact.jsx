import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import DbService from "../shared/service/DataBaseService";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: ''
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation or submit the form data here
    console.log(formData); // For example, log the form data
    // Clear the form after submission if needed
    if (formData.name.trim() === "") {
      window.alert("Username is Required");
      return false;
    }
    if (!formData.name.trim().match("^[a-zA-Z0-9 ]{3,20}$")) {
      window.alert("User Name must contain only character min-3 and max-20");
      return false;
    }

    if(!formData.phone.trim().match('^[0-9]{10}$'))
      {
          window.alert("Contact Number Must Be (0-9) and 10 digit");
          return false;
      }
  if(!formData.email.trim().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))
      {
              window.alert("Email Must be In Format");
              return false;
      }
      if (formData.query.trim() === "") {
        window.alert("Query is Required");
        return false;
      }
      if(window.confirm("Are You Sure You want to submit Your Contact Details?")){
        DbService.post("contact",formData).then((res)=>{
          console.log(res)
        })
      setFormData({ name: '', phone: '', email: '', query: '' });
      }
      
  };

  return (
    <div>
 
      <div id="contact">
        <div className="container">
         
        <div className="row">
                <div className="col-md-6">
                    {/* Contact Details */}
                    
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
        
                </div>
                <div className="col-md-6">
                    {/* Contact Form */}
                    <div className="card">
                        <div className="card-body">
                            <h2>Contact Form</h2>
                            <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Contact Number</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="query">Queries</label>
        <textarea
          className="form-control"
          id="query"
          name="query"
          rows="4"
          value={formData.query}
          onChange={handleInputChange}
          
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.255868018761!2d80.21726947504955!3d12.826735618037848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688ba48c05%3A0x9c9c47da4947f359!2sChangepond-Technology%2C%20First%20Main%20Road%2C%20Siruseri%2C%20Tamil%20Nadu%20603103!5e0!3m2!1sen!2sin!4v1719554007021!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Website Design by{" "}
            Team SKNM 
            
              
          </p>
        </div>
      </div>
    </div>
  );
};
