
const API = process.env.REACT_APP_API;
const TOKEN = process.env.REACT_APP_TOKEN;
console.log(API);

export function get(path)
{
    return fetch(API + path, {
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(result=>result.json())
}
