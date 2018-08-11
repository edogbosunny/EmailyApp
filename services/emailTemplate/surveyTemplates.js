const keys = require("../../config/keys");
module.exports = survey => {
  return `
    <html>
      <body style="text-align:center;">
        <h2>We'll like your feedback</h1>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div>
         <a href = "http://localhost:3000">Yes </a>
        </div>
        <div>
        <a href = "http://localhost:3000">No </a>
        </div>
      </body>
    </html>

  `;
};
