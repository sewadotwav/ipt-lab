function submitData() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let color = document.getElementById("color").value.trim();

    if (name === "" || age === "" || gender === "" || color === "") {
        alert("Please complete all fields.");
        return;
    }

    document.getElementById("result").innerHTML =
        "<h3>Information</h3>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Age:</b> " + age + "</p>" +
        "<p><b>Gender:</b> " + gender + "</p>" +
        "<p><b>Favorite Color:</b> " + color + "</p>";
}