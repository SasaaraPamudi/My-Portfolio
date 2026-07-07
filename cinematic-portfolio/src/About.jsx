import React from "react";

const About = () => {
    const expertiseFields = [
        {
            title: "Backend Engineering",
            description: "Designing decoupled, robust architectures, secure microservices, and high-performance RESTful APIs.",
            skills: ["Java", "Spring Boot", "MVC Architecture", "REST APIs"]
        },
        {
            title: "Frontend Engineering",
            description: "Building responsive layouts, clean user flows, and state-driven web platforms.",
            skills: ["React", "JavaScript (ES6+)", "HTML/CSS3", "Tailwind CSS"],
        },
        {
            title: "Database",
            description: "Managing data integrity, executing efficient queries, and tracking code variants safely.",
            skills: ["MySQL", "Git & GitHub", "Maven/Postman"]
        }
    ];
    return (
        <section id="about" style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "6rem 2rem",
            borderTop: "1px solid #18181b",
        }}>
            <div style={{maxWidth: "1200px", margin: "0 auto"}}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "serif", margin: "0 0 0.5rem 0" }}>
                        Biography
                    </p>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f59e0b", margin: "0" }}>
                        About Me
                    </h2>
                    <div style={{ height: "4px", width: "40px", backgroundColor: "#ea580c", marginTop: "10px" }}></div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", alignItems: "start" }}>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <p style={{ color: "#e4e4e7", fontSize: "1.1rem", lineHeight: "1.6", margin: "0" }}>
                            I am a solution-oriented Software Engineering Undergraduate currently pursuing my BSc (Hons) at CINEC Campus. I thrive at the intersection of robust backend systems and highly interactive full-stack web platforms, balancing structural efficiency with clean user design.
                        </p>
                        <p style={{ color: "#a1a1aa", fontSize: "1rem", lineHeight: "1.6", margin: "0" }}>
                            My primary technical focus centers on backend architectures, designing secure RESTful APIs, and implementing database performance optimizations. I approach software with a critical mindset, aiming to engineer systems that are write-once, scale reliably, and eliminate architecture bottlenecks before they happen.
                        </p>

                        <div style={{ backgroundColor: "rgba(234, 88, 12, 0.05)", borderLeft: "4px solid #ea580c", padding: "1.25rem 1.5rem", borderRadius: "0 8px 8px 0", marginTop: "0.5rem" }}>
                            <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.05rem", color: "#f59e0b", fontWeight: "700" }}>
                                🥋 Beyond the Code Editor
                            </h4>
                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#d4d4d8", lineHeight: "1.5" }}>
                                Outside of building applications, I hold a **Black Belt (1st Dan) in Shotokan Karate**[cite: 1]. This martial arts journey has hardwired a deep sense of discipline, absolute focus, and a resilient competitive drive into my everyday work—principles I bring directly into my engineering problem-solving.
                            </p>
                        </div>

                        <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            <div style={{ borderLeft: "3px solid #ea580c", paddingLeft: "1.25rem" }}>
                                <span style={{ fontSize: "0.85rem", color: "#f59e0b", fontWeight: "600" }}>2024 - Expected 2027</span>
                                <h4 style={{ margin: "0.25rem 0", fontSize: "1.1rem", fontWeight: "700", color: "#ffffff" }}>BSc (Hons) in Software Engineering</h4>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#a1a1aa" }}>CINEC Campus, Malabe</p>
                            </div>

                            <div style={{ borderLeft: "3px solid #ea580c", paddingLeft: "1.25rem" }}>
                                <span style={{ fontSize: "0.85rem", color: "#ea580c", fontWeight: "600" }}>2024 - 2025</span>
                                <h4 style={{ margin: "0.25rem 0", fontSize: "1.1rem", fontWeight: "700", color: "#ffffff" }}>Diploma in Master Java Developer</h4>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#a1a1aa" }}>Institute of Software Engineering (IJSE)</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", backgroundColor: "#09090b", padding: "2.5rem", borderRadius: "12px", border: "1px solid #27272a" }}>
                        <h3 style={{ margin: "0", fontSize: "1.25rem", fontWeight: "700", color: "#f59e0b" }}>Development Pillars</h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            <div>
                                <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#ffffff", fontWeight: "600" }}>🧠 Disciplined Problem-Solving</h4>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#a1a1aa", lineHeight: "1.4" }}>Analyzing deep technical layers logically to implement optimal, clean-code solutions.</p>
                            </div>
                            <div>
                                <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#ffffff", fontWeight: "600" }}>🤝 Team Collaboration</h4>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#a1a1aa", lineHeight: "1.4" }}>Thriving in agile group environments, mentoring peers, and contributing to large-scale objectives.</p>
                            </div>
                            <div>
                                <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#ffffff", fontWeight: "600" }}>📢 Effective Communication</h4>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#a1a1aa", lineHeight: "1.4" }}>Translating complex architectural engineering details into transparent, functional ideas.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                    {expertiseFields.map((field, idx) => (
                        <div key={idx} style={{ background: "rgba(39, 39, 42, 0.2)", border: "1px solid #f59e0b", padding: "2rem", borderRadius: "8px" }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff", margin: "0 0 0.75rem 0" }}>
                                {field.title}
                            </h3>
                            <p style={{ fontSize: "0.95rem", color: "#a1a1aa", lineHeight: "1.5", margin: "0 0 1.5rem 0" }}>
                                {field.description}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {field.skills.map((skill, sIdx) => (
                                    <span key={sIdx} style={{ fontSize: "0.8rem", fontWeight: "600", backgroundColor: "#18181b", color: "#f59e0b", padding: "0.3rem 0.75rem", borderRadius: "4px", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;