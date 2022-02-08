import instance from "./instance";

export const add = (post) => {
    const url = "/posts";
    return instance.post(url,post);
};

export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};

export const getAll = () => {
    const url = "/posts";
    return instance.post(url);
};

export const remove = ((id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
});

export const update = ((id,post) => {
    const url = `posts/${id}`;
    return instance.put(url, post);
});