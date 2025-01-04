
const API = {
    post: (url, body) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: { message: `${url.includes("login") ? "Login" : "Registration"} successful!` },
          });
        }, 1000);
      });
    },
  };
  
  export default API;
  
