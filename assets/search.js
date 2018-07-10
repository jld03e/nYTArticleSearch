$(document).ready(function() {

function searchNytApi () {

    var searchTerm = $("#searchTerm").val();
    var startDate = $("#startDate"+"0101").val();
    var endDate = $("#endDate"+"0101").val();

    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json=?q=" + searchTerm + "&fq=The NewYork Times&begin_date=" + startDate + "&end_date="+ endDate + "&api-key=70e55927c17d48d0b81b1eaff313a191";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=hillary clinton&api-key=70e55927c17d48d0b81b1eaff313a191";
    
    $.ajax({
        url:queryURL,
        method: "GET"
    })

    .then(function(response) {

        console.log(response);

    })
}
searchNytApi ();

});