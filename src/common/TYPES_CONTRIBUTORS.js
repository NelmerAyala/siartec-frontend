const ENTITIES_TYPES_CONTRIBUTORS_NAME_ORDER = Object.freeze({
  NATURAL: {
    id: 1,
    name: "Natural",
    code: "NATURAL",
  },
  COMERCIAL: {
    id: 2,
    name: "Comercial",
    code: "COMERCIAL",
  },
  INDUSTRIAL: {
    id: 3,
    name: "Industrial",
    code: "INDUSTRIAL",
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
