const cajaService = {
  getAll: async () => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/caja", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => resolve(res));
    });

    const respuesta = await promesa;
    return respuesta;
  },

  getById: (id) => {
    const caja = fetch(`http://localhost:5000/api/caja/id/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    }).then((res) => res.json());

    return caja;
  },

  create: async (caja) => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/caja", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(caja),
      }).then((res) => resolve(res));
    });

    const respuesta = await promesa;
    return respuesta;
  },
};

export default cajaService;
