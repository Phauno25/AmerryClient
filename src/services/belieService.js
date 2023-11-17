const belieService = {
  getById: async (id, entity) => {
    let response = await fetch(`http://localhost:5000/api/${entity}/id/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    response = await response.json();
    return response;
  },

  getAll: async (entity) => {
    let response = await fetch(`http://localhost:5000/api/${entity}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    response = await response.json();
    return response;
  },
};

export default belieService;
