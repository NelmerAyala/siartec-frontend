import Request from "@/config/Request";

export const getStatesAll = async () => {
  try {
    const response = await Request.get("/states/");
    return response;
  } catch (error) {
    console.log("error (getStatesAll):" + error);
  }
};
