export function fetchAPI(path, options, cb) {
    fetch("http://111.231.245.136:80/" + path, options)
        .then((res) => {
            // console.log(res.data);
            return res.json();
            // cb.call(null, res);
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

    // fetch("http://111.231.245.136:80/" + path, {
    //     method: 'POST',
    //     headers: {
    //         "content-type": "application/x-www-form-urlencoded"
    //     },
    //     body: "name=eric",
    //     mode: 'cors'
    // })
}