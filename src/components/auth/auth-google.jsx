import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authGoogle } from '@/services/auth/signin';


const handleLogin = async (googleData) => {
  const res = await authGoogle(googleData);
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


