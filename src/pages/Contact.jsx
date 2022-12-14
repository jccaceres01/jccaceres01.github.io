import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faEnvelopeOpenText  } from '@fortawesome/free-solid-svg-icons';
import{  faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import{  faArrowRotateRight  } from '@fortawesome/free-solid-svg-icons';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';

const Contact = () => {

  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_8g0i7ps', 'template_bc4wv45', form.current, 'gKDv3z1R1eRZXLg2F')
      .then((result) => {
          alert("Message Send. Thanks.");

          form.current.first_name.value = '';
          form.current.last_name.value = '';
          form.current.email.value = '';
          form.current.message.value = '';

      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div className="container translucid-box animate__animated animate__fadeIn">
        <h1 className="text-center mt-2 mb-4">{ t('contact') }</h1>

        <div className="row p-2 m-2">
          <div className="col-sm-6 mb-5 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" beat />
          </div>
          <div className="col">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input type="text" className="form-control" name="first_name" placeholder={ t('contact_first_name') } required />
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" name="last_name" placeholder={ t('contact_last_name') } required />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder={ t('contact_email') } required />
              </div>

              <div className="mb-3">
                <textarea name="message" id="" cols="30" rows="10" className="form-control" required placeholder={ t('contact_message') }></textarea>
              </div>

              <button type="reset" className="btn btn-outline-secondary m-2">{ t('contact_clear_btn') }<FontAwesomeIcon icon={faArrowRotateRight} /></button>
              <button type="submit" className="btn btn-outline-secondary">{ t('contact_send_btn') } <FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
