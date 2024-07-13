import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section className="w-full h-full flex justify-center items-center py-10 px-4">
      <div className="md:w-3/4  flex flex-col items-center">
        <div className="">
          <h2 className="text-4xl md:text-5xl text-center">Contact our team</h2>
          <p className="md:text-lg md:px-52 py-4 text-[#868686] text-center font-semibold">
            Please feel free to contact us for any inquiries you may have
            regarding our sessions, including what they entail, as well as any
            other questions or concerns you might have. We're here to help!
          </p>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
