
// Get references to the elements
const sendButton = document.getElementById('send');
const othersContainer = document.querySelector('.others');
const chatInput = document.getElementById('ip1');
const sendChatBtn = document.getElementById('send');

const inputInitHeight = '2';

// Add event listener to the input field
chatInput.addEventListener('input', function () {
  // Toggle classes based on input content
  if (this.value.trim() !== '') {
      sendButton.classList.remove('none');
      sendButton.classList.add('vis');
      othersContainer.classList.add('none');
  } else {
      sendButton.classList.remove('vis');
      sendButton.classList.add('none');
      othersContainer.classList.remove('none');
  }

  // Reset the height of the input textarea
  this.style.height = inputInitHeight + 'em';

  // Set the height to the scroll height if it's greater than the initial height
  if (this.scrollHeight > parseFloat(getComputedStyle(this).height)) {
      this.style.height = this.scrollHeight + 'px';
  }
});

chatInput.addEventListener('keydown', (e) => {
  othersContainer.style.display = 'none';
  sendChatBtn.style.display = 'block';

  if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChat();
      document.querySelectorAll('.others').forEach((div) => {
          div.style.display = 'block';
      });
  }
});

document.body.addEventListener('click', (e) => {
  // Check if the click is outside the textarea
  if (!chatInput.contains(e.target)) {
      // Reset the height on click outside
      chatInput.style.height = inputInitHeight + 'em';
  }
});

chatInput.addEventListener('blur', () => {
  // Reset the height on blur
  chatInput.style.height = inputInitHeight + 'em';
});

function sendMessage() {
  // Get the input value from the textarea
  var messageText = chatInput.value;

  if (messageText.trim() !== '') {
      // Create a new list item for the outgoing message
      var newMessage = document.createElement('li');
      newMessage.className = 'outgoing';

      // Create a paragraph element for the message text
      var messageParagraph = document.createElement('p');
      messageParagraph.textContent = messageText;

      // Append the message paragraph to the new list item
      newMessage.appendChild(messageParagraph);

      // Get the chatbox and append the new message to it
      var chatbox = document.getElementById('chatbox');
      chatbox.appendChild(newMessage);
      chatbox.scrollTo(0, chatbox.scrollHeight);

      // Clear the textarea after sending the message
      chatInput.value = '';

      // Increase the height of the main element
      var adjust = document.getElementById('adjust');
      adjust.style.height = `${adjust.scrollHeight -95 + 10}px`; // Adjust the value as needed
  }
}

sendChatBtn.addEventListener('click', function (event) {
  event.preventDefault();
  sendMessage();
  sendChatBtn.style.display = 'none';

  // Reset the height of the textarea after sending the message
  chatInput.style.height = inputInitHeight + 'em';

  document.querySelectorAll('.others').forEach((div) => {
      div.style.display = 'block';
  });
});

