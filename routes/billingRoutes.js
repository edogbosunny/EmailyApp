const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // if (!req.user) {
    //   return res.status(401).send({ error: "you must log in" });
    // }
    // this has been handled
    // by the middleware file that was created
    // and inported in the route

    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 fro 5 credits",
      source: req.body.id
    });
    // console.log(charge);

    //req.user is made available by passport
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
