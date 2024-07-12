import Request from "@/config/Request";

export const auth = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in", { email: params.email, password: params.password });
    console.log("response user:"+response);
    return response;
  } catch (error) {
    console.log("error request:"+error)
  }

  
};

export const authGoogle = async (params) => {
  const response = (await Request.post("/auth/sign-in/google", { googleTokenId: params.credential })).data;
  // console.log(response);
};


export const authGoogleEmail = async (params) => {
  const response = (await Request.post("/auth/sign-in/google/email", { email: params.email })).data;
  console.log(response);
  return response;
};