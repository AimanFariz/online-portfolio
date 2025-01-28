import Globe from 'react-globe.gl';
const About = () => {

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* First Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/logo.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Aiman Fariz</p>
              <p className="grid-subtext">
              I'm a Presidential Scholar @ <a href="https://utulsa.edu/" className='hover:text-white-800'>The University of Tulsa</a>, currently a sophomore double majoring in Computer Science and French, and minoring in Mathematics. My interests include sports analytics, language learning, and open source contributions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/stack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              My go-to tech stack includes React for frontend development, Node.js for backends, and MongoDB for database management. I also use Tailwind for styling and Figma for UI/UX design. For data analysis, I leverage Python libraries, often integrating with Google Sheets and Google Colab.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 36, lng: -95, text: 'Tulsa, Oklahoma', color: 'white', size: 20000 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m flexible with time zone communications & locations</p>
              <p className="grid-subtext">As an international student from Malaysia currently based in the United States, I have firsthand experience navigating the challenges of working across time zones and am adept at collaborating effectively with individuals in different regions.</p>
            </div>
          </div>
        </div>

        {/* 4th Card */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <img src="assets/emotion.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            </div>
            <div>
              <p className="grid-headtext">Other interests</p>
              <p className="grid-subtext">When I'm not focused on tech, I enjoy playing badminton, supporting Manchester United, and playing the violin. I also write about sports analytics in my free time on  <a href="https://medium.com/@aimanfarizz" className='underline'>Medium.</a></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
