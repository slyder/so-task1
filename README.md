
# Задача

Дан массив произвольных функций. Их возвращаемое значение неизвестно. Используемые внутри библиотеки и вызовы неизвестны. При этом внутри функций могут испозовать следующие функции/операции: setTimeout, Promise, Xhr request, Синхронные операции.
Нужно реализовать механизм проверки завершения выполнения этого массива функций. Можно использовать любые библиотеки и возможности es6/7.


# Установка

```$xslt
git clone https://github.com/slyder/so-task1
npm i && npm run server
open http://localhost:8081/
```


# Результат решения и вывода в консоль

13:55:02.179 funcs.ts:36 syncFunc completed
13:55:02.182 funcs.ts:9 promiseFunc completed
13:55:02.799 funcs.ts:26 xhrFunc completed
13:55:03.183 funcs.ts:3 timeoutFunc completed
13:55:03.183 main.ts:18 all funcs completed!!!