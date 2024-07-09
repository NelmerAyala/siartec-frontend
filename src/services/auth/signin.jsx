import Request from "@/config/Request";

export const auth = async (params) => {
  const response = (await Request.post("/auth/sign-in", { email: params.email, password: params.password })).data;
  // console.log(response);
};

export const authGoogle = async (params) => {
  const response = (await Request.post("/auth/sign-in/google", { googleTokenId: params.credential })).data;
  // console.log(response);
};