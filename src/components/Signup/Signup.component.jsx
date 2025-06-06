import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";
import "./signup.styles.scss";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="dname">Display Name</label>
      <input
        id="dname"
        type="text"
        name="dname"
        value={dname}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <label htmlFor="cnfpassword">Confirm Password</label>
      <input
        id="cnfpassword"
        type="password"
        name="cnfpassword"
        value={cnfpassword}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
