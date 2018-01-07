const $  = require('jquery')


function appendInputText(words) {
  $('textarea').val(" ")
  var date  = new Date()

  $(".text-container").prepend(`
    <div class="container darker">
      <img src="/images/user.png" alt="Avatar" class="right">
      <p>${words}</p>
      <span class="time-left">${date}</span>
    </div>
    `)
}

function addReplyText(reply) {
  var time  = new Date()

  $(".text-container").prepend(`
    <div class="container">
      <img src="./images/randy_profile.png" alt="Avatar">
      <p>${reply}</p>
      <span class="time-right">${time}</span>
    </div>
    `)
}

module.exports =  {appendInputText, addReplyText}
