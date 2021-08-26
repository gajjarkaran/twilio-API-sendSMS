// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var authToken = process.env.TWILIO_AUTH_TOKEN;

	const client = require("twilio")(accountSid, authToken);

	client.messages
		.create({
			body: "Hello Wynisco!",
			from: "MG6cfc9ac2e4fbbac6b37cb3a234d3208f",
			to: "+14569875732",
		})
		.then((message) => res.send(`The message to : ${message.to} was sent!`))
		.done();
});

app.listen(3000);

