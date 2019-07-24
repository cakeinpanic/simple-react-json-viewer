import axios from 'axios';

export const MOCK_JSON = {
    name: 'mocked response',
    nested: {
        obj: {a: false, b: null, c: true},
        arr: [1, 2, 3],
        arrObj: [{c: 2, d: 3, e: {f: 5}}, {m: 4}]
    }
};

function timeout() {
    return new Promise((resolve, reject) => {
        const wait = setTimeout(() => {
            reject();
            clearTimeout(wait)
        }, 2000);
    })
}

export function request(url) {
    return Promise.race([axios.get(url), timeout()]).then(function (response) {
        return response.data;
    });
}
