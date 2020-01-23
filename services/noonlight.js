const axios = require("axios");
const token = require("../config/keys").noonlightToken;

module.exports = {
  // Sends an alarm to Noonlight staff that prompts an emergency response (or test text to phone# provided if using sandbox token)
  dispatchAlarm: alarmData => {
    return axios({
        method: "POST",
        url: "https://api-sandbox.noonlight.com/dispatch/v1/alarms",
        data: alarmData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(console.log)
        .catch(err => console.log(err));
  }
};