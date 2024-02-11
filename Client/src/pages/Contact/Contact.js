import React, { useState } from 'react';
import './Contact.css';
import img1 from '../../images/contactme.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    msg: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    }

    if (!formData.msg.trim()) {
      newErrors.msg = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        console.log(data);


        if (response.ok) {
          // Clear the form input fields
          setFormData({
            name: '',
            email: '',
            mobile: '',
            msg: '',
          });
  
          // Clear the form validation errors
          setErrors({});
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
    

  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={img1} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h5>
                      Contact With{' '}
                      <FaLinkedin color="blue" size={33} className="ms-2" />
                      <FaGithub color="black" size={33} className="ms-2" />
                      <BsInstagram color="red" size={33} className="ms-2" />
                    </h5>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="mb-3">
                        <input
                          type="mobile"
                          name="mobile"
                          placeholder="Enter your Contact no."
                          className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                      </div>
                      <div className="mb-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Enter your Message"
                          className={`form-control ${errors.msg ? 'is-invalid' : ''}`}
                          value={formData.msg}
                          onChange={handleChange}
                        />
                        {errors.msg && <div className="invalid-feedback">{errors.msg}</div>}
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit">
                          SEND Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
