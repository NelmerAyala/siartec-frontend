const ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER = Object.freeze({
  NATURAL: {
    id: 1,
    name: "Natural",
    code: "NATURAL",
    letters_contributors: "NATURAL",
  },
  COMERCIAL: {
    id: 2,
    name: "Comercial",
    code: "COMERCIAL",
    letters_contributors: "LEGAL",
  },
  INDUSTRIAL: {
    id: 3,
    name: "Industrial",
    code: "INDUSTRIAL",
    letters_contributors: "LEGAL",
  },
  FIRMA: {
    id: 4,
    name: "Firma Personal",
    code: "FIRMA",
    letters_contributors: "NATURAL",
  },
});
const ENTITIES_TYPES_CONTRIBUTORS_ID_ORDER = Object.freeze(
  Object.keys(ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER).reduce((acc, k) => {
    const element = ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER[k];
    const id = `id${element.id}`;
    acc[id] = element;
    return acc;
  }, {})
);
const getTypeContributorById = (id) => {
  return ENTITIES_TYPES_CONTRIBUTORS_ID_ORDER[`id${id}`];
};
const getTypeContributorByName = (name) => {
  return ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER[name];
};

const TYPES_CONTRIBUTORS = ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER;

module.exports = {
  TYPES_CONTRIBUTORS,
  getTypeContributorById,
  getTypeContributorByName,
};
