function loadJSON() {
    $.get("http://localhost:49206/api/movies", function (data, status) {
        if (status == "success") {
            var jsonObj = JSON.parse(data);
            return jsonObj;
        }
    })
    return "failed";    
}

function createJSON(title, genre, directorName) {
    $.post("http://localhost:49206/api/movies",
        {
            Title: title,
            Genre: genre,
            DirectorName: directorName
        },
        function (status) {
            return status;
        })
}

function updateJSON(title, genre, directorName) {
    $.ajax({
        url: "http://localhost:49206/api/movies",
        type: 'PUT',
        success: function ()
        {
            return "Success";
        },
        data:
        {
            Title: title,
            Genre: genre,
            DirectorName: directorName
        },
        contentType: type
    });
}

function deleteJSON(title, genre, directorName) {
    $.ajax({
        url: "http://localhost:49206/api/movies",
        type: 'DELETE',
        success: function () {
            return "Success";
        },
        data:
        {
            Title: title,
            Genre: genre,
            DirectorName: directorName
        },
        contentType: type
    });
}
