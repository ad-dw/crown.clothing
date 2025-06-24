import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";
import "./signup.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.coponent";

const defaultFormValues = {
  dname: "",
  email: "",
  password: "",
  cnfpassword: "",
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { dname, email, password, cnfpassword } = formFields;

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
    if (password !== cnfpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName: dname });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("OOPS!! email already in use.");
      else alert("User creation failed. try again later!");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          id="dname"
          type="text"
          name="dname"
          value={dname}
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          id="cnfpassword"
          type="password"
          name="cnfpassword"
          value={cnfpassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default Signup;
