import React, { useRef, useState } from "react";

const GOOGLE_SHEET_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"; // Replace with your Google Form action URL

const Contact = () => {
    const formRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const data = new FormData(form);

        fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            mode: "no-cors",
            body: data,
        })
            .then(() => setSubmitted(true))
            .catch(() => setSubmitted(true));
    };

    return (
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {/* Left Side: Contact Details */}
                <div style={{ flex: 1, minWidth: 280 }}>
                    <h2>Contact Details</h2>
                    <p>
                        <strong>Address:</strong> 123 Main Street, City, Country
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 234 567 890
                    </p>
                    <p>
                        <strong>Email:</strong> info@example.com
                    </p>
                </div>

                {/* Right Side: Contact Form */}
                <div style={{ flex: 1, minWidth: 320 }}>
                    <h2>Contact Us</h2>
                    {submitted ? (
                        <div style={{ color: "green" }}>Thank you for contacting us!</div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div style={{ marginBottom: 12 }}>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="entry.YOUR_NAME_FIELD_ID"
                                        required
                                        style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 4, border: "1px solid #ccc" }}
                                    />
                                </label>
                            </div>
                            <div style={{ marginBottom: 12 }}>
                                <label>
                                    Phone:
                                    <input
                                        type="phone"
                                        name="entry.YOUR_PHONE_FIELD_ID"
                                        required
                                        style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 4, border: "1px solid #ccc" }}
                                    />
                                </label>
                            </div>
                            <div style={{ marginBottom: 12 }}>
                                <label>
                                    Message:
                                    <textarea
                                        name="entry.YOUR_MESSAGE_FIELD_ID"
                                        required
                                        rows={4}
                                        style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 4, border: "1px solid #ccc" }}
                                    />
                                </label>
                            </div>
                            <button type="submit" style={{ padding: "8px 24px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", width: "100%", textalign:"centre" }}>
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Map Section */}
            <div style={{ marginTop: 40 }}>
                <h2>Our Location</h2>
                <div style={{ width: "100%", height: 350 }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019091599605!2d-122.41941518468123!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e9e8b1b%3A0x4c9b8b8b8b8b8b8b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;