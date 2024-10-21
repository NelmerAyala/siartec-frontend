import Request from "@/config/Request";

export const UpdateUser = async ({ params, session }) => {
  try {
    const response = await Request.patch("/users/" + session.user.id, params, {
      headers: { Authorization: session.access_token },
    });
    return response;
  } catch (error) {
    console.log("error (UpdateUser):" + error);
  }
};
