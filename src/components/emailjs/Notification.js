import emailjs from "emailjs-com";

export const sendEmail = (name, email, message) => {
  const template = {
    to_name: name,
    reply_to: email,
    message: message,
  };
  emailjs
    .send("service_q3du0xi", "template_3yt6h2q", template, "7q4c6wte_xmFhaxJH")
    .then(
      (result) => result,
      (error) => console.log(error.text)
    );
};
