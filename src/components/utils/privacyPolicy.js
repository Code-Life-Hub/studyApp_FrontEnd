import React from "react";
import "../styles/privacyPolicy.css";
import ScrollToTop from "./ScrollToTop.js";
import Footer from "../utils/footer.js";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <h2 className="privacy-policy-h2">
        Your privacy is of utmost importance to me. I am committed to protecting your privacy and handling your
        personal information with care and respect.
      </h2>
      <div className="privacy-policy-content">
        <h3 className="privacy-policy-subtitle">Information I Collect:</h3>
        <p className="privacy-policy-text">
          The information I collect is limited to what you voluntarily provide
          when you contact me through my website or engage with my services.
          This may include your name, email address, phone number, and any other
          details you choose to share about your project or inquiry.
        </p>

        <h3 className="privacy-policy-subtitle">How I Use Your Information:</h3>
        <p className="privacy-policy-text">
          The personal information you provide is used solely for the purpose of
          responding to your inquiries, providing you with the services you
          request, and maintaining a record of our communication and
          transactions. I do not use your information for marketing purposes nor
          do I send unsolicited communications.
        </p>

        <h3 className="privacy-policy-subtitle">Data Sharing:</h3>
        <p className="privacy-policy-text">
          Your information WILL NOT be shared with any third parties unless
          EXPLICITY AUTHORIZED BY YOU or as required by law.
        </p>

        <h3 className="privacy-policy-subtitle">Data Security:</h3>
        <p className="privacy-policy-text">
          I take the security of your data seriously. I employ industry-standard
          measures to protect your information from unauthorized access,
          disclosure, alteration, or destruction.
        </p>

        <h3 className="privacy-policy-subtitle">
          Changes to This Privacy Statement:
        </h3>
        <p className="privacy-policy-text">
          I may occasionally update this privacy statement to reflect changes in
          my practices or in the law. When I do, I will also revise the "last
          updated" date at the top of this statement. I encourage you to
          periodically review this statement to be informed about how I am
          protecting your information.
        </p>

        <h3 className="privacy-policy-subtitle">Contacting Me:</h3>
        <p className="privacy-policy-text">
          If you have any questions about this privacy statement, the practices
          of this site, or your dealings with me as a freelance software
          developer, please contact me at:
        </p>
        {/* Contact@davidwrightsportfolio.com */}
        <a
          className="privacy-email"
          href="mailto:Contact@davidwrightsportfolio.com"
        >
          <br></br>
          <br></br>
          Contact@davidwrightsportfolio.com
        </a>
      </div>
      <br></br>
      <br></br>
      <h2 className="privacy-policy-h2">
        I value your trust and am dedicated to protecting your privacy.
      </h2>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="privacy-policy-update">Last updated: November, 2024</p>
      <ScrollToTop />

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
