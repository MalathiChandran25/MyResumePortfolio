// Get the modal
var modal = document.getElementById("modal_career");
var modal1 = document.getElementById("modal_education");
var modal2 = document.getElementById("modal_skills");
var modal3 = document.getElementById("modal_participation");
var modal4 = document.getElementById("modal_certification");

var modal_div_tech = document.getElementById("data_tech");
var modal_div_ide = document.getElementById("data_ide");
var modal_rate_program = document.getElementById("modal_rating_program");
var modal_rate_front = document.getElementById("modal_rating_front");

// Get the button that opens the modal
var btn = document.getElementById("career_obj");
var edu_btn = document.getElementById("education_btn");
var skill_btn = document.getElementById("skills_btn");
var part_btn = document.getElementById("participation");
var cer_btn = document.getElementById("certification");

var tech_btn = document.getElementById("technical");
var ide_btn = document.getElementById("ide");
var pro_btn = document.getElementById("rate_program");
var front_btn = document.getElementById("rate_front");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];

var spanclose_1 = document.getElementsByClassName("close_btn")[0];
var spanclose_2 = document.getElementsByClassName("close_btn")[1];
var spanrateclose_1 = document.getElementsByClassName("rate_close_btn")[0];
var spanrateclose_2 = document.getElementsByClassName("rate_close_btn")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
edu_btn.onclick = function() {
    modal1.style.display = "block";
}
skill_btn.onclick = function() {
    modal2.style.display = "block";
}
part_btn.onclick = function() {
    modal3.style.display = "block";
}
cer_btn.onclick = function() {
    modal4.style.display = "block";
}

tech_btn.onclick = function() {
    modal_div_tech.style.display = "block";
}
ide_btn.onclick = function() {
    modal_div_ide.style.display = "block";
}
pro_btn.onclick = function() {
    modal_rate_program.style.display = "block";
}
front_btn.onclick = function() {
    modal_rate_front.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}


spanclose_1.onclick = function() {
    modal_div_tech.style.display = "none";
}
spanclose_2.onclick = function() {
    modal_div_ide.style.display = "none";
}
spanrateclose_1.onclick = function() {
    modal_rate_program.style.display = "none";
}
spanrateclose_2.onclick = function() {
    modal_rate_front.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal_div_tech) {
        modal_div_tech.style.display = "none";
    }
    if (event.target == modal_div_ide) {
        modal_div_ide.style.display = "none";
    }
    if (event.target == modal_rate_program) {
        modal_rate_program.style.display = "none";
    }
    if (event.target == modal_rate_front) {
        modal_rate_front.style.display = "none";
    }
}