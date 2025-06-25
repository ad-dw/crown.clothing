import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SigninAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.coponent";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const signInGoogleUser = async () => {
    let { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await SigninAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" type="button" onClick={signInGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
