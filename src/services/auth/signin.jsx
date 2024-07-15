import Request from "@/config/Request";

export const auth = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in", { email: params.email, password: params.password });
    console.log("response (auth): "+response);
    return response;
  } catch (error) {
    console.log("error (auth):"+error)
  }
};

export const authGoogleEmail = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in/google/email", { email: params.email });
    console.log("response (authGoogleEmail): "+response);
    return response;
  } catch (error) {
    console.log("error (authGoogleEmail):"+error)
  }
};

export const authGoogle = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in/google", { googleTokenId: params.credential });
    console.log("response (authGoogle): "+response); 
    return response;
  } catch (error) {
    console.log("error (authGoogle):"+error)
  }
}
