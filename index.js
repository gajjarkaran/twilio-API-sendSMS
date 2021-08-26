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
			from: "+19437462874", //change this to a valid twilio number
			to: "+17324758731" //change this to a valid phone number
		})
		.then((message) => res.send(`The message to : ${message.to} was sent!`))
		.done();
});

app.listen(3000);

