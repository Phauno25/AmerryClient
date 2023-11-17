const categoriaService = {
    getAll: async () => {
      const promesa = new Promise((resolve, reject) => {
        fetch("http://localhost:5000/api/categoria", {
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
      const categoria = fetch(`http://localhost:5000/api/categoria/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      }).then((res) => res.json());
  
      return categoria;
    },
  
    create: async (categoria) => {
      const promesa = new Promise((resolve, reject) => {
        fetch("http://localhost:5000/api/categoria", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(categoria),
        }).then((res) => resolve(res));
      });
  
      const respuesta = await promesa;
      return respuesta;
    },
  };
  
  export default categoriaService;
  