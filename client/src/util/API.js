import axios from "axios";

export default {
    // get routes
    getLandlordDetail: function (data) {
        return axios.get("/searchResults")
    }
}