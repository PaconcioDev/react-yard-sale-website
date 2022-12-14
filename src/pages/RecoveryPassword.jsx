import React from "react";
import "../styles/recovery-password.scss";

const RecoveryPassword = () => {
  return (
    <div className="password-recovery">
      <div className="password-recovery-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" className="input input-email" />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export { RecoveryPassword };
