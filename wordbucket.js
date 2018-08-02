$(document).ready(function(){
    $('#txtID').hide()

});

// window.onload = function() {
//   $(".giru").hide();
// };

// $(document).ready(function(){
//     $("#btnResult").click(function(){
//         $(".giru").show();
//     });
//
// });
// $(document).ready(function()
// {
//     $("#txtInput").click(function ()
//     {
//         $(".giru").hide();
//     })
// });

$(document).ready(function(){
    $("#btnResult").click(function(){
    if ($(".giru").hide()){
        $(".giru").show().fadeIn("slow");
    }
    });
});
//
// $(document).ready(function() {
//   $(".sec1 input").focus(function() {
//       $('.giru').hide('slow');
//       //return false;
//     });
//
//
//  $('.sec1 input').blur(function(){
//     if( !$(this).val() ) {
//           $('.giru').show('slow');
//     }
// });

$("#txtInput").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btnResult").click();
    }
});

$('#txtInput').click(function(){
        $('.giru').hide();
});



$('#btnResult').on('click',function() {
     $('#txtID').show()
    function dictionary(f) {
        var giru = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "data.json",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();

        if (f in giru) {
            return giru[f]
        }
        else {
            window.alert("Value Does not Exist!!")
        }
    }
    function getInput() {
        var txtinput = $("#txtInput").val();
        txtinput=txtinput.toLowerCase()
        var m = dictionary(txtinput)

        $('.giru').text(m).animate({
            left: ('100px', "slow"),
            fontSize: ('3em', "slow")
        });

    }
    var m = 'y'
    getInput()
    $('#btnReset').on('click',function () {
        //alert("i am clicked!!")
             var x= $("#txtInput").val("");
              $('.giru').text('');
             x.clear()
    });

    // while (m === 'y') {
    //
    //     var confirm = prompt("Do you want to search more:y/n");
    //     confirm = confirm.toLowerCase()
    //     if (confirm === 'y' || confirm === 'yes') {
    //        var x= $("#txtInput").val("");
    //        x.clear();
    //         m = 'y'
    //
    //     }
    //     else if (confirm === 'n' || confirm === `no`) {
    //         m = 'n'
    //         alert("Thanks for using the dictionary")
    //     }
    //     else {
    //         alert("wrong input")
    //         m='y'
    //     }
    // }
});

