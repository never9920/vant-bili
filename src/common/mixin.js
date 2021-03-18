export function activestorage(id) {
    sessionStorage.setItem('active', id)
}

export function namestorage(id) {
    sessionStorage.setItem('activename', id)
}

export function getactivestorage() {
    return sessionStorage.getItem('active')
}

export function getnamestorage() {
    return sessionStorage.getItem('activename')
}

export function getidstorage() {
    return sessionStorage.getItem('id')
}

export function gettokenstorage() {
    return sessionStorage.getItem('token')
}

export function idstorage(id) {
    sessionStorage.setItem('id', id)
}

export function tokenstorage(id) {
    sessionStorage.setItem('token', id)
}

export function tovis(val) {
    //console.log(val);
    sessionStorage.setItem("img", val.user_img);
    sessionStorage.setItem("gender", val.gender);
    sessionStorage.setItem("visid", val.id);
    sessionStorage.setItem("name", val.name);
    sessionStorage.setItem("desc", val.user_desc);
}

export function getimgstorage() {
    return sessionStorage.getItem('img')
}

export function getgenderstorage() {
    return sessionStorage.getItem('gender')
}

export function getvisidstorage() {
    return sessionStorage.getItem('visid')
}

export function getstorage() {
    return sessionStorage.getItem('name')
}

export function getdescstorage() {
    return sessionStorage.getItem('desc')
}


export function clearsess() {
    sessionStorage.clear()
}