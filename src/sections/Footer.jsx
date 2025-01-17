const Footer = () => {
    return (
      <footer className="c-space py-7 border-t border-black-500 flex justify-center items-center flex-wrap gap-5 sm:justify-between">
        <p className="text-white-500">© 2025 Aiman Fariz. Built with love, using React</p>
        <div className="flex gap-3">
          <a href="https://github.com/AimanFariz" target="_blank">
            <div className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
          </a>
          <a href="https://medium.com/@aimanfarizz" target="_blank">
            <div className="social-icon">
              <img src="/assets/medium.png" alt="Medium" className="w-1/2 h-1/2" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aiman-akmal-hizam/" target="_blank">
            <div className="social-icon">
              <img src="/assets/linkedin-putih.png" alt="Lockedin" />
            </div>
          </a>
          <a href="https://devpost.com/AimanFariz?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank">
            <div className="social-icon">
              <img src="/assets/devpost-bg.svg" alt="Lockedin"/>
            </div>
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  