import Request from "@/config/Request";

export const createUser = async (params) => {
  try {
    if (!params.hasOwnProperty("role")) {
      const ROLES = {
        NATURAL: { id: 1 },
        COMMERCIAL: { id: 2 },
        INDUSTRIAL: { id: 3 },
      };
      const roleForContributorType = {
        1: "NATURAL",
        2: "COMMERCIAL",
        3: "INDUSTRIAL",
      };
      params.role = ROLES[roleForContributorType[params.contributor_type]].id;
    }
    console.log("params.role: " + params.role);
    const response = await Request.post("/users", params);
    console.log("response (createUser): " + response);
    return response;
  } catch (error) {
    console.log("error (createUser):" + error);
  }
};
