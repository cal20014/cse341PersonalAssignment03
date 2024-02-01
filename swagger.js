const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE341 Docs",
    description: "API documentation for CSE341",
  },
  host: "https://cse341-03-web-service.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
