$(document).ready(function () {
    $("input").click(function () {
        $("div").load("dbFile.html", function (responseDate, statusOfCall, XMLHttpRequestObject) {
            if (statusOfCall == "success") {
            alert("hi")
            }
            if (statusOfCall == "error") {
            alert("error")
            }
        });
    });
});
