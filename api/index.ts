import req, { HttpMethod } from "./req"

import * as user from "./user"

const api = {
    /**
     * This object contains a set of methods for creating/managing users,
     * including logging in, logging out, registration, deletion, and managing
     * preferences.
     */
    user
}

export default api
export { req }
export type { HttpMethod }
