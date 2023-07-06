import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaperPlane  } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_an8nyg7', 'template_bc4wv45', e.target, 'gKDv3z1R1eRZXLg2F')
      .then((result) => {
          alert("Message Send. Thanks.");

          e.target.reset();

      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <section id="contact" className="flex min-h-screen max-w-screen-xl p-4 pt-40 mx-auto">
        <div className="flex flex-col w-full items-center gap-4 lg:gap-6">
          <h1 className="text-6xl font-bold my-4 mb-10">{ t('contact_title') }<span className="text-blue-400">{ t('contact_noum')}</span></h1>
          <form  className="flex flex-col min-w-full px-2 items-center justify-center" id="contact-form" onSubmit={(e) => sendEmail(e) }>
            
            <div className="flex flex-col w-full justify-between my-4 gap-4 md:flex-row lg:gap-6">
              <input type="text" className="form-control w-full" name="name" placeholder={ t('contact_full_name') } required />
              <input type="email" className="form-control w-full" name="email" placeholder={ t('contact_email') } required />
            </div>
            
            <div className="flex flex-col w-full justify-between my-4 gap-4 md:flex-row lg:gap-6">
              <input type="text" className="form-control w-full" name="phone" placeholder={ t('contact_mobile_number') } />
              <input type="text" className="form-control w-full" name="subject" placeholder={ t('contact_email_subject') } />
            </div>

            <div className="flex w-full justify-between my-4 gap-4">
              <textarea name="message" className="form-control w-full min-h-[110px] lg:min-h-[150px]" required placeholder={ t('contact_message') }></textarea>
            </div>

            <button type="submit" className="fill-btn">{ t('contact_send_btn') } <FontAwesomeIcon icon={faPaperPlane} /></button>
          </form>
        </div>
      </section>
  )
}

export default Contact;
