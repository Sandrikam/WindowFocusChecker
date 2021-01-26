
$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                // do work
                $('#Header').text ('Not Active')
                console.log("Not Active");
                break;
            case "focus":
                // do work
                $('#Header').text ('Active')
                console.log("Active");
                break;
        }
    }

    $(this).data("prevType", e.type);
})

setInterval(function() {console.log(document.visibilityState);}, 1000);
