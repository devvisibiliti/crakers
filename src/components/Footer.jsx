import React from "react";

const Footer = () => {
    return (
        <footer style={{ background: "#222", color: "#fff", padding: "40px 0" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "1200px",
                margin: "0 auto",
                flexWrap: "wrap",
                gap: "32px"
            }}>
                {/* Logo & Description */}
                <div style={{ flex: "1 1 200px" }}>
                    <img src="/logo192.png" alt="Logo" style={{ width: 60, marginBottom: 12 }} />
                    <p style={{ fontSize: 14, color: "#ccc" }}>
                        Craker is your trusted platform for amazing products and services.
                    </p>
                </div>

                {/* Quick Links */}
                <div style={{ flex: "1 1 150px" }}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Quick Links</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li><a href="/" style={{ color: "#ccc", textDecoration: "none" }}>Home</a></li>
                        <li><a href="/about" style={{ color: "#ccc", textDecoration: "none" }}>About</a></li>
                        <li><a href="/services" style={{ color: "#ccc", textDecoration: "none" }}>Services</a></li>
                        <li><a href="/contact" style={{ color: "#ccc", textDecoration: "none" }}>Contact</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div style={{ flex: "1 1 150px" }}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Follow Us</h4>
                    <div style={{ display: "flex", gap: 16 }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc" }}>
                            <svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc" }}>
                            <svg width="24" height="24" fill="currentColor"><path d="M22.46 5.924c-.793.352-1.644.59-2.538.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.482 0-4.495 2.013-4.495 4.495 0 .352.04.696.116 1.025C7.728 9.37 4.1 7.555 1.671 4.917a4.48 4.48 0 0 0-.608 2.262c0 1.56.795 2.936 2.005 3.744a4.48 4.48 0 0 1-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.417a4.48 4.48 0 0 1-2.03.077c.573 1.788 2.236 3.09 4.205 3.126A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc" }}>
                            <svg width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.77.13 4.672.388 3.678 1.382 2.684 2.376 2.426 3.474 2.368 4.756.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.282.316 2.38 1.31 3.374.994.994 2.092 1.252 3.374 1.31C8.332 23.987 8.736 24 12 24c3.264 0 3.668-.013 4.948-.072 1.282-.058 2.38-.316 3.374-1.31.994-.994 1.252-2.092 1.31-3.374.059-1.28.072-1.684.072-4.948 0-3.264-.013-3.668-.072-4.948-.058-1.282-.316-2.38-1.31-3.374-.994-.994-2.092-1.252-3.374-1.31C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                        </a>
                    </div>
                </div>
                {/* Contact Details */}
                <div style={{ flex: "1 1 200px" }}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Contact Us</h4>
                    <p style={{ fontSize: 14, color: "#ccc", margin: 0 }}>
                        Email: <a href="mailto:support@craker.com" style={{ color: "#ccc", textDecoration: "none" }}>support@craker.com</a>
                    </p>
                    <p style={{ fontSize: 14, color: "#ccc", margin: 0 }}>
                        Phone: <a href="tel:+1234567890" style={{ color: "#ccc", textDecoration: "none" }}>+1 234 567 890</a>
                    </p>
                    <p style={{ fontSize: 14, color: "#ccc", margin: 0 }}>
                        Address: 123 Main St, City, Country
                    </p>
                </div>
            </div>
            <div style={{ textAlign: "center", color: "#888", marginTop: 32, fontSize: 13 }}>
                &copy; {new Date().getFullYear()} Craker. All rights reserved.
            </div>
        </footer>
    );
};


export default Footer;