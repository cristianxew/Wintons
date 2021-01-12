import React, { useState } from "react";
import cartSpinnerGif from "../../images/cart-spinner.gif";
import { sanitize, setAuth } from "../../utils/functions";
import { isEmpty } from "lodash";
import { useMutation } from "@apollo/client";
import LOGIN from "../../mutations/login";
import { v4 } from "uuid";
import validateAndSanitizeLoginForm from "../../validator/login";
import Button from "../../components/button/index";
import "./login.scss";

const Login = ({ setLoggedIn }) => {
  const [loginFields, setLoginFields] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  // Login Mutation.
  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    LOGIN,
    {
      variables: {
        input: {
          clientMutationId: v4(), // Generate a unique id.,
          username: loginFields.username,
          password: loginFields.password,
        },
      },
      onCompleted: (data) => {
        // If error.
        if (!isEmpty(loginError)) {
          setErrorMessage(loginError.graphQLErrors[0].message);
        }

        const { login } = data;
        const authData = {
          authToken: login.authToken,
          user: login.user,
        };

        setAuth(authData);
        setLoggedIn(true);
      },
      onError: (error) => {
        if (error) {
          if (!isEmpty(error)) {
            setErrorMessage(error.graphQLErrors[0].message);
          }
        }
      },
    }
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);

    // Validation and Sanitization.
    const validationResult = validateAndSanitizeLoginForm({
      username: loginFields.username,
      password: loginFields.password,
    });

    if (validationResult.isValid) {
      setLoginFields({
        username: validationResult.sanitizedData.username,
        password: validationResult.sanitizedData.password,
      });
      login();
    } else {
      setClientSideError(validationResult);
    }
  };

  /**
   * Sets client side error.
   *
   * Sets error data to result received from our client side validation function,
   * and statusbar to true so that its visible to show the error.
   *
   * @param {Object} validationResult Validation Data result.
   */
  const setClientSideError = (validationResult) => {
    if (validationResult.errors.password) {
      setErrorMessage(validationResult.errors.password);
    }

    if (validationResult.errors.username) {
      setErrorMessage(validationResult.errors.username);
    }
  };

  const handleOnChange = (event) => {
    setLoginFields({ ...loginFields, [event.target.name]: event.target.value });
  };

  const { username, password } = loginFields;
  return (
    <div className="login-form">
      <h2 className="mb-4">Login</h2>
      {!isEmpty(errorMessage) && (
        <div
          className="alert alert-danger"
          dangerouslySetInnerHTML={{ __html: sanitize(errorMessage) }}
        />
      )}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="">
            Username:
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>

        <Button styles="button button__black" type="submit">
          Login
        </Button>
        {loginLoading && (
          <img
            className="woo-next-cart-item-spinner"
            src={cartSpinnerGif}
            alt="loading"
          />
        )}
      </form>
    </div>
  );
};
export default Login;
