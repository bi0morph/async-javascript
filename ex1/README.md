# Instructions  

Source: (@getify Comparing various async patterns for a single demo)[https://github.com/getify/a-tale-of-three-lists]  

1. This exercise calls for you to write some async flow-control code.  
 - Use callbacks only.  
 - Use thunk.  
 - Use Promise.  
2. Expected behavior:  
 - Request all 3 files at the same time (in "parallel").
 - Render them ASAP (don't just blindly wait for all to finish loading).
 - BUT, render them in proper (obvious) order: "file1", "file2", "file3".
 - After all 3 are done, outpur "Complete!"  
   

# Инструкция (перевод)

1. Напишите управление последовательностью асинхронными событиями.
 - Используя одни лишь функции обратного вызова(callbacks)
 - Используя thunk
 - Используя Promise/Deffered

2. Ожидаемое поведение:
	- Запрашиваем все 3 файла в один и тот же самый момент(параллельно).
	- Отобразите их сразу же, как только они будут загружены (не ждите пока все будут загружены)
	- Но, отображайте их в правильной очереди: "file1", "file2", "file3".
	- После того, как все три будут отображены, вывести сообщение "Завершено!".