import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

import Me from './assets/Me.jpg';

const Dashboard = () => {
    return (
        <main id="home" style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#ffffff", padding: "0rem", display: "flex", alignItems: "center", justifyContent: "center" }}>


            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>

            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "center" }}>


                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                }}>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "0", lineHeight: "1.1", letterSpacing: "-1px" }}>
                            Hello, I'm
                        </h1>
                        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "2px 0 10px 0", lineHeight: "1.1", letterSpacing: "-1px", color: "#f59e0b" }}>
                            Sasaara Pamudi.
                        </h1>
                        <div style={{ height: "4px", width: "40px", backgroundColor: "#ea580c" }}></div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem" }}>
                        <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "serif", margin: "0" }}>
                            Introduction
                        </p>
                        <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#f59e0b", margin: "0", lineHeight: "1.2" }}>
                            Passionate Software Developer
                        </h2>
                        <p style={{ color: "#d4d4d8", fontSize: "1rem", lineHeight: "1.4", textTransform: "capitalize", margin: "0" }}>
                            Master in Java, Spring Boot, React, JavaScript
                        </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1rem" }}>

                        <a
                            href="https://www.linkedin.com/in/sasaara-pamudi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#f59e0b",
                                transition: "color 0.2s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#db4706"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#f59e0b"}
                        >
                            <TbBrandLinkedin style={{ fontSize: "1.8rem" }} />
                        </a>

                        <a
                            href="https://github.com/SasaaraPamudi"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#f59e0b",
                                transition: "color 0.2s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#db4706"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#f59e0b"}
                        >
                            <FaGithub style={{ fontSize: "1.8rem" }} />
                        </a>

                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: "100%",
                    minHeight: "440px",
                    animation: "scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    animationDelay: "0.2s",
                    opacity: 0
                }}>

                    <div style={{ position: "absolute", width: "420px", height: "420px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            style={{ animation: "spin 20s linear infinite" }}
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="transparent"
                                stroke="#f59e0b"
                                strokeWidth="1"
                                strokeDasharray="5, 8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div style={{ position: "relative", width: "340px", height: "340px", borderRadius: "50%", overflow: "hidden", border: "4px solid #27272a", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                        <img
                            src={Me.src || Me}
                            alt="photo of me"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Dashboard;