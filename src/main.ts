'use strict'

/**
 * Решение по идее еще можно оптимизировать.
 * Так же можно попробовать использовать Proxy-объекты для добавления обработчиков.
 * Плюс в main файле можно убрать then/catch и заменить на async/await.
 */

import Interceptor from './interceptor';
import { timeoutFunc, syncFunc, promiseFunc, xhrFunc } from './funcs';

Interceptor.interceptFuncs([
    syncFunc,
    timeoutFunc,
    promiseFunc,
    xhrFunc
])
    .then((res) => console.log('all funcs completed!!!', res))
    .catch((e) => console.log('error', e));

