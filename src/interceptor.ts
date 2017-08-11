export default class Interceptor {

    /**
     * Создает счетчик, который при возвращении к нулю вызывает onCompleteAll.
     * @param onCompleteAll
     * @returns {(inc) => any}
     */
    static createCounter(onCompleteAll) {
        let counter = 0;
        return function(inc, debugNote = '') {
            counter += inc;
            console.info('#counter', counter, debugNote);
            if (counter === 0) onCompleteAll();
        }
    }

    static interceptFunc(func) {
        return new Promise((resolve, reject) => {
            const counter = this.createCounter(resolve);
            const setTimeout = this.interceptTimeout(counter);
            const send = this.interceptXhr(counter);

            try {
                counter(1, '-> sync / promise');
                const res = func();
                if (res && res.then) {
                    res
                        .then(() => counter(-1, '<- promise'))
                        .catch((e) => reject(e))

                } else {
                    counter(-1, '<- sync');
                }
            } catch (e) {
                reject(e);
            }

            this.clearTimeoutInterception(setTimeout);
            this.clearXhrInterception(send);
        })
    }

    static interceptTimeout(counter) {
        const _setTimeout = window.setTimeout;

        window.setTimeout = (func, timeout) => {
            counter(1, '-> timeout');
            return _setTimeout(() => {
                try {
                    func();
                } catch (e) {
                    console.error('!!!', e);
                }
                counter(-1, '<- timeout');
            }, timeout)
        };

        return _setTimeout;
    }

    static clearTimeoutInterception(setTimeout) {
        window.setTimeout = setTimeout;
    }


    static interceptXhr(counter) {
        const _send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function (...args) {

            this.addEventListener('readystatechange', () => {
                if (this.readyState !== 4) return;
                counter(-1, '<- xhr');
            }, false);

            counter(1, '-> xhr');
            return _send.apply(this, args);
        };

        return _send;
    }

    static clearXhrInterception(send) {
        XMLHttpRequest.prototype.send = send;
    }

}
