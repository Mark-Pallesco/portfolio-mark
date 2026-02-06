import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Left Column (Main Info) - Spans 2 columns */}
        <div className="lg:col-span-2 space-y-8">

          {/* About Section */}
          <section>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal text-sm transition-colors duration-200">
              <p className="mb-3">
                I am a Web Developer specializing in building high-impact platforms for keynote speakers and businesses, turning clean designs into functional, high-performance websites across WordPress, Webflow, and Framer.
              </p>
              <p>
                I bridge the gap between aesthetic branding and technical execution, focusing on seamless user experiences and scalable eCommerce solutions. Currently, I am expanding my expertise by exploring AI-driven development and automation to build faster, smarter, and more future-ready digital experiences.
              </p>
            </div>
          </section>

          <TechStack />

          <Projects />
        </div>

        {/* Right Column (Timeline) - Spans 1 column */}
        <div className="space-y-8">
          <Experience />

          <Education />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default App;
