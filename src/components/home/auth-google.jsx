import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { authGoogle } from "@/services/auth/signin";
import { signIn } from "next-auth/react";

export function LoginWithGoogle(props) {
  return (
    <GoogleLogin
      type="standard" /* theme='filled_black'*/
      onSuccess={async (credentialResponse) => {
        await props.handleLogin(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
