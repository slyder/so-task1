'use strict'

import Interceptor from './interceptor';
import { timeoutFunc, syncFunc, promiseFunc, xhrFunc } from './funcs';

Promise.all([
    Interceptor.interceptFunc(syncFunc),
    Interceptor.interceptFunc(timeoutFunc),
    Interceptor.interceptFunc(promiseFunc),
    Interceptor.interceptFunc(xhrFunc)
])
    .then((res) => console.log('all funcs completed!!!', res))
    .catch((e) => console.log('error', e));

