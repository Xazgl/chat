const formSend = document.getElementById('send-form')

formSend.onsubmit = function(event) {
  event.preventDefault()
  const username =formSend.username.value
  const message = formSend.message.value
  const request = {
    username: username,
    message: message

  }
  fetch('/chat', {
    method:'POST',
    headers: {
          'Content-Type':'application/json'
    },
    body: JSON.stringify(request)

  }).then(function(response) {
      if (response.ok) {
          return response.json()
      }
  }).then(function(response) {
      console.log(response);
  })
}