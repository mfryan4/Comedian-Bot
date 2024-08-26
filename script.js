let jokeIndex = 0
const jokes = [["What did 0 say to 8?", "Nice Belt."],
["Why don't scientist trust atoms?","Because they make up everything!"]];
const chatContent = document.querySelector(".chat-content");

function appendBotMessage (messageText){
const messageDiv = document.createElement("div");
messageDiv.className = "message bot-message";
chatContent.append(messageDiv);
const avatar = document.createElement("div");
avatar.className = "fas fa-robot message-avatar";
messageDiv.append(avatar);
const contentDiv = document.createElement("div");
contentDiv.className = "message-content";
contentDiv.textContent = messageText;
messageDiv.append(contentDiv);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.")


function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length){
  appendBotMessage("Sorry, I'm out of jokes for now!");
  return;
}
  requestButton.style.display="none";
  setTimeout(function(){appendBotMessage("Ok, got one.")}, 1000);
  setTimeout(function(){appendBotMessage(jokes[jokeIndex][0])}, 1500);
  setTimeout(function(){appendBotMessage(jokes[jokeIndex][1]); jokeIndex++; requestButton.style.display="inline-block"}, 2000);
}

function appendUserMessage(messageText){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.append(messageDiv);
  const avatar = document.createElement('div');
  avatar.className= "fas fa-smile message-avatar";
  messageDiv.append(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(contentDiv);
}
document.getElementById("requestButton")