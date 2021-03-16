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