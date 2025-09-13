import {Typewriter} from "react-simple-typewriter"

const Main = () => {
  
  return (
    <section className="min-h-screen w-full flex flex-col relative justify-center items-center" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
        <p className="sm:text-5xl text-white text-4xl font-medium text-center font-generalsans">
          Hi, I am Aiman<span className="waving-hand">👋</span>
        </p>
        <span className="text-white text-center">
        <Typewriter
            words={['Sports Data Enthusiast ⚽🏀⚾🏈📊', 'Full-Stack Developer 💻','Polyglot 🌏', 'Lifelong learner']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </div>

      
    </section>
  );
};
export default Main;