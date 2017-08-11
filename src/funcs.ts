export function timeoutFunc() {
    setTimeout(() => {
        console.log('timeoutFunc completed');
    }, 1000)
}

export function promiseFunc() {
    return new Promise((resolve) => {
        console.log('promiseFunc completed');
        resolve(true);
    })
}

export function xhrFunc() {
    const xhr = new XMLHttpRequest();
    const url = 'https://script.google.com/macros/s/' +
                'AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.log(`${xhr.status}:${xhr.statusText}`);
        } else {
            console.log(xhr.responseText);
        }
        console.log('xhrFunc completed');
    };
    xhr.send();
}

export function syncFunc() {
    for (let i = 1; i <= 3; i++) {
        // console.log(`i: ${i}`)
    }

    console.log('syncFunc completed');
    return 'res'
}
