import axios from "axios";
import constants from "../utils/constants";

export default class {
    constructor() {}

    getTestData = async (id) => {
        return axios
            .get(constants.API + "/tests/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };
}
