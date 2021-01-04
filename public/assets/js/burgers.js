$(document).on("click", ".eat-button", function () {
    const id = $(this).data('id');
    console.log(id);
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT"
    }).then(() => {
        location.reload();
    });

});

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