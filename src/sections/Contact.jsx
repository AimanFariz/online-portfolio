import {useState } from 'react';

const Contact = () => {

  const [hasCopiedPersonal, setHasCopiedPersonal] = useState(false);
  const [hasCopiedTulsa, setHasCopiedTulsa] = useState(false);
  const [hasCopiedJunia, setHasCopiedJunia] = useState(false);


  const handleCopyPersonal = () => {
    navigator.clipboard.writeText('aimanfarizz33@gmail.com');
    setHasCopiedPersonal(true);

    setTimeout(() => {
      setHasCopiedPersonal(false);
    }, 2000);
  };
  const handleCopyJunia = () => {
    navigator.clipboard.writeText('aiman-fariz.akmal@student.junia.com');
    setHasCopiedJunia(true);

    setTimeout(() => {
      setHasCopiedJunia(false);
    }, 2000);
  };
  const handleCopyTulsa = () => {
    navigator.clipboard.writeText('aba9132@utulsa.edu');
    setHasCopiedTulsa(true);

    setTimeout(() => {
      setHasCopiedTulsa(false);
    }, 2000);
  };
  return (
    <section className="c-space lg:mx-auto mx-5 py-10 px-5 border-2 border-gray-500 mt-10 mb-5 rounded-lg" id="contact">
      <div className="relative flex items-center justify-center flex-col">
        <div className="border-2 border-gray-500 py-7 px-5 rounded-md">
          <h3 className="head-text ">Contact</h3>
          <p className="text-lg text-white-600 mt-3">
          Hit me up and let's connect!
          </p>
          <div className="py-5 px-10 mt-5 border-gray-500 rounded-md border-2">
            <div className="space-y-2">
            <div className='flex text-white justify-center gap-2 items-center'>
            <ion-icon name="mail-outline"></ion-icon>
            <p className="grid-subtext text-center">Email</p>
            </div>
              <div className="copy-container" onClick={handleCopyPersonal}>
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient'>Personal:</p>
                <img src={hasCopiedPersonal ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">aimanfarizz33@gmail.com</p>
              </div>
              <div className="copy-container" onClick={handleCopyTulsa}>
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient'>Tulsa:</p>
                <img src={hasCopiedTulsa ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">aba9132@utulsa.edu</p>
              </div>
              <div className="copy-container" onClick={handleCopyJunia}>
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient'>JUNIA:</p>
                <img src={hasCopiedJunia ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">aiman-fariz.akmal@student.junia.com</p>
              </div>
            </div>
          </div>
          <div className="py-5 px-10 mt-5 border-gray-500 rounded-md border-2">
            <div className="space-y-2">
            <div className='flex text-white justify-center gap-2 items-center'>
            <ion-icon name="location-outline"></ion-icon>
            <p className="grid-subtext text-center">Currently based in</p>
            </div>
              <div className="copy-container">
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">Lille, France</p>
              </div>
            </div>
          </div>
          <div className="py-5 px-10 mt-5 border-gray-500 rounded-md border-2">
            <div className="space-y-2">
            <div className='flex text-white justify-center gap-2 items-center'>
            <ion-icon name="document-outline"></ion-icon>
            <p className="grid-subtext text-center">Resume</p>
            </div>
              <div className="copy-container flex flex-col">
                <p className="lg:text-xl md:text-large font-medium text-gray_gradient">Curious what else I’ve been up to?</p>
                <a
                  href="https://drive.google.com/file/d/1SZ2DkEvJQtD-uE7389nmf0HP7a95p30t/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-6 py-5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors"
                >
    <ion-icon name="document-text-outline" />
    Check my CV!
  </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
