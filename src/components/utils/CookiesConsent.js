import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookiesConsent = () => {
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

  useEffect(() => {
    const consentValue = localStorage.getItem("cookieConsent");
    setIsConsentAccepted(consentValue === "true");
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsConsentAccepted(true);
  };

  return (
    <div className="cookieConsent">
      {!isConsentAccepted && (
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="cookieConsent"
          onAccept={handleAcceptCookie}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      )}
    </div>
  );
};

export default CookiesConsent;
