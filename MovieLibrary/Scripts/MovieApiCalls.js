function loadJSON(){
    $(function () {
        $.get("http://localhost:49206/api/movies", function (data, status) {
            if (status == "success") {

                var jsonObj = JSON.parse(data);
                return jsonObj;
            }
        })
        return "failed";
    }

function updateJSON() {
            var data_file = "http://localhost:49206/api/movies";
        }