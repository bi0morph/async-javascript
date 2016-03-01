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


function makeThunk(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb)  {
		args.push(cb);
		fn.apply(null, args);
	}
}

function getFile (file) {
	// --------------------------------------
	var loaded = false,
		callbackFunction,
		resultText;
	fakeAjax(filem function (text) {
		loaded = true;
		resultText = text;
		
		if (callbackFunction) {
			callbackFunction(resultText);
		}
	})
	return function thunkFunction (cb) {
		callbackFunction = cb;

		if (resultText) {
			callbackFunction(resultText);
		}
	}

}



// request all files at once in "parallel"
var thunk1 = getFile("file1"),
	thunk2 = getFile("file2"),
	thunk3 = getFile("file3");

thunk1(function(text1) {
	output(text1);
	thunk2(function(text2) {
		output(text2);
		thunk3(function(text3) {
			output(text2);
			output("Complited!");
		});
	});
});
// --------------------------------------