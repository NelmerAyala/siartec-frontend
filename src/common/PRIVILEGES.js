// PAGAR ESTAMPLILL
// LISTAR ESTAMPIL
const ENTITIES_PRIVILEGES_NAME_ORDER = Object.freeze({
  // PROFILE

  INICIO: {
    code: "C_NUEVO",
    name: "Inicio",
    icon: "Home",
    module: "natural",
    path: "/app/",
  },

  R_PROFILE: {
    code: "R_PROFILE",
    name: "Perfil",
    icon: "AccountBox",
    module: "profile",
    path: "/app/perfil",
  },
  UPDATE_PASSWORD: {
    code: "U_PASSWORD",
    name: "Cambiar contraseña",
    icon: "Password",
    module: "profile",
    path: "/app/perfil/cambiar-contra",
  },

  // TAX STAMPS
  CREATE_TAX_STAMPS: {
    code: "C_TAX_STAMPS",
    name: "Generar Estampillas",
    icon: "Difference",
    module: "natural",
    path: "/app/estampilla/generar",
  },

  READ_TAX_STAMPS: {
    code: "R_TAX_STAMPS",
    name: "Lista de Estampillas",
    icon: "List",
    module: "natural",
    path: "/app/estampilla/lista",
  },
});
const ENTITIES_PRIVILEGES_ID_ORDER = Object.freeze(
  Object.keys(ENTITIES_PRIVILEGES_NAME_ORDER).reduce((acc, k) => {
    const element = ENTITIES_PRIVILEGES_NAME_ORDER[k];
    const id = `id${element.id}`;
    acc[id] = element;
    return acc;
  }, {})
);
const getPrivilegesById = (id) => {
  return ENTITIES_PRIVILEGES_ID_ORDER[`id${id}`];
};
const getPrivilegesByName = (name) => {
  return ENTITIES_PRIVILEGES_NAME_ORDER[name];
};

const PRIVILEGES = ENTITIES_PRIVILEGES_NAME_ORDER;

module.exports = {
  PRIVILEGES,
  getPrivilegesById,
  getPrivilegesByName,
};
