
const API = "https://api.themoviedb.org/3"

export function get(path)
{
    return fetch(API + path, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTBjODk3ODUwOGY5NzhmMTM0ZDZjYWI1NTkyZWRmOSIsInN1YiI6IjYyZjAyY2U3Y2VlMmY2MDA3ZDM0Yjg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fPBHKtaA4xm0v2NvBj8syD82MZEb4vLWe71noMCq838',
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(result=>result.json())
}
