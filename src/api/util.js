function jsonToString(json) { //json转字符串
    let keys = Object.keys(json), result = [];
    for(let key of keys) {
        let str = key + "=" + json[key];
        result.push(str);
    }
    return result.join('&');
}


/*
* post请求的fetchAPI
* @params path --路径
* @params data --传递的json参数
* @params resolve --请求成功回调函数（非必须）
* @params reject --请求失败回调函数（非必须）
*/

export function fetchPostAPI(path, data, resolve, reject) {
    fetch("http://111.231.245.136:80/" + path, {
            method: 'POST',
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: jsonToString(data),
            mode: 'cors' //配置跨域请求
        })
        .then((res) => {
            return res.json();     
        }).then((res) => {
            console.log(res);
            if(resolve) {
                resolve(res);
            }
        }).catch((err) => {
            console.log(err);
            if(reject) {
                reject(res);
            }
        })
}

/*
* get请求的fetchAPI
* @params path --路径
* @params data --传递的json参数
* @params resolve --请求成功回调函数（非必须）
* @params reject --请求失败回调函数（非必须）
*/

export function fetchGetAPI(path, data, resolve, reject) {
    fetch("http://111.231.245.136:8001/" + path + '?' + jsonToString(data))
        .then((res) => {
            return res.json();     
        }).then((res) => {
            console.log(res);
            if(resolve) {
                resolve.call(null, res);
            }
        }).catch((err) => {
            console.log(err);
            if(reject) {
                reject.call(null, res);
            }
        })
}
