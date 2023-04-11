import axios from "axios";

import SHA256 from "crypto-js/sha256";
import Hex from "crypto-js/enc-hex";

const baseURL = "https://randomuser.me/api/?seed=lll";

export async function fetchPerson(addon = "") {
  try {
    const response = await axios.get(baseURL + addon);
    return response.data;
  } catch (error) {
    console.log(
      "Error fetching results. Please try again later. Error: " + error
    );
  }
}

export async function loginUser(credentials) {
  const { username, password } = credentials || {};

  try {
    const info = await fetchPerson("&inc=login");

    let salt = info.results[0].login.salt;
    let key = SHA256(password + salt);

    let match_user = info.results[0].login.username;
    let match_pw = info.results[0].login.sha256;

    if (username !== match_user) {
      return 1;
    } else if (key.toString(Hex) !== match_pw) {
      return 2;
    } else return info.results[0].login.uuid;
  } catch (error) {
    console.log("Error logging in. Error: " + error);
  }
}

export async function fetchFriends(page) {
  try {
    const info = await fetchPerson(`&page=${page}&results=25&exc=login`);

    return info.results;
  } catch (error) {
    console.log("Failed to get friends. Error: " + error);
  }
}
