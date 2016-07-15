var tape = require('tape');
var rule = require('../index.js'); //importamos el archivo index

tape('Detect root Login correctly', function(t){
	var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message) {
		t.equal(message.subject, 'Root user logged in to the console.', 'Detect root user login');
		t.end();
	});
});

tape('Not root Login', function(t){
	var notRootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(notRootLoginEvent, function(err, message) {
		t.equal(message, 'Not root login');
		t.end();
	});
});
