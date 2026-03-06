let issues = JSON.parse(localStorage.getItem("issues")) || [];

let form = document.getElementById("issueForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let title = document.getElementById("title").value;
let desc = document.getElementById("description").value;
let category = document.getElementById("category").value;

let issue = {
title: title,
description: desc,
category: category
};

issues.push(issue);

localStorage.setItem("issues", JSON.stringify(issues));

alert("Issue Submitted Successfully!");

form.reset();

});
}

let list = document.getElementById("issueList");

if(list){

issues.forEach(function(issue){

let li = document.createElement("li");

li.innerHTML =
"<b>"+issue.title+"</b> - "+issue.category+
"<br>"+issue.description+"<br><br>";

list.appendChild(li);

});

}
