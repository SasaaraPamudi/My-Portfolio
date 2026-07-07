import React from 'react'
import Hero from './Hero';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import About from "./About.jsx";
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';


function App() {
  const [activeView, setActiveView] = React.useState('hero');
  return (
      <main className="w-full min-h-screen bg-[#0d0d0d]">
          {activeView === 'hero' ? (
              <Hero onConnect={() => setActiveView('dashboard')} />
          ) : (
              <>
                  <Navbar/>
                  <Dashboard/>
                  <About/>
                  <Skills/>
                  <Projects/>
                  <Contacts/>
              </>
          )}
      </main>
  );
}

export default App;