import Request from "@/config/Request";
// import CONTRIBUTORS from "@/common/TYPES_CONTRIBUTORS";

export const createUser = async (params) => {
  console.log("params: " + JSON.stringify(params));
  try {
    params.contributor_type = { id: params.contributor_type };
    const response = await Request.post("/users", params);
    return response;
  } catch (error) {
    console.log("error (createUser):" + error);
  }
};
