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