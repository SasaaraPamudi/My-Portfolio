import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projectData = [
        {
            title: "Live Campus Hub Management System",
            category: "Backend System / Enterprise Architecture",
            description: "Engineered a centralized system for managing campus locations and student records. Implemented an automated reward algorithm using Spring Data JPA to evaluate dynamic student discounts while maintaining optimal execution times.[cite: 1]",
            techStack: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "REST APIs"],
            githubLink: "https://github.com/nithirapeiris/live-campus-hub-teamvertex.git",
        },
        {
            title: "Course Registration System",
            category: "Academic Management Architecture",
            description: "Designed a clean, decoupled platform focusing on core object-oriented principles to streamline student enrollment and course tracking. Engineered with strict data validation protocols to handle simultaneous registration cycles seamlessly.",
            techStack: ["Java", "OOP Architecture", "Data Integrity", "Console / App Logic"],
            githubLink: "https://github.com/SasaaraPamudi/course-registration-system.git",

        },
        {
            title: "Hotel Room Reservation System",
            category: "Enterprise Solution / Backend",
            description: "Built a structured reservation core logic engine managing guest booking statuses, check-in intervals, and custom room allocation models. Designed with focus on object states and reliable transactional consistency.",
            techStack: ["Java", "Layered Architecture", "Database Management", "State Handling"],
            githubLink: "https://github.com/SasaaraPamudi/Hotel_Room_Reservation_System.git",
        },
        {
            title: "Lost and Found Community System",
            category: "Full Stack Application",
            description: "Developed a secure web portal for reporting and tracking missing property. Integrated an interactive React user interface with a Spring Boot REST API layer to process cross-origin data flows safely.[cite: 1]",
            techStack: ["Spring Boot", "React.js", "MySQL", "RESTful API", "JSON"],
            githubLink: "https://github.com/SasaaraPamudi/Frontend-for-Lost-And-Found.git",

        },
        {
            title: "E-Commerce Web Application",
            category: "Frontend Architecture",
            description: "Crafted a responsive digital commerce engine based on a custom personal business model. Handled global client cart states with pure Vanilla JavaScript and built the layout conforming strictly to Nielsen's 10 Usability Heuristics.[cite: 1]",
            techStack: ["HTML5", "CSS3", "JavaScript", "UX / Heuristic Design"],
            githubLink: "https://github.com/SasaaraPamudi/e-commerce-website.git",

        }
    ];

    return (
        <section id="projects" style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "6rem 2rem",
            borderTop: "1px solid #18181b"
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "3.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "serif", margin: "0 0 0.5rem 0" }}>
                        Case Studies
                    </p>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f59e0b", margin: "0" }}>
                        Projects
                    </h2>
                    <div style={{ height: "4px", width: "40px", backgroundColor: "#ea580c", marginTop: "10px" }}></div>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                    gap: "2rem"
                }}>
                    {projectData.map((project, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: "#09090b",
                                border: "1px solid #27272a",
                                borderTop: "5px solid #f59e0b",
                                borderRadius: "12px",
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#f59e0b";
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 12px 24px rgba(245, 158, 11, 0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#27272a";
                                e.currentTarget.style.borderTopColor = "#f59e0b"
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div>
                                <span style={{ color: "#ea580c", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#ffffff", margin: "0.5rem 0 1rem 0" }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: "0.95rem", color: "#a1a1aa", lineHeight: "1.6", margin: "0 0 1.5rem 0" }}>
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                                    {project.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} style={{ fontSize: "0.75rem", fontWeight: "600", backgroundColor: "#18181b", color: "#a1a1aa", padding: "0.25rem 0.6rem", borderRadius: "4px", border: "1px solid #27272a" }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ffffff", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600", transition: "color 0.2s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
                                        onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                                    >
                                        <FaGithub style={{ fontSize: "1.1rem" }} /> Source Code
                                    </a>

                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ffffff", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600", transition: "color 0.2s" }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = "#ea580c"}
                                            onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                                        >
                                            <FaExternalLinkAlt style={{ fontSize: "0.9rem" }} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;