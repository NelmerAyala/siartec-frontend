import Request from "@/config/Request";

export const getProfiledUser = async (session) => {
  console.log("session getProfiledUser: " + JSON.stringify(session));
  try {
    const response = await Request.get(
      "/users/" + session.user.id
      // {
      // headers: { Authorization: session.access_token },
      // }
    );
    return response;
  } catch (error) {
    console.log("error (getProfiledUser):" + error);
  }
};
