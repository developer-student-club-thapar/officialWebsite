$(document).ready(function() {
  $("#mymessage").on("keyup keypress", function(e) {
    var keyCode = e.keyCode || e.which;
    var text = $("#mymessage").val();
    if (keyCode === 13) {
      if (text === "" || $.trim(text) === "") {
        e.preventDefault();
        return false;
      } else {
        e.preventDefault();
        setUserResponse(text);
        $("#mymessage").blur();

        fetch("https://dsc-tiet.herokuapp.com/chat", {
          // mode:"no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": "http://34.68.209.238:4040/chat"
          },
          method: "POST",
          body: JSON.stringify({
            text: text
          })
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            setBotResponse(myJson["data"]);
          });

        return false;
      }
    }
  });

  $("#sendbutton").on("click", function(e) {
    var text = $("#mymessage").val();
    if (text === "" || $.trim(text) === "") {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();
      setUserResponse(text);
      $("#mymessage").blur();

      fetch("https://dsc-tiet.herokuapp.com/chat", {
        // mode:"no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true"
          //'Access-Control-Allow-Origin': 'http://34.68.209.238:4040/chat'
        },
        method: "POST",
        body: JSON.stringify({
          text: text
        })
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          setBotResponse(myJson["data"]);
        });

      return false;
    }
  });
});
$(document).ready(function() {
  $(".chat_on").click(function() {
    $(".Layout").toggle();
    $(".chat_on").hide(300);
    setTimeout(function() {
      var BotResponse1 =
        '<img class="botAvatar" src="../src/assets/user.png"><p class="botMsg">' +
        "Hello , This is DSC TIET" +
        '</p><div class="clearfix"></div>';
      $(BotResponse1)
        .appendTo(".chats")
        .hide()
        .fadeIn(1000);
    }, 1000);
    setTimeout(function() {
      var BotResponse2 =
        '<img class="botAvatar" src="../src/assets/user.png"><p class="botMsg">' +
        "How can we help you?" +
        '</p><div class="clearfix"></div>';
      $(BotResponse2)
        .appendTo(".chats")
        .hide()
        .fadeIn(1000);
    }, 2500);
    setTimeout(function() {
      var BotResponse3 =
        '<img class="botAvatar" src="../src/assets/user.png"><p class="botMsg">' +
        "You can ask about Team members, Teams, Lead, General Queries" +
        '</p><div class="clearfix"></div>';
      $(BotResponse3)
        .appendTo(".chats")
        .hide()
        .fadeIn(1000);
    }, 4000);
  });

  $(".chat_close_icon").click(function() {
    $(".Layout").hide();
    $(".chat_on").show(300);
  });
});

function setUserResponse(val) {
  var UserResponse =
    '<img class="userAvatar" src=' +
    "../src/assets/userAvatar.jpg" +
    '><p class="userMsg">' +
    val +
    ' </p><div class="clearfix"></div>';
  $(UserResponse)
    .appendTo(".chats")
    .show("slow");
  $("#mymessage").val("");
  scrollToBottomOfResults();
}

function scrollToBottomOfResults() {
  var terminalResultsDiv = document.getElementById("chats");
  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

function setBotResponse(val) {
  var BotResponse =
    '<img class="botAvatar" src="../src/assets/user.png"><p class="botMsg">' +
    val +
    '</p><div class="clearfix"></div>';
  $(BotResponse)
    .appendTo(".chats")
    .hide()
    .fadeIn(1000);
  scrollToBottomOfResults();
}
