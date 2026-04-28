const sendEmail = async (to, subject, message) => {
  console.log("Sending Email...");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Message:", message);

  return true;
};

module.exports = sendEmail;