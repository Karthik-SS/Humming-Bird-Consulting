import React from 'react';
import ContactForm from '../components/ContactForm';
import FounderProfile from '../components/FounderProfile';

function Contact() {
    return (
        <div style={{ padding: "40px 0" }}>
            <div
                <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
                    Contact Us
                </h1>
                <p style={{ textAlign: "center", fontSize: "16px", color: "#333" }}>
                    📧 Email us at <a href="mailto:hummingbirdsconsultings@gmail.com">hello@HummingBird'sConsultingGroup</a>
                </p>
            </div>

            {/* FLEX CONTAINER FOR CONTACT FORM & FOUNDER PROFILE */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "135px",
                maxWidth: "900px",
                margin: "0 auto",
                backgroundColor: "#f3f3f3",
                padding: "20px",
                borderRadius: "10px"
            }}>
                {/* Contact Form Section */}
                <div style={{ flex: "1",  marginLeft: "-10px", minWidth: "350px", backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "left", width: "100%", display: "flex", justifyContent: "left", marginBottom: "10px" }}>
                        Contact Form
                    </h2>
                    <ContactForm />
                </div>

                {/* Founder Profile Section */}
                <div style={{ flex: "1", minWidth: "350px", backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "left", width: "100%", display: "flex", justifyContent: "left", marginBottom: "10px" }}>
                        Founder Profile
                    </h2>
                    <FounderProfile />
                </div>
            </div>
        </div>
    );
}

export default Contact;





