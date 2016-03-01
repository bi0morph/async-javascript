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
	
	// or here
	
	fakeAjax(file, function (text) {

		// or here

	});
}


// --------------------------------------
// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");



