import { useRef, useState } from 'react';
import Button from '../components/Button';

export const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Petite regex magique 🧙‍♂️ pour valider les emails
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailValue || !messageValue) {
      setError("Remplissez bien tous les champs.");
      return;
    }

    if (!isValidEmail) {
      setError("Votre email est incomplet. Vérifiez qu’il est bien formé !");
      return;
    }

    if (!nameValue || !emailValue || !messageValue) {
        setError("Remplissez bien tous les champs.");
        return;
    }

    setError('');

    // sendEmail(
    //   form,
    //   () => alert("Message envoyé avec succès ! 🎉"),
    //   (error) => alert("Oups ! Erreur : " + error.text)
    // );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r">
      <form ref={form} onSubmit={handleSubmit} noValidate className="p-8 bg-white/20 rounded-lg shadow-xl w-96">
        <h2 className="text-center text-white text-2xl mb-4">Contactez-moi</h2>

        {error && (
          <p className="mb-4 text-yellow-200 text-sm bg-red-500/40 p-2 rounded-md">
            {error}
          </p>
        )}

        <input
          type="text"
          name="user_name"
          placeholder="Votre nom complet"
          className="w-full p-3 mb-4 text-white bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          className="w-full p-3 mb-4 text-white bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Votre message"
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
