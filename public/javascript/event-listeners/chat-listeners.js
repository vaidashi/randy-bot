// const $ = require('jquery')
const appendInputText = require("../response-handlers/chat-responses").appendInputText
const postChat = require("../ajax-requests/chat-requests").postChat
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);


// import {appendInputText} from "../response-handlers/chat-responses"
// import {postChat} from "../ajax-requests/chat-requests"





$(function(){

  $(".btn.teal.pull-right").on("click", function(event) {
    var inputtedText = $("textarea").val()
    var parsedText = inputtedText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r?\n|\r]/g, " ")

    appendInputText(inputtedText)
    sendChat(parsedText)
  })

  $(".btn.red.pull-right").on("click", function(event) {
    $(".text-container").empty()
  })

})


function sendChat(text) {
  postChat(text)
}
