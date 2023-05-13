const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

// Create a server instance
const server = http.createServer((req, res) => {
  // Read the EJS template file
  fs.readFile("index.ejs", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal server error");
      return;
    }

    // Define the data to be passed to the template
    const title = "My EJS Page";
    const content = "Welcome to my EJS page!";
    const templateData = { title, content };

    // Render the EJS template with the data
    const html = ejs.render(data, templateData);

    // Send the HTML response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
