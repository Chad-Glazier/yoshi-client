const basePath = "https://api.coachyoshi.com/api/"

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

/**
 * Makes a request to the Coach Yoshi Rest API. This function is a wrapper for
 * `fetch` that makes various assumptions about the `RequestInit` object. 
 * 
 * @param relativePath a path relative to the coachyoshi domain; omit the first 
 * `/`. Defaults to the empty string.
 * @param body any object that can be `JSON.stringify`'d.
 * @param method defaults to `"POST"` if the `body` is defined, otherwise 
 * defaults to `"GET"`.
 * @param queryParams an object to set query parameters.
 * @returns A normal `Response` object as from a call to `fetch`.
 */
function req(
    relativePath?: string,
    body?: any,
    method?: HttpMethod,
    queryParams?: Record<string, string | number | boolean>
): Promise<Response> {
    // build out the request url
    let url = basePath + (relativePath ?? "")
    if (queryParams) {
        url += "?"
        for (const key in queryParams) {
            url += `${key}=${queryParams[key]}&`
        }
    }

    // build out the `RequestInit` object
    let options: RequestInit = {}
    if (!body) {
        options.method = method ?? "GET"
        options.credentials = "include"
    } else {
        options.method = method ?? "POST"
        options.body = JSON.stringify(body)
        options.headers = {
            "Content-Type": "application/json"
        }
        options.credentials = "include"
    }

    // make the request!
    return fetch(url, options)
}

export default req
export type {
    HttpMethod
}
