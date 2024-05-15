import React, { useState } from 'react';
import './App.css';  // Ensure all global styles are applied here
import PortfolioCard from './PortfolioCard';  // Import the PortfolioCard component

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="top">
      <header className="header" data-header>
        <div className="container">
          <a href="#top">
            <h1 className="logo">Axel Ramos</h1>
          </a>
          <button className="nav-toggle-btn" aria-label="Toggle Menu" onClick={() => setNavOpen(!navOpen)}>
            <ion-icon name={navOpen ? "close-outline" : "menu-outline"}></ion-icon>
          </button>
          <nav className={`navbar container ${navOpen ? 'open' : ''}`}>
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link">Home</a></li>
              <li><a href="#about" className="navbar-link">About</a></li>
              <li><a href="#portfolio" className="navbar-link">Portfolio</a></li>
              <li><a href="#skills" className="navbar-link">Skills</a></li>
              <li><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-banner">
                <img src="images/main.jpeg" width="800" height="864" alt="Axel smiling" className="img-cover"/>
                <div className="elem elem-1">
                  <p className="elem-title">5</p>
                  <p className="elem-text">Years of Success</p>
                </div>
                <div className="elem elem-2">
                  <p className="elem-title">20+</p>
                  <p className="elem-text">Projects Completed</p>
                </div>
                <img src="images/funny.jpeg" width="169" height="172" alt="Axel in a funny pose" className="rotate-img"/>
              </div>
              <div className="hero-content">
                <h2 className="hero-title"><span>Hello I'm</span> <strong>Axel Ramos</strong> Software Engineer from Orange County</h2>
                <p className="hero-text">
                  There are only two kinds of languages: the ones people complain about and the ones nobody uses.
                </p>
                <div className="btn-group">
                  <a href="#contact" className="btn btn-primary blue">Message me</a>
                  <a href="#about" className="btn">About Me</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section about" id="about">
            <div className="container">
              <figure className="about-banner">
                <img src="images/secmain.jpeg" width="800" height="652" alt="Axel at a professional event" className="img-cover"/>
                <img src="images/small main.jpeg" width="800" height="717" alt="Close-up of Axel working on a laptop" className="abs-img"/>
                <div className="abs-icon abs-icon-1"><ion-icon name="logo-css3"></ion-icon></div>
                <div className="abs-icon abs-icon-2"><ion-icon name="logo-javascript"></ion-icon></div>
              </figure>
              <div className="about-content">
                <p className="section-subtitle">I'm a Developer</p>
                <h2 className="h2 section-title">I Develop Applications that Help People</h2>
                <p className="section-text">
                  I pursued a career in computer science driven by a passion for leveraging technology to develop innovative applications that enhance everyday life. 
                  My primary motivation is to create intuitive, user-friendly software solutions that support students in their educational journeys, helping to simplify complex concepts and enhance their learning experience. 
                  Through my work, I aim to bridge the gap between technology and effective education, making learning more accessible and engaging for all.
                </p>
                <a href="#portfolio" className="btn btn-primary blue">View Portfolio</a>
              </div>
            </div>
          </section>



          <section className="section portfolio" id="portfolio">
            <div className="container">
              <PortfolioCard 
                  title="Web Application for Students"
                  subtitle="FSAH"
                  imageUrl="images/1.png"
                  defaultImageUrl="https://extension.harvard.edu/wp-content/uploads/sites/8/2022/11/how-to-become-a-software-engineer.jpg"
                  link="/fsah"
              />


<PortfolioCard
  title="Chess Application"
  subtitle="AI vs AI Chess Game"
  imageUrl="images/chess.png"
  defaultImageUrl="https://media.licdn.com/dms/image/D5612AQFgrmRRKKaavQ/article-inline_image-shrink_1500_2232/0/1682280674259?e=1720051200&v=beta&t=lTZ2BG2ArBPe5Zv2KtKs-TlRVWsbDzzwtMCxWZB9UJo"
  link="/chess"
/>


<PortfolioCard
  title="Quiz Application"
  subtitle="Test Your Knowledge"
  imageUrl="images/quiz1.png"
  defaultImageUrl="https://assets-global.website-files.com/5dcc7f8c449e597be23356e0/6560efa8a5848019b4b28d0b_quiz-is-software-engineering-for-me-blog-hero-image.webp" // Provide a default or placeholder image URL
/>


  </div>
</section>


          <section className="section skills" id="skills">
          <div className="container">
    <p className="section-subtitle">My Skills</p>
    <h2 className="h2 section-title">I Develop Skills Regularly</h2>
    <p className="section-text">
      Everyday is a new challenge learning new languages and new tactics to make websites better.
    </p>
    <ul className="skills-list">
      <li className="skills-item">
        <div className="wrapper" style={{ width: '80%' }}>
          <h3 className="skills-title">CSS</h3>
          <data className="skills-data" value="80">80%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '80%' }}></div>
        </div>
      </li>
      <li className="skills-item">
        <div className="wrapper" style={{ width: '75%' }}>
          <h3 className="skills-title">React</h3>
          <data className="skills-data" value="75">75%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '75%' }}></div>
        </div>
      </li>
      <li className="skills-item">
        <div className="wrapper" style={{ width: '50%' }}>
          <h3 className="skills-title">Python</h3>
          <data className="skills-data" value="50">50%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '50%' }}></div>
        </div>
      </li>
      <li className="skills-item">
        <div className="wrapper" style={{ width: '90%' }}>
          <h3 className="skills-title">HTML</h3>
          <data className="skills-data" value="90">90%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '90%' }}></div>
        </div>
      </li>
      <li className="skills-item">
        <div className="wrapper" style={{ width: '75%' }}>
          <h3 className="skills-title">JavaScript</h3>
          <data className="skills-data" value="75">75%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '75%' }}></div>
        </div>
      </li>
      <li className="skills-item">
        <div className="wrapper" style={{ width: '90%' }}>
          <h3 className="skills-title">C++</h3>
          <data className="skills-data" value="90">90%</data>
        </div>
        <div className="skills-progress-box">
          <div className="skills-progress" style={{ width: '90%' }}></div>
        </div>
      </li>
    </ul>
  </div>
          </section>

          <section className="section contact" id="contact">
          <div className="container">
    <div className="contact-card">
      <p className="card-subtitle">If you're ever interested in talking</p>
      <h2 className="h2 section-title">Send me a message</h2>
      <div className="wrapper">
        <form action="" className="contact-form">
          <input type="text" name="name" placeholder="Name" required className="contact-input" />
          <input type="email" name="email" placeholder="Email" required className="contact-input" />
          <textarea name="message" placeholder="Message" required className="contact-input"></textarea>
          <button type="submit" className="btn-submit">Submit Message</button>
        </form>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="location"></ion-icon>
            </div>
            <div>
              <h3 className="contact-item-title">Address</h3>
              <address className="contact-item-link">
                One Apple Park Way, Cupertino, CA 95014
              </address>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="mail"></ion-icon>
            </div>
            <div>
              <h3 className="contact-item-title">Email</h3>
              <a href="mailto:hello@axel.com" className="contact-item-link">hello@axel.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="call"></ion-icon>
            </div>
            <div>
              <h3 className="contact-item-title">Phone</h3>
              <a href="tel:+1234567890" className="contact-item-link">+123 456 7890</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
          </section>
        </article>
      </main>

      <a href="#top" className="back-to-top" data-back-to-top>BACK TO TOP</a>
    </div>
  );
};

export default App;