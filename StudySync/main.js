import './style.css'

// Function to go back in the browser history
function goBack() {
  history.back();
}
// Add event listener to the element with the class 'back'
document.addEventListener('DOMContentLoaded', function () {
  var backButtons = document.querySelectorAll('.back');

  backButtons.forEach(function (backButton) {
    backButton.addEventListener('click', goBack);
  });
});



// Function to go to the 'replies2.html' page
function openReplies() {
  window.location.href = 'replies2.html';
}

// Add event listener to all elements with the class 'replies'
document.addEventListener('DOMContentLoaded', function () {
  var replyElements = document.querySelectorAll('.replies');

  if (replyElements.length > 0) {
    replyElements.forEach(function (element) {
      element.addEventListener('click', openReplies);
    });
  } else {
    console.error("No elements with the class 'replies' found");
  }
});


// Function to go to the 'replies2.html' page
function openGroups() {
  window.location.href = 'groups.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var groups=document.getElementById("groups");

  if (groups) {
    groups.addEventListener('click', openGroups);
  } else {
      console.error("groups button not found");
  }
});

// Function to go to the 'messenger.html' page
function openChats() {
  window.location.href = 'messenger.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var chats=document.getElementById("chats");

  if (chats) {
    chats.addEventListener('click', openChats);
  } else {
      console.error("chats button not found");
  }
});

// Function to go to the 'myProfile.html' page
function openMyProfile() {
  window.location.href = 'myProfile.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var myProfile=document.getElementById("myProfile");

  if (myProfile) {
    myProfile.addEventListener('click', openMyProfile);
  } else {
      console.error("myProfile button not found");
  }
});


// Function to go to the 'replies2.html' page
function openProfile() {
  window.location.href = 'profile.html';
}

// Add event listener to all elements with the class 'replies'
document.addEventListener('DOMContentLoaded', function () {
  var rprofile = document.querySelectorAll('.rprofile');

  if (rprofile.length > 0) {
    rprofile.forEach(function (element) {
      element.addEventListener('click', openProfile);
    });
  } else {
    console.error("No elements with the class 'rprofile' found");
  }
});

// Function to go to the 'files.html' page
function openFiles() {
  window.location.href = 'files.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var files=document.getElementById("files");

  if (files) {
    files.addEventListener('click', openFiles);
  } else {
      console.error("files button not found");
  }
});

// Function to go to the 'replies2.html' page
function openChat() {
  window.location.href = 'chat.html';
}

// Add event listener to all elements with the class 'replies'
document.addEventListener('DOMContentLoaded', function () {
  var chat = document.querySelectorAll('.chat');

  if (chat.length > 0) {
    chat.forEach(function (element) {
      element.addEventListener('click', openChat);
    });
  } else {
    console.error("No elements with the class 'chat' found");
  }
});


// Function to go back in the browser history
function openHome() {
  onclick=window.location.href='index.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var home=document.getElementById("home");

  if (home) {
    home.addEventListener('click', openHome);
  } else {
      console.error("home button not found");
  }
});


// Function to go back in the browser history
function openMess() {
  onclick=window.location.href='messenger.html';
}

// Add event listener to the element with the id 'home'
document.addEventListener('DOMContentLoaded', function() {
  var messenger=document.getElementById("messenger");

  if (messenger) {
    messenger.addEventListener('click', openMess);
  } else {
      console.error("messenger button not found");
  }
});








