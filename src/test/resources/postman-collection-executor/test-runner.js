var newman = require('newman'); // require newman in your project
// call newman.run to pass `options` object and wait for callback
const express = require('express')
const app = express()

invokeIntegrationTests = function(req,res){
	newman.run({
		collection: require('./student-service.postman_collection.json'),
		environment: require('./local.postman_environment.json'),		
		reporters: 'cli'
		}, 
		function (err) {
			if (err) { throw err; }
				console.log('collection run complete!');
			}
	);
	res.send('Hello World!')
}
app.get('/invoke-integration-tests', (req, res) => invokeIntegrationTests(req,res) )
app.listen(3000, () => console.log('Example app listening on port 3000!'))
