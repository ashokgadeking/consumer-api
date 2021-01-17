const { Publisher } = require("@pact-foundation/pact");

const opts = {
	pactFilesOrDirs: ['/Users/ashoktejagadepalli/work/pact/consumer-api/pacts'],
	pactBroker: 'http://127.0.0.1:9292',
	consumerVersion: '1.0.1',
	publishVerificationResult: true
}

new Publisher(opts)
	.publishPacts()
	.then(() => {
		console.log("Published Succesfully");
		console.log("http://127.0.0.1:9292")
	})
	.catch((e) => {
		console.log("error " + e);
	})