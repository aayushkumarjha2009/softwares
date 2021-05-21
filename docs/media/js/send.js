function errorMsg() {
var msgErr = document.getElementById("modal-header");
msgErr.style.background = "#dd3b3b";
msgerrr = document.getElementById("message_sent_msg").innerText =
"Error While Sending Request";
$("#myModal").modal();
}

function timeMsg() {
var msgErr = document.getElementById("modal-header");
msgErr.style.background = "#dd3b3b";
msgerrr = document.getElementById("message_sent_msg").innerText =
"No Internet Connection";
$("#myModal").modal();
document.getElementById("load").style.display = "none";
}

function successMsg() {
var msgSucc = document.getElementById("modal-header");
msgSucc.style.background = "#5cb85c";
msgSuccc = document.getElementById("message_sent_msg").innerText =
"Thankyou for telling us";
$("#myModal").modal();
}

function finish() {
$("#form")[0].reset();
}

function sendemail() {
var Body = "Software Name: " + versionOf + "<br>Bye";
Email.send({
SecureToken: "31c101ed-19a9-4ff2-9d94-ba71df93dba2",
To: "deeptamresearchfoundation@gmail.com",
From: "deeptamresearchfoundation@gmail.com",
Subject: "Newer version is available in " + versionOf,
Body: Body,
}).then((message) => {
if (message == "OK") {
successMsg();
} else {
errorMsg();
console.error(message);
}
finish();
});
}

function getFrmDelay() {
timeDelay = setTimeout(timeMsg, 25000);
}
document.getElementById("form").onsubmit = function () {
getFrmDelay();
};
