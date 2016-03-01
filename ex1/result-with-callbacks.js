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


// в этом массиве будем хранить объекты загружаемых файлов
// This array will store objects of downloadable files
var queue = [];

function onLoadedHandler(fileObj) {
    var lengthVal = queue.length,
        i;
    for (i = 0; i < lengthVal; i++) {

        // если файл еще не загружен, то дальше не проверяем
        // if the file has not yet been loaded, no further check
        if ( !queue[i].loaded ) {
            break;
        } else if ( !queue[i].rendered ) { 

        // если файл загружен и еще не выведен, то выводим
        // if the file is loaded and has not yet been launched , the output
            output( queue[i].textResult );
            queue[i].rendered = true;
        }
    }
    if ( i == lengthVal) {
        output( 'Complited!' ); 
    }
}

function getFile (file) {
    // объект который хранит состояния и результат загрузки
    // an object that stores the status and result of loading
	var fileObj = {
	    fileName: file,
	    textResult: null,
	    loaded: false,
	    rendered: false
	};
    queue.push(fileObj);

	fakeAjax(file, function (text) {
        
        fileObj.textResult = text;
        fileObj.loaded = true;

        // We extend along the entire line and otobrzhaem what is already in the correct sequence booted
        // проходимся по всей очереди и отобржаем то что уже загрузилось в правильной последовательности
		onLoadedHandler(fileObj);
	});
}

// запрашивать все файлы одновременно (параллельно)
getFile("file1");
getFile("file2");
getFile("file3");