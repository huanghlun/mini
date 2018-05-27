export function fetchAPI(path, options, cb) {
    fetch("http://111.231.245.136:80/" + path, options)
        .then((res) => {
            cb.call(null, res);
        }).catch((err) => {
            console.log(err);
        })
}