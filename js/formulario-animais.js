function showQuestion2() {
    document.getElementById("question2").style.display = "block";
}

function showQuestion3() {
    document.getElementById("question3").style.display = "block";
}

function showQuestion4() {
    document.getElementById("question4").style.display = "block";
}

function showMessage() {
    var breeds = document.getElementById("breeds").value;
    document.getElementById("message").innerHTML = "<br>Raças escolhidas:" + breeds + ".";
    document.getElementById("message").style.display = "block";
}