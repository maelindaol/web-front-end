/*====================================================================
            UTILERIAS PARA EL MANEJO DE VALIDACIONES
======================================================================*/

/*------------------------
recibe un array y determina si 
el array esta vacio []
--------------------------*/
export const isArrayEmpty = (array) => {
  if (Array.isArray(array) && array.length) return false;
  return true;
};

/*------------------------
recibe un string y determina si 
esta vacio ""
--------------------------*/
export const isStringEmpty = (cad) => {
  if (cad && typeof cad === "string" && cad.trim().length !== 0) return false;
  return true;
};

/*------------------------
recibe un dato y determina si 
es objeto JS
--------------------------*/
export const isObject = (obj) => {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) return true;
  return false;
};
