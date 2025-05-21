import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


export const sendEmail = (formRef, onSuccess, onError) => {
  emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    formRef.current,
    PUBLIC_KEY
  )
  .then(onSuccess)
  .catch(onError);
};
