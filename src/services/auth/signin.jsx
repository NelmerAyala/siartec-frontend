import Request from "@/config/Request";

export const auth = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in", {
      email: params.email,
      password: params.password,
    });
    return response;
  } catch (error) {
    console.log("error (auth):" + error);
  }
};

export const authGoogleEmail = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in/google/email", {
      email: params.email,
    });
    return response;
  } catch (error) {
    console.log("error (authGoogleEmail):" + error);
  }
};

export const authGoogle = async (params) => {
  try {
    const response = await Request.post("/auth/sign-in/google", {
      googleTokenId: params.credential,
    });
    return response;
  } catch (error) {
    console.log("error (authGoogle):" + error);
  }
};
