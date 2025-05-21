import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '../utils/SendEmail';
import Button from '../components/Button';

export const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!nameValue || !emailValue || !messageValue) {
      setError("Tous les champs sont à remplir, veillez à bien les remplir.");
      return;
    }

    if (!isValidEmail) {
      setError("L'email rentré ne correspond pas à un email valide. Ne pas oublier '@' et .");
      return;
    }

    setError('');

    sendEmail(
      form,
      () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000); // Cache le message après 5 secondes
        setEmailValue('');
        setMessageValue('');
        setNameValue('');
      },
      (error) => {
        console.error("Erreur lors de l'envoi :", error);
        setError("erreur lors de l'envoi du message. Veuillez réessayer plus tard.");
      }
    );
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r">
      <form ref={form} onSubmit={handleSubmit} noValidate className="p-8 bg-white/20 rounded-lg shadow-xl w-96">
        <h2 className="text-center text-white text-2xl mb-4">Contactez-moi</h2>

         <AnimatePresence>
          {showSuccess && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4 text-green-100 text-sm bg-green-500/40 p-2 rounded-md text-center"
            >
              Message envoyé avec succès ! Merci!
            </motion.p>
          )}
        </AnimatePresence>

        {error && (
          <p className="mb-4 text-yellow-200 text-sm bg-red-500/40 p-2 rounded-md">
            {error}
          </p>
        )}

        <input
          type="text"
          name="user_name"
          placeholder="Votre nom / Entreprise *"
          className="w-full p-3 mb-4 text-white bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Votre Email *"
          className="w-full p-3 mb-4 text-white bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Votre message *"
          className="w-full p-3 mb-4 text-white bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows="4"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />

        <Button type="submit" className="w-full">
          Envoyer le formulaire
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
