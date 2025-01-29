import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 flex items-center">
                <label htmlFor="name" className="block font-bold mb-1 w-24">Name</label>
                <div className="w-full">
                  <input type="text" name="name" className="w-full border border-gray-300 rounded-md p-2"/>
                </div>
            </div>
            <div className="mb-4 flex items-center">
                <label htmlFor="email" className="block font-bold mb-1 w-24">Email</label>
                 <div className="w-full">
                   <input type="email" name="email" className="w-full border border-gray-300 rounded-md p-2"/>
                 </div>
            </div>
             {/* Message Input - Properly aligned to top left */}
            <div className="mb-4 flex items-center">
                <label htmlFor="message" className="block font-bold mb-1 w-24">Message</label>
                  <div className="w-full">
                   <textarea name="message" className="w-full border border-gray-300 rounded-md p-2 resize-y"/>
                  </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
