import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://formspree.io/f/xvgazojj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccessMessage('✅ Thank you for contacting us! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
            setSuccessMessage('❌ Failed to send your message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('❌ An error occurred while sending your message.');
    }
 };


    return (
	
	    <>
        {successMessage && (
              <div className="mb-4 p-4 rounded bg-green-100 text-green-800 text-center shadow">
                    {successMessage}
              </div>
        )}
			
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 flex items-center">
                <label htmlFor="name" className="block font-bold mb-1 w-24">Name</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="mb-4 flex items-center">
                <label htmlFor="email" className="block font-bold mb-1 w-24">Email</label>
                 <div className="w-full">
                   <input
                     type="email"
                     name="email"
                     className="w-full border border-gray-300 rounded-md p-2"
                     value={formData.email}
                     onChange={handleChange}
                   />
                 </div>
            </div>
            <div className="mb-4 flex items-center">
                <label htmlFor="message" className="block font-bold mb-1 w-24">Message</label>
                  <div className="w-full">
                   <textarea
                     name="message"
                     className="w-full border border-gray-300 rounded-md p-2 resize-y"
                     value={formData.message}
                     onChange={handleChange}
                   />
                  </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
            </button>
        </form>
	   </>	
    );
}

export default ContactForm;
