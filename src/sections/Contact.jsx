import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('aimanfarizz33@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space lg:mx-auto mx-10 py-10 px-5 border-2 border-gray-500 mt-10 mb-5 rounded-lg" id="contact">
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
              
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">aimanfarizz33@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="py-5 px-10 mt-5 border-gray-500 rounded-md border-2">
            <div className="space-y-2">
            <div className='flex text-white justify-center gap-2 items-center'>
            <ion-icon name="location-outline"></ion-icon>
            <p className="grid-subtext text-center">Address</p>
            </div>
              <div className="copy-container">
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">Tulsa, Oklahoma, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
