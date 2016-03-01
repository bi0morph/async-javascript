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
	return new Promises(function (resolve, reject) {
		fakeAjax(file, function (text) {
			resolve(text);
		});	
	});
}


// --------------------------------------
// request all files at once in "parallel"
var promise1 = getFile("file1"),
	promise2 = getFile("file2"),
	promise3 = getFile("file3");

promise1
	.then(function (result) {
		output(result);
		return promise2;
	})
	.then(function (result) {
		output(result);
		return promise3;	
	})
	then(function (result) {
		output(result);
		output("Complete!");
	})


