'use strict'

function timeoutFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('timeout res');
            console.log('timeoutFunc completed');
        }, 1000)
    })
}

function promiseFunc() {
    return new Promise((resolve) => {
        resolve(true);
        console.log('promiseFunc completed');
    })
}

function xhrFunc() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                reject(`${xhr.status}:${xhr.statusText}`);
            } else {
                resolve(xhr.responseText);
            }
            console.log('xhrFunc completed');
        }
    })
}

function syncFunc() {
    for (let i = 0; i < 5; i++) {
        console.log(`i: ${i}`)
    }

    console.log('syncFunc completed');
    return 'sync res'
}


const funcsFixture = [
    timeoutFunc(),
    promiseFunc(),
    xhrFunc(),
    Promise.resolve(syncFunc())
];


Promise
    .all(funcsFixture)
    .then((res) => console.log('all funcs completed!!!', res))
    .catch(() => console.log('error'));
