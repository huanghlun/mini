export function fetchAPI(path, options, cb) {
    fetch("http://111.231.245.136:80/" + path, options)
        .then((res) => {
            cb.call(null, res);
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