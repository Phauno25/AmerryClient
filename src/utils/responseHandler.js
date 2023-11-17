const handleStatus = (response, callback) => {
  switch (response.status) {
    case 200:
      return callback;
    case 201:
      return callback;
    default:
      break;
  }
};

export default statusHandler;
