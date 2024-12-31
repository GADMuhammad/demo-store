import SocialMediaLinks from "./SocialMediaLinks";
import { motion } from "framer-motion";

const inputs = [
  {
    type: "text",
    name: "name",
    placeholder: "Your Name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Your Email",
  },
  {
    type: "tel",
    placeholder: "Your Phone",
  },
  {
    textarea: true,
    privateStyle: "col-span-3 max-md:col-span-1 row-span-10 resize-none",
    placeholder: "Type your message to DEVELOPER here ...",
  },
];

const info = [
  {
    icon: "call-outline",
    label: "Call To Us",
    note: "We are available 24/7, 7 days a week.",
    link_href: "tel:+201069429820",
    link_label: "Phone: +201069429820",
  },
  {
    icon: "mail-outline",
    label: "Write To US",
    note: "Fill out our form and we will contact you within 24 hours.",
    link_href: "mailto:muhammadgadwork@gmail.com",
    link_label: "Email: muhammadgadwork",
  },
];

const paragraphAndLinkStyle = "text-2xl leading-four ";

const Contact = () => {
  return (
    <>
      <div className="animate-fade my-32 flex justify-between gap-10 max-lg:flex-col">
        <div className="flex flex-col justify-center gap-8 p-10 shadow-contact max-lg:order-1 max-lg:flex-row max-lg:justify-around max-md:flex-col">
          {info.map(({ icon, label, note, link_href, link_label }, index) => {
            return (
              <div
                className="max-lg:first:border-r-solid flex flex-col gap-6 whitespace-pre-wrap pr-14 max-lg:first:border-r-2 max-lg:first:border-r-black max-md:first:border-r-transparent"
                key={note}
              >
                <div className="flex items-center gap-10">
                  <ion-icon name={icon} />
                  <h3 className="text-3xl font-medium">{label}</h3>
                </div>
                <p className={paragraphAndLinkStyle}>{note}</p>
                <a
                  href={link_href}
                  className={`${paragraphAndLinkStyle} ${index !== info.length - 1 ? "border-b-solid border-b-2 border-b-two pb-8 max-lg:border-b-transparent max-md:border-b-two" : ""}`}
                >
                  {link_label}
                </a>
              </div>
            );
          })}
        </div>

        <form
          action="https://formsubmit.co/3e0c07fa1abe4e41b9ce0eed3c5ef56f "
          method="POST"
          className="grid w-3/4 grid-cols-3 gap-10 rounded-md p-8 shadow-contact max-lg:w-full max-md:grid-cols-1"
        >
          {inputs.map((props) =>
            props.textarea ? (
              <textarea
                className={`bg-three px-6 py-8 text-2xl outline-none ${props.privateStyle}`}
                name="message"
                key={props.placeholder}
                placeholder={props.placeholder}
              />
            ) : (
              <input
                required
                className="bg-three px-6 py-8 text-2xl outline-none"
                key={props.placeholder}
                {...props}
              />
            ),
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 700 }}
            className="w-fit self-center rounded-md bg-five px-10 py-5 text-2xl font-medium leading-five tracking-widest text-one"
          >
            Send Message
          </motion.button>
        </form>
      </div>
      <SocialMediaLinks />
    </>
  );
};

export default Contact;
