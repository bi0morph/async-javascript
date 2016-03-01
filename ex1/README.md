# Instructions  

Source: ([@getify](https://twitter.com/getify) [Comparing various async patterns for a single demo](https://github.com/getify/a-tale-of-three-lists))

1. This exercise calls for you to write some async flow-control code.  
 - Use callbacks only.  
 - Use thunks ( see [here](http://zef.me/6096/callback-free-harmonious-node-js) and [here](http://blog.getify.com/page/3/)).  
 - Use Promise.  
2. Expected behavior:  
 - Request all 3 files at the same time (in "parallel").
 - Render them ASAP (don't just blindly wait for all to finish loading).
 - BUT, render them in proper (obvious) order: "file1", "file2", "file3".
 - After all 3 are done, outpur "Complete!"  
   

# Инструкция (перевод)

1. Напишите управление последовательностью асинхронными событиями.
 - Используя одни лишь функции обратного вызова(callbacks)
 - Используя thunks ( see [here](http://zef.me/6096/callback-free-harmonious-node-js) and [here](http://blog.getify.com/page/3/))
 - Используя Promise/Deffered

2. Ожидаемое поведение:
	- Запрашиваем все 3 файла в один и тот же самый момент(параллельно).
	- Отобразите их сразу же, как только они будут загружены (не ждите пока все будут загружены)
	- Но, отображайте их в правильной очереди: "file1", "file2", "file3".
	- После того, как все три будут отображены, вывести сообщение "Завершено!".



## Simple thunk

```javascript

function add(a, b) {
	return a + b;
}

var thunk = function() {
	return add(10, 25);
}

thunk();
```  
  
## Not so simple thunk  

```javascript

function addAsync(a, b, cb) {
	setTimeout(function() {
		cb( a + b );
	}, 1000);
}

var thunk = function(cb) {
	return addAsync(10, 25, cb);
}

thunk(function(sum) {
	console.log( sum );
});
```  

## Create thunk from different functions  

```javascript

function makeThunk(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb)  {
		args.push(cb);
		fn.apply(null, args);
	}
}
```  