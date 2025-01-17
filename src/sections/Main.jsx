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
            words={['Data Enthusiast', 'Based in Tulsa, Oklahoma']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </span>
      </div>

      
    </section>
  );
};
export default Main;