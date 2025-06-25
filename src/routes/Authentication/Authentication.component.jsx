import "./Authentication.styles.scss";
import Signup from "../../components/Signup/Signup.component";
import SignIn from "../../components/SignIn/SignIn.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Authentication;
