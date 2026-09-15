import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import About from "./About";
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <Dashboard />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;