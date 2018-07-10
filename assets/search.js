$(document).ready(function() {

function searchNytApi () {

    var searchTerm = $("#searchTerm").val();
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
//conversion of startDate/endDate through moment.js to YYYYMMDD:

    var begin_date = moment(startDate, "YYYY-MM-DD");
    var end_date = moment(endDate, "YYYY-MM-DD");

    console.log(searchTerm);
    console.log(startDate);
    console.log(endDate);
    console.log(begin_date);
    console.log(end_date);


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json=?q=" + searchTerm + "&fq=The NewYork Times&begin_date=" + begin_date + "&end_date="+ end_date + "&api-key=70e55927c17d48d0b81b1eaff313a191";
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=hillary clinton&api-key=70e55927c17d48d0b81b1eaff313a191";
    
    $.ajax({
        url:queryURL,
        method: "GET"
    })

    .then(function(response) {

        console.log(response);
    })
}
$("#search").click(searchNytApi);

});