import Request from "@/config/Request";

export const getMunicipalityByState = async ({ state }) => {
  try {
    const response = await Request.get("/municipalities/state/" + state);
    return response;
  } catch (error) {
    console.log("error (getMunicipalityByState):" + error);
  }
};
