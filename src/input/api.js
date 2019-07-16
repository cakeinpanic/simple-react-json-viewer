const axios = require('axios');
const JSON = {
    id: '1',
    nested: {
        obj: {a: 1, b: 2},
        arr: [1, 2, 3],
        arrObj: [{c: 2, d: 3, e: {f: 5}}]
    }
}

export function request(url) {
    console.log(url);
// Make a request for a user with a given ID
    return axios.get(url)
                .catch(function (error) {
                    // handle error
                 //   console.log(error);

                })
                .then(function (response) {
                    // handle success
                   // console.log(response);
                    return JSON;
                })
                .finally(function () {
                    // always executed
                });
}

