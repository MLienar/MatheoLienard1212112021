/**
 * Module that exports default axios config. Used by ProfileService
 * @module Http-common
 */

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/user/",
    headers: {
        "Content-type": "application/json"
    }
})