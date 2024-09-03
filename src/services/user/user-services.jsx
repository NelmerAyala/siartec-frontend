import Request from "@/config/Request";

export const createUser = async (params) => {
  try {
    if (!params.hasOwnProperty("role")) {
      const ROLES = {
        NATURAL: { id: 1 },
        COMMERCIAL: { id: 2 },
        INDUSTRIAL: { id: 3 },
        FIRMA: { id: 4 },
      };
      const roleForContributorType = {
        3: "NATURAL",
        4: "COMMERCIAL",
        5: "INDUSTRIAL",
        6: "FIRMA",
      };
      params.role = ROLES[roleForContributorType[params.contributor_type]].id;
    }

    const response = await Request.post("/users", params);
    return response;
  } catch (error) {
    console.log("error (createUser):" + error);
  }
};
