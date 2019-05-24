$('#search').keyup(function () {
    var searchField = $('search').val();
    var myExp = new RegExp(searchField, "i");

    $.getJSON("WCA_Results_Person_India.json", function(data){
        var output = '<ol class="searchResults">';
        // var index = 1;
        $.each(data, function (key, val) {
            if(val.personName.test(myExp)){
                output += '<p><li>'+
                            val.personName +' participated in ' +val.eventId + 
                            ' with an average speed '+(val.average/60).toFixed(3)
                        +' secs</li></p>';
            }
        });
        output += '</ol>';
        $('.orderedList').html(output);
    });
});



// $(".orderedList").load(APIendpoint[2]);