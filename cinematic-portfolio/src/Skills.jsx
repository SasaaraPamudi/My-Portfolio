import React from "react";
import { FaJava, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages & Core",
            items: [
                { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
                { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} /> },
                { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
                { name: "HTML5 & CSS3", icon: <div style={{ display: "flex", gap: "4px" }}><FaHtml5 style={{ color: "#E34F26" }} /><FaCss3Alt style={{ color: "#1572B6" }} /></div> }
            ]
        },
        {
            category: "Frameworks & Ecosystems",
            items: [
                { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} /> },
                { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
                { name: "Spring Security (JWT)", icon: <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "#6DB33F" }}>JWT</span> },
                { name: "Hibernate / JPA", icon: <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "#b0b0b0" }}>JPA</span> }
            ]
        },
        {
            category: "Web Tools & Design Principles",
            items: [
                { name: "RESTful APIs", icon: <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ea580c" }}>API</span> },
                { name: "Git & GitHub", icon: <div style={{ display: "flex", gap: "4px" }}><FaGitAlt style={{ color: "#F05032" }} /><FaGithub style={{ color: "#ffffff" }} /></div> },
                { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
                { name: "Nielsen's Heuristics", icon: <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#f59e0b" }}>UX</span> }
            ]
        }
    ];

    return (
        <section id="skills" style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "6rem 2rem",
            borderTop: "1px solid #18181b",

        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "3.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "serif", margin: "0 0 0.5rem 0" }}>
                        Abilities
                    </p>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f59e0b", margin: "0" }}>
                        Technical Arsenal
                    </h2>
                    <div style={{ height: "4px", width: "40px", backgroundColor: "#ea580c", marginTop: "10px" }}></div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {skillCategories.map((cat, idx) => (
                        <div key={idx}>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#a1a1aa", marginBottom: "1.5rem", letterSpacing: "0.5px", borderBottom: "#f59e0b" }}>
                                {cat.category}
                            </h3>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                                gap: "1.5rem"
                            }}>
                                {cat.items.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        style={{
                                            backgroundColor: "#09090b",
                                            border: "1px solid #27272a",
                                            borderBottom: "3px solid #f59e0b",
                                            borderRadius: "12px",
                                            padding: "1.5rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1.25rem",
                                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                            cursor: "default"
                                        }}

                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#f59e0b";
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                            e.currentTarget.style.boxShadow = "0 10px 20px rgba(245, 158, 11, 0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#27272a";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.borderBottomColor = "#f59e0b";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >

                                        <div style={{ fontSize: "2rem", display: "flex", alignItems: "center", justifyContent: "center", width: "40px" }}>
                                            {skill.icon}
                                        </div>

                                        <span style={{ fontSize: "1.05rem", fontWeight: "600", color: "#e4e4e7" }}>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;