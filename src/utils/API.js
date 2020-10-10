import axios from "axios";

export default {
  // Getting all user data from URL
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
