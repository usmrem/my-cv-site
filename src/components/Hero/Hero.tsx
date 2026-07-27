function Hero() {
  return (
    <main>
      <section className="home" id="home">
        <h2>
          hi,<span className="name"> Emir </span>here.
          <span className="cursor"></span>
        </h2>

        <p className="small-text">
          Frontend Developer specializing in React, JavaScript, and modern web technologies.I build responsive and user-friendly web applications with a focus on performance, accessibility, and clean code. Passionate about creating intuitive user experiences and continuously improving my frontend development skills.
        </p>

        <a href="mailto:Emirovn@icloud.com" className="home-btn">
          Say hi!
        </a>
      </section>
    </main>
  );
}

export default Hero;