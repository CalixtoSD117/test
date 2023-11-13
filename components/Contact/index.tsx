'use client'
import { useRef, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {

  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const datachange = ({target}) => {
    const {name, value} = target;
    setdata({...data, [name]:value});
  }

  const dataReset = () => {
    setdata({
      name: "",
      email: "",
      message: "",
    });
  }

  const form =useRef();

  const validateFields = () => {
    const {name, email, message} = data;
    if(name === "" || email === "" || message === ""){
      //toast notification start 
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/logo/logo.png"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-primary">
                  IngeniousDev
                </p>
                <p className="mt-1 text-sm text-primary">
                  Please fill all the fields.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-primary">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
      //toast notification end
      return false;
    }
    return true;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if(!validateFields()){
      return;
    }

    emailjs.sendForm('service_gwr0sne', 'template_go5obbk', form.current, 'wR91Kt-mzZZxPsx0V')
      .then((result) => {
          console.log(result.text);
          //toast notification start 
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/images/logo/logo.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-primary">
                      IngeniousDev
                    </p>
                    <p className="mt-1 text-sm text-primary">
                      We have received your message and will get back to you
                      ASAP.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-primary">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
          //toast notification end
          dataReset();
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Send us a message!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              {/* here start the form  */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        onChange={datachange}
                        value={data.name}
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        onChange={datachange}
                        value={data.email}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        onChange={datachange}
                        value={data.message}
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                    type="submit"
                    value="Send"
                    className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>

                </div>
              </form>
              {/* here end the form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
