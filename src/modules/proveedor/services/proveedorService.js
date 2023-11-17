const proveedorService = {
  getAll: async () => {
    let response = await fetch("http://localhost:5000/api/proveedor", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    response = await response.json();
    return response;
  },

  getById: async (id) => {
    let response = await fetch(`http://localhost:5000/api/proveedor/id/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    response = await response.json();
    return response;
  },

  create: async (proveedor) => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/proveedor", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(proveedor),
      })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    const response = await promesa;
    return response;
  },

  edit: async (proveedor) => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/proveedor", {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(proveedor),
      })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    const response = await promesa;
    return response;
  },

  delete: async (id) => {
    const promesa = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/proveedor/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "Application/json",
        },
      })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    const response = await promesa;
    return response;
  },

  generarPago: async (pagoProveedor) => {
    const promesa = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/pagoProveedor", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(pagoProveedor),
      })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    const response = await promesa;
    return response;
  },
};

export default proveedorService;
