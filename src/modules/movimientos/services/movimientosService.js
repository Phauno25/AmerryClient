const movimientoService = {
  getAllByEntity: async (entidad) => {
    let response = await fetch(
      `http://localhost:5000/api/movimientos/${entidad}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    response = await response.json();
    return response;
  },

  create: async (movimiento) => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/movimiento", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(movimiento),
      })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    const response = await promesa;
    return response;
  },
};

export default movimientoService;
