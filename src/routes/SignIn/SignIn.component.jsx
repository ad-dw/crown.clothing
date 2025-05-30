import "./signIn.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";

const SignIn = () => {
  const signInGoogleUser = async () => {
    let { user } = await signInWithGooglePopup();
    const userAuthRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      I'm a sign in page.
      <button onClick={signInGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
