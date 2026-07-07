import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const contactMethods = [
        {
            label: "Email Me",
            value: "pamudisasaara@gmail.com",
            href: "mailto:pamudisasaara@gmail.com",
            icon: <FaEnvelope style={{ color: "#ea580c" }} />
        },
        {
            label: "Call / WhatsApp",
            value: "+94 716500760",
            href: "tel:+94716500760",
            icon: <FaPhoneAlt style={{ color: "#f59e0b" }} />
        }
    ];

    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/SasaaraPamudi",
            icon: <FaGithub />
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: <FaLinkedin />
        }
    ];

    return (
        <section id="contact" style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "6rem 2rem 8rem 2rem",
            borderTop: "1px solid #18181b"
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "serif", margin: "0 0 0.5rem 0" }}>
                        Get In Touch
                    </p>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f59e0b", margin: "0" }}>
                        Let's Build Together
                    </h2>
                    <div style={{ height: "4px", width: "40px", backgroundColor: "#ea580c", margin: "10px auto 0 auto" }}></div>
                </div>

                <div style={{
                    backgroundColor: "#09090b",
                    border: "1px solid #27272a",
                    borderBottom: "4px solid #f59e0b",
                    borderRadius: "16px",
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2.5rem"
                }}>
                    <p style={{ color: "#a1a1aa", fontSize: "1.05rem", textAlign: "center", maxWidth: "600px", margin: 0, lineHeight: "1.6" }}>
                        I am currently seeking software engineering internship opportunities to contribute to large-scale solutions. Whether you want to discuss backend logic or just want to connect, feel free to reach out!
                    </p>

                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "2rem",
                        width: "100%"
                    }}>
                        {contactMethods.map((method, idx) => (
                            <a
                                key={idx}
                                href={method.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    backgroundColor: "#111113",
                                    border: "1px solid #18181b",
                                    borderRadius: "10px",
                                    padding: "1rem 1.5rem",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#f59e0b";
                                    e.currentTarget.style.backgroundColor = "#18181b";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "#18181b";
                                    e.currentTarget.style.backgroundColor = "#111113";
                                }}
                            >
                                <span style={{ fontSize: "1.25rem", display: "flex", alignItems: "center" }}>
                                    {method.icon}
                                </span>
                                <span>{method.value}</span>
                            </a>
                        ))}
                    </div>

                    <div style={{ width: "80px", height: "1px", backgroundColor: "#27272a" }}></div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        {socials.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Visit my ${social.name}`}
                                style={{
                                    fontSize: "1.6rem",
                                    color: "#a1a1aa",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#a1a1aa"}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                </div>

            </div>
        </section>

    );
};

export default Contact;