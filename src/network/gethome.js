import {get, post } from './axios.js'

export function getimg(id) {
    return get('/user/' + id);
}

export function getcategory() {
    return get('/category');
}

export function getcommend() {
    return get("/commend");
}

export function getdetails(id, params) {
    return get("/detail/" + id, params)
}

export function getcomment(id) {
    return get("/comment/" + id);
}

export function getusers(id) {
    return get("/user/" + id);
}

export function postcom(id, params) {
    return post("/comment_post/" + id, params)
}

export function postup(params) {
    return post("/upload", params)
}

export function postupdate(id, params) {
    return post("/update/" + id, params)
}

export function getarticle(id) {
    return get("/article/" + id);
}

export function getsub(id, params) {
    return get("/sub_scription/" + id, params)
}

export function postsub(id, params) {
    return post("/sub_scription/" + id, params)
}

export function postcol(id, params) {
    return post("/collection/" + id, params)
}

export function getcol(id, params) {
    return get("/collection/" + id, params)
}

export function postlogin(params) {
    return post("/login", params)
}

export function postreg(params) {
    return post("/register", params)
}