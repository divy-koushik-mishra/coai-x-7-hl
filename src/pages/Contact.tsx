import { Helmet } from "react-helmet";
import ContactForm from "../components/contact/ContactForm";
import ContactSidebar from "../components/contact/ContactSidebar";

const Contact = () => {
  return (
    <section className="w-full h-full flex justify-center items-center py-10 md:px-24">
       <Helmet>
        <title>Contact Us - Campus of AI</title>
        <meta name="description" content="Get in touch with the Campus of AI team for any inquiries, support, or collaborations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Contact Campus of AI, AI inquiries, AI support, AI collaborations" />
        <meta name="author" content="Campus of AI Team" />

        <meta property="og:title" content="Contact Us - Campus of AI" />
        <meta property="og:description" content="Get in touch with the Campus of AI team for any inquiries, support, or collaborations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://campusofai.in/contact" />
        <meta property="og:image" content="https://campusofai.in/og-contact-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Campus of AI" />
        <meta name="twitter:description" content="Get in touch with the Campus of AI team for any inquiries, support, or collaborations." />
        <meta name="twitter:image" content="https://campusofai.in/twitter-contact-image.jpg" />
        <meta name="twitter:site" content="@CampusOfAI" />
        <meta name="twitter:creator" content="@CampusOfAI" />

        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      <div className="  flex flex-col items-center">
        <div className="">
          <h2 className="text-4xl md:text-5xl text-center">Contact our team</h2>
          <p className="md:text-lg md:px-52 py-4 text-[#868686] text-center font-semibold">
            Please feel free to contact us for any inquiries you may have
            regarding our sessions, including what they entail, as well as any
            other questions or concerns you might have. We're here to help!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row px-5 md:space-x-14">
          <ContactForm />
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
};

export default Contact;
