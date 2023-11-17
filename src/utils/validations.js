const rgxNombre = /^[a-zA-Z][a-zA-Z0-9\s]*$/;
const rgxCodigo = /^[A-Z]{3}$/;
const rgxDeuda = /^-?\d+(\.\d+)?$/;
const rgxPrecio = /^(?!(?:0|0\.0|0\.00)$)[+]?\d+(\.\d|\.\d[0-9])?$/;
const rgxCantidad = /^[0-9]\d*$/;

const formValidations = {
  nombre: {
    required: {
      value: true,
      message: "Este campo no puede quedar vacío",
    },
    pattern: {
      value: rgxNombre,
      message: "Ingresá un nombre válido",
    },
    maxLength: {
      value: 20,
      message: "El nombre supera los 20 caracteres máximos.",
    },
  },
  codigo: {
    required: {
      value: true,
      message: "Este campo no puede quedar vacío",
    },
    pattern: {
      value: rgxCodigo,
      message: "El código solo debe tener 3 letras no numéricas",
    },
    maxLength: {
      value: 3,
      message: "El código supera los 3 caracteres máximos",
    },
  },
  deuda: {
    required: {
      value: true,
      message: "Este campo no puede quedar vacío",
    },
    pattern: {
      value: rgxDeuda,
      message: "Ingresá un valor válido",
    },
  },
  notEmpty:{
    required: {
      value: true,
      message: "Este campo no puede quedar vacío",
    },
  },
  precio: (precio) => {
    return rgxPrecio.test(precio);
  },
  cantidad: (cantidad) => {
    if (cantidad > 0) {
      return rgxCantidad.test(cantidad);
    } else {
      return false;
    }
  },
};

export default formValidations;
