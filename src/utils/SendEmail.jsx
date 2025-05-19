import emailjs from '@emailjs/browser';

export const sendEmail = (formRef, onSuccess, onError) => {
  emailjs.sendForm(
    'service_jx86gpx',
    'template_k1eto3q',
    formRef.current,
    'qLC9fScPZt7oCKDr0'
  )
  .then(onSuccess)
  .catch(onError);
};
