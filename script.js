// Save Announcement
function saveAnnouncement() {
  var grade = document.getElementById("grades").value;
  var gender = document.getElementById("genders").value;
  var announcement = document.getElementById("inputBox").value;
  var team = document.getElementById("teams").value;

  var announcementData = {
    grade: grade,
    gender: gender,
    announcement: announcement,
    team: team
  };

  var storedAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];
  storedAnnouncements.push(announcementData);

  localStorage.setItem("announcements", JSON.stringify(storedAnnouncements));

  alert('Your Announcement Has Been Posted!');
}

// Save Student Data and Redirect to Viewer
function getStudentData() {
  var studentGrades = document.getElementById("studentGrades").value;
  var studentGenders = document.getElementById("studentGenders").value;
  var studentTeams = document.getElementById("studentTeams").value;

  localStorage.setItem("studentGrades", JSON.stringify(studentGrades));
  localStorage.setItem("studentGenders", JSON.stringify(studentGenders));
  localStorage.setItem("studentTeams", JSON.stringify(studentTeams));

  window.location.href = "viewer.html";
}

// Retrieve and Display Announcements
function getStudentViewer() {
  var studentGrades = JSON.parse(localStorage.getItem("studentGrades"));
  var studentGenders = JSON.parse(localStorage.getItem("studentGenders"));
  var studentTeams = JSON.parse(localStorage.getItem("studentTeams"));

  var storedAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];

  var announcementViewer = document.getElementById("announcementViewer");
  announcementViewer.innerHTML = ""; // Clear existing content

  for (var i = 0; i < storedAnnouncements.length; i++) {
    var announcement = storedAnnouncements[i];
    if (
      (announcement.gender === studentGenders || announcement.gender === "All") &&
      (announcement.grade === studentGrades || announcement.grade === "All") &&
      (announcement.team === studentTeams || announcement.team === "All")
    ) {
      var announcementText = document.createElement("p");
      announcementText.innerHTML = "Announcement: " + announcement.announcement + "<br>" +
      "<br>-------------------<br>";
      announcementViewer.appendChild(announcementText);
    }
  }
}

document.addEventListener("DOMContentLoaded", getStudentViewer);

function clearAnnouncements() {
  localStorage.removeItem("grades");
  localStorage.removeItem("genders");
  localStorage.removeItem("teams");
  localStorage.removeItem("inputBox");
  localStorage.removeItem("studentGrades");
  localStorage.removeItem("studentGenders");
  localStorage.removeItem("studentTeams");
  
  // Optionally, you can also clear the announcement viewer
  document.getElementById("announcementViewer").innerHTML = "";
}

function clearLocalStorage() {
  localStorage.clear();
  alert("Local storage has been cleared.");
}


