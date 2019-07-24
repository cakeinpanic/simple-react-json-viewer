const axios = require('axios');
export const JSON = {
    name: 'mocked response',
    nested: {
        obj: {a: 1, b: 2},
        arr: [1, 2, 3],
        arrObj: [{c: 2, d: 3, e: {f: 5}}, {m: 4}]
    }
}

export function request(url) {
    return axios.get(url)
                .then(function (response) {
                    return response.data;
                });

}

