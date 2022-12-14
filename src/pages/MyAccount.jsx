import React from "react";
import "../styles/my-account.scss";

const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="my-account-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <p className="value">My Name</p>
            <label for="email" className="label">
              Email
            </label>
            <p className="value">myname@gmail.com</p>
            <label for="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export { MyAccount };
