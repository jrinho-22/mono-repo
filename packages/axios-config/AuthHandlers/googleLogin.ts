import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";
import { provider, auth } from "../firebase/InitializeFirebase";
import axiosInstance from "../createAxios";
import { postLoggedUser } from "../apis/api-user";

export const signInWithGoogle = async () => {
  try {
    const loggedUserKey = await signInWithPopup(auth, provider);
    const newData = {
      name: loggedUserKey.user.displayName,
      email: loggedUserKey.user.email
    };
    console.log(newData, 'neww')
    return newData;
  } catch (error) {
    console.log(error, "errorrr");
  }
};
