import Request from "@/config/Request";

export const createUser = async (params) => {
  console.log("params: "+ JSON.stringify(params));
  try {
    if (!params.hasOwnProperty("role")) {
      const ROLES = {
        NATURAL: { id: 3 },
        COMMERCIAL: { id: 4 },
        INDUSTRIAL: { id: 5 },
        FIRMA: { id: 6 },
      };
      const roleForContributorType = {
        1: "NATURAL",
        2: "COMMERCIAL",
        3: "INDUSTRIAL",
        4: "FIRMA",
      };
      params.role = ROLES[roleForContributorType[params.contributor_type]].id;
    }

    const response = await Request.post("/users", params);
    return response;
  } catch (error) {
    console.log("error (createUser):" + error);
  }
};
