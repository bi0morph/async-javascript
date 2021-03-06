function output(text) {
	console.log(text);
}

function fakeAjax (url, cb) {
	var fake_responces = {
		"file1" : "The first text",
		"file2" : "The second text",
		"file3" : "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function () {
		cb(fake_responces[url]);
	}, randomDelay);
}


// --------------------------------------
// what do we do here


function getFile (file) {
	return new Promise(function(resolve, reject) {
		fakeAjax(file, resolve);	
	});
}

//.map
//.reduce

// Request all files at once in
// "parallel" via getFile(..)
//
// Render as each one finishes,
// but only once previous rendering
// is done

var files = ['file1', 'file2', 'file3'];

files.map(getFile)
.reduce(function(chain, promise) {
	return chain.then(function() {
		return promise;
	}).then(output);
}, Promise.resolve())
.then(function() {
	output('Complite');
});