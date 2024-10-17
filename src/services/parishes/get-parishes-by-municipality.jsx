import Request from "@/config/Request";

export const getParishesByMunicipality = async ({ municipality }) => {
  try {
    const response = await Request.get(
      "/parishes/municipality/" + municipality
    );
    return response;
  } catch (error) {
    console.log("error (getParishesByMunicipality):" + error);
  }
};
