window.onload = function () {
    //Reference the DropDownList.
    var year = document.getElementById("year-dropdown");

    //Loop and add the Year values to DropDownList.
    for (var i = 2000; i <= 2050; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        year.appendChild(option);
    }
};