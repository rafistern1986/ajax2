$(document).ready(function () {
    $("input").click(function () {
        $("div").load("dbFile.html", function (responseDate, statusOfCall, XMLHttpRequestObject) {
            if (statusOfCall == "success") {
                var a = responseDate;
                var b = statusOfCall;
                var c = XMLHttpRequestObject;
                alert(a + b + c)
            }
            if (statusOfCall == "error") {
                alert("")
            }
        });
    });
});
