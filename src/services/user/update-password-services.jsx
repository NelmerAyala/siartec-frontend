import Request from "@/config/Request";

export const ChangePasswordUser = async (params, session) => {
  try {
    const response = await Request.put(
      "/users/password/" + session.user.id,
      params,
      { headers: { Authorization: session.access_token } }
    );
    return response;
  } catch (error) {
    console.log("error (updatePassword):" + error);
  }
};
