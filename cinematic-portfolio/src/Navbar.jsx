import React from 'react';

const NavMenu = [
    { id: 1, title: 'Home', link: "#home" },
    { id: 2, title: 'About Me', link: "#about" },
    { id: 3, title: 'Skills', link: "#skills" },
    { id: 4, title: 'Projects', link: "#projects" },
    { id: 5, title: 'Contact', link: "#contact" },
    { id: 6, title: ' Download Resume', link: "/Software Engineer Intern - Sasaara Pamudi.pdf" },
];

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            padding: "1rem 2rem",
            borderBottom: "1px solid #18181b"
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <div style={{ fontWeight: "800", fontSize: "1.25rem", color: "#ffffff", letterSpacing: "0.5px" }}>
                    Sasaara<span style={{ color: "#f59e0b" }}>.</span>
                </div>

                <div>
                    <ul style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5rem",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }}>
                        {NavMenu.map((item) => {
                            const isResume = item.id === 6;

                            return (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        download={isResume ? "/Software Engineer Intern - Sasaara Pamudi.pdf" : undefined}
                                        target={isResume ? "_blank" : undefined}
                                        rel={isResume ? "noopener noreferrer" : undefined}
                                        style={{
                                            textDecoration: "none",
                                            color: item.id === 1 ? "#f59e0b" : "#ffffff",
                                            fontSize: "0.98rem",
                                            fontWeight: isResume ? "700" : 500,
                                            letterSpacing: "0.05px",
                                            transition: "color 0.2s ease",
                                            cursor: "pointer",
                                            backgroundColor: isResume ? "rgba(245, 158, 11, 0.1)" : "transparent",
                                            padding: isResume ? "0.4rem 0.8rem" : "0",
                                            borderRadius: isResume ? "6px" : "0",
                                            border: isResume ? "1px solid rgba(245, 158, 11, 0.3)" : "none"
                                        }}
                                        onMouseEnter={(e) => {
                                            if (item.id !== 1) e.currentTarget.style.color = "#f59e0b";
                                            if (isResume) e.currentTarget.style.borderColor = "#f59e0b";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (item.id !== 1) e.currentTarget.style.color = "#ffffff";
                                            if (isResume) e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;