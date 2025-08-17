import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Alert from '../Alert';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Alert state
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState({ header: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const closeAlertBox = () => {
    setAlertVisible(false);
  };

  const showAlert = (header, message) => {
    setAlertData({ header, message });
    setAlertVisible(true);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showAlert('Missing Fields', 'Please fill in all fields before sending.');
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_zh0vj84',
          template_id: 'template_12cdgqn',
          user_id: '9nHCjbJ8w8yQTswge',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'mechseiko@gmail.com',
          },
        }),
      });

      if (response.ok) {
        setForm({ name: '', email: '', message: '' });
        showAlert(
          'Success',
          'Message sent successfully. Our team will analyze your report and respond in due course.'
        );
      } else {
        showAlert('Failed', 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      showAlert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Alert
        header={alertData.header}
        message={alertData.message}
        show={alertVisible}
        closeAlertBox={closeAlertBox}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold text-green-600 mb-4">
            Please fill this form, we will get back to you as soon as possible.
          </h1>

          <p className="mb-6 text-sm text-gray-600">
            You can also {' '}
            <a href="mailto:amtapro@gmail.com" className="text-blue-500 underline">
              write us an email
            </a>{' '}
              or {' '}
            <a href="" className="text-blue-500 underline">
              schedule a meeting.
            </a>{' '}
          </p>

          <form className="space-y-4" onSubmit={sendMessage}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              id="message"
              rows="6"
              placeholder="Message*"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
