const keys = require("../../config/keys");
module.exports = survey => {
  return `
    <html>
      <body>
        <h2>We'll like your feedback</h1>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div>
         
        </div>
        <div>
       
        </div>
      </body>
    </html>

  `;
};
