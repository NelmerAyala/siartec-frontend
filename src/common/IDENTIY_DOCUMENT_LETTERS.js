const ENTITIES_LETTERS_NAME_ORDER = Object.freeze({
  VENEZOLANO: { id: 1, description: "VENEZOLANO", code: "V" },
  EXTRANJERO: { id: 2, description: "EXTRANJERO", code: "E" },
  JURIDICO: { id: 3, description: "JURIDICO", code: "J" },
  GUBERNAMENTAL: { id: 4, description: "GUBERNAMENTAL", code: "G" },
  CONSEJO: { id: 5, description: "CONSEJO", code: "C" },
  PASAPORTE: { id: 6, description: "PASAPORTE", code: "P" },
});
const ENTITIES_LETTERS_ID_ORDER = Object.freeze(
  Object.keys(ENTITIES_LETTERS_NAME_ORDER).reduce((acc, k) => {
    const element = ENTITIES_LETTERS_NAME_ORDER[k];
    const id = `id${element.id}`;
    acc[id] = element;
    return acc;
  }, {})
);
const getLettersById = (id) => {
  return ENTITIES_LETTERS_ID_ORDER[`id${id}`];
};
const getLettersByName = (name) => {
  return ENTITIES_LETTERS_NAME_ORDER[name];
};

const LETTERS = ENTITIES_LETTERS_NAME_ORDER;

module.exports = {
  LETTERS,
  getLettersById,
  getLettersByName,
};
