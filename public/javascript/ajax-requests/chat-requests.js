const $ = require('jquery')
const API = "https://aiaas.pandorabots.com"
const addReplyText = require('../response-handlers/chat-responses').addReplyText
// import {addReplyText} from "../response-handlers/chat-responses"
// import {myAppId, myKey} from "../index"
// import {APP_ID, USER_KEY} from '../../config'
const myAppId = process.env.APP_ID
const myKey = process.env.USER_KEY

function postChat(words) {
  $.ajax({
    url: API + `/talk/${myAppId}/randy?user_key=${myKey}&input=${words}`,
    // url: API + `/talk/${APP_ID}/randy?user_key=${USER_KEY}&input=${words}`,

    method: "POST",
  }).then(function(data) {
    var botReply = data.responses
    addReplyText(botReply)
  }).fail(function() {
    handleError()
  })
}



function handleError(error) {
  console.log(error.statusText)
  console.log(error.responseText)
}


module.exports = {postChat}
