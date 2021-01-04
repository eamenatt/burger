// When dynamically generated devour buttons are clicked

$(document).on("click", ".devour-button", function () {
    const id = $(this).data('id');
    console.log(id);
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT"
    }).then(() => {
        location.reload();
    });

});

// When dynamically generated throw leftovers buttons are clicked

$(document).on("click", ".trash-button", function () {
    const id = $(this).data('id');
    console.log(id);
    $.ajax({
        url: "/api/burger/" + id,
        method: "DELETE"
    }).then(() => {
        location.reload();
    });
});


// Generate a burger
$('.add-burger').click(function (event) {
    event.preventDefault();
    const burgerName = $('#burgerOrder').val().trim();
    if (burgerName !== "") {
        $.ajax({
            url: "/api/burger",
            method: "POST",
            data: { burgerName }
        }).then(() => {
            location.reload();
        });
        console.log(burgerName);
    }
});