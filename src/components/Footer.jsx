import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-dark footer text-center text-light p-0 mt-5 m-0">
        ©️AnkurKumarRay {year} | all rights reserved
      </div>
    </>
  );
};

export default Footer;
