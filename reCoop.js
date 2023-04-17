$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,


        slideMargin: 10,
        randomStart: true,
        speed: 3000,

    });

    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true
    })

    $("#tabs").tabs();

    $( "#pbid1" ).progressbar({
        value: 40
    });

    $( "#state" ).selectmenu();

    $( "#progressbar" ).jsRapBar({
        position:.5,
    });


    $.ajax({
        type: "get",
        url: "hours.json",
        beforeSend: function() {
            $("#hour").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#hour").html("");
            $.getJSON("hours.json",function(data){
                $.each(data,function(){
                    $.each(this,function(key,value){
                        $("#hour").append(
                            "<h4>" + value.day +"</h4>"+
                            "<h4>" + value.time + "</h4>" + "<br>"

                        )
                    })
                })
            })
        }
    });


});

