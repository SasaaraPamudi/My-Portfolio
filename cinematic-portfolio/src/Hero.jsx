import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';
import video from './assets/video.mp4'

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null); // Reference to control video volume
    const [isMuted, setIsMuted] = useState(true); // Tracks audio state

    useEffect(() => {
        // Smooth cinematic fade-in for text elements using GSAP
        gsap.fromTo(
            textRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
    }, []);

    // Function to toggle audio on/off safely
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div ref={containerRef} className="hero-container">

            <div className="video-layer">
                <video
                    ref={videoRef}
                    className="bg-video"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="gradient-overlay" />
            </div>

            <div ref={textRef} className="content-layer">
        <span className="tagline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          Portfolio // 2026
        </span>

                <h1 className="hero-title">
                    Sasaara <br />
                    <span className="highlight-text">Pamudi</span>
                </h1>

                <p className="hero-description">
                    Aspiring Full-Stack Developer specializing in the Java ecosystem, Spring Boot, and creating secure, friction-free web architectures.
                </p>

                <div className="button-container">
                    {/* Let's Connect Button */}
                    <button className="cta-button" onClick={toggleMute}>
                        {isMuted ? "Listen to Intro" : "Mute Intro"}
                        {isMuted ? (
                            /* Volume/Speaker Icon SVG */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                        ) : (
                            /* Mute Icon SVG */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                        )}
                    </button>
                </div>
            </div>

        </div>
    );
}