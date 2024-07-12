import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authGoogle } from '@/services/auth/signin';
import { signIn } from 'next-auth/react';


const handleLogin = async (googleData) => {
  console.log(googleData)
  // const res = await authGoogle(googleData);
  // const result = await signIn("googleCustom", {
  //   googleData
  // });
  // if (!result.error) {
  //   router.push("/");
  // }
  await signIn("googleonetap", {
    credential: googleData.credential,
    redirect: true,
  });

  };

export function LoginWithGoogle() {
  return <GoogleLogin type='standard'  theme='filled_black'
    onSuccess={ async credentialResponse => {
      await handleLogin(credentialResponse);      
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
}


