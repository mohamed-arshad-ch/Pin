var _URL = window.URL || window.webkitURL;
var imaf;
$("#imagefile").change(function (e) {
    var file, img;


    if ((file = this.files[0])) {
        img = new Image();

        $('#grid-state')
            .find('option')
            .remove()
            .end()

            ;
        var reader = new FileReader();

        reader.onload = function (e) {

            $('.drop__tumbnail').attr('src', e.target.result);
        }

        reader.readAsDataURL(this.files[0]);


        var imaf = URL.createObjectURL(event.target.files[0]);
        $("#thumb-artimage1").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage2").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage3").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage4").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage5").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage6").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage7").fadeIn("fast").attr('src', imaf);
        $("#thumb-artimage8").fadeIn("fast").attr('src', imaf);
        $("#mainimg").fadeIn("fast").attr('src', imaf);

        $("#blackandwhite").fadeIn("fast").attr('src', imaf);
        $("#heu50").fadeIn("fast").attr('src', imaf);
        $("#satur5").fadeIn("fast").attr('src', imaf);
        $("#sepi70").fadeIn("fast").attr('src', imaf);
        $("#sepi100").fadeIn("fast").attr('src', imaf);






        img.onload = function () {


            var widtcm = (this.width * 2.54) / 300;
            var heightcm = (this.height * 2.54) / 300;


            var widthinch = (widtcm / 2.54).toFixed(0)
            var heightinch = (heightcm / 2.54).toFixed(0)
            var dis = this.height / 100;

            for (let index = 5; index <= dis; index++) {
                var adr = this.width / this.height;
                var cm = index * 2.54;
                var gh = cm * 300;
                var dh = gh / 2.54;
                var aw = adr * dh;

                var gft = aw * 2.54;
                var fhfh = gft / 300;

                var incy = fhfh / 2.54;

                var incycm1 = incy.toFixed(0) * 2.54;
                var indexcm = index * 2.54;


                if (incy <= 64) {
                    var html = '<option id="opt" value="' + Math.ceil(incy) + "x" + index + '">' + Math.ceil(incy) + " x " + index + "(" + Math.ceil(incycm1) + "cm" + "X" + Math.ceil(indexcm) + "cm" + ")" + '</option>';
                    $('#grid-state').append(html)
                }




            }

            if (widthinch >= 6 && heightinch >= 4) {
                $('#imagevalidresult').text("Valid Image : " + widthinch + '"' + " X " + heightinch + '"' + " (" + widtcm.toFixed(0) + "cm" + " X " + heightcm.toFixed(0) + "cm" + " )")
            } else if (widthinch <= 64 && widthinch >= 6) {
                if (heightinch >= 4) {
                    $('#imagevalidresult').text("Valid Image : " + widthinch + '"' + " X " + heightinch + '"' + " (" + widtcm.toFixed(0) + "cm" + " X " + heightcm.toFixed(0) + "cm" + " )")
                } else {
                    $('#imagevalidresult').text("InValid Image : " + widthinch + '"' + " X " + heightinch + '"')
                }
            } else {
                $('#imagevalidresult').text("InValid Image : " + widthinch + '"' + " X " + heightinch + '"')
            }

        };
        img.onerror = function () {
            alert("not a valid file: " + file.type);
        };
        img.src = _URL.createObjectURL(file);


    }

    imaf = document.getElementById('imagefile').value;




});

var currsym;
$("#grid-state").change(function () {
    var wid = $(this).find(':selected').val();


    var parts = wid.split('x');
    var widthp = parseInt(parts[0], 10);
    var heightp = parseInt(parts[1], 10);
    sqinch = heightp * widthp;
    phototot = sqinch * 1.319;
    var price = Math.ceil((heightp * widthp * phototot) + (sqinch * (8 + (2 * heightp) + (2 * widthp))) * 5);
    console.log(price);
    console.log(currsym);
    $('#customesize').text(currsym+price)

    mewi = (widthp * 2.54) * 2;
    mehei = (heightp * 2.54) * 2;

    $('#thumb-artimage1').width(widthp);
    $('#thumb-artimage2').width(widthp);
    $('#thumb-artimage3').width(widthp);
    $('#thumb-artimage4').width(widthp);

    $('#thumb-artimage5').width(mewi);
    $('#thumb-artimage6').width(mewi);
    $('#thumb-artimage7').width(mewi);
    $('#thumb-artimage8').width(mewi);




    $('#thumb-artimage1').height(heightp);
    $('#thumb-artimage2').height(heightp);
    $('#thumb-artimage3').height(heightp);
    $('#thumb-artimage4').height(heightp);

    $('#thumb-artimage5').height(mehei);
    $('#thumb-artimage6').height(mehei);
    $('#thumb-artimage7').height(mehei);
    $('#thumb-artimage8').height(mehei);






});
$('#imgew').click(() => {

    $('#newdi').hide()
    $('#ui').show()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()


});
$('#imgew3').click(() => {

    $('#newdi').hide()
    $('#ui3').show()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui').hide()


});
$('#imgew2').click(() => {

    $('#newdi').hide()
    $('#ui2').show()
    $('#ui1').hide()
    $('#ui').hide()
    $('#ui3').hide()


});
$('#imgew1').click(() => {

    $('#newdi').hide()
    $('#ui1').show()
    $('#ui2').hide()
    $('#ui').hide()
    $('#ui3').hide()


});



function initialize() {
    var input = document.getElementById('mylo');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        console.log(place.name);
        // document.getElementById('cityLat').value = place.geometry.location.lat();
        // document.getElementById('cityLng').value = place.geometry.location.lng();
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
var ips;
var co;
$(document).ready(() => {
    // $('#modal-center').show()

    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    var modal = UIkit.modal('#myModal', { 'bgClose': false });

    modal.toggle();

   







});

$('#fdddd').click(() => {

})
$('#fg').click(() => {
    $("#myModal").modal('show');
})

// $('#').on('click', function() {
//   modal.toggle();
// });


var cou1 = 0;
var cou2 = 0;
var cou3 = 0;
var cou4 = 0;
var cou5 = 0;
$('#blackandwhite').click(() => {
    cou1 = cou1 + 1;
    var jh = $("#blackandwhite").attr('src')
    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    $("#newdi").fadeIn("fast").attr('src', jh);
    $("#newdi").fadeIn("fast").attr('data-d', '1');
    console.log("count" + cou1);
    if (cou1 == 1) {
        $("#newdi").fadeIn("fast").attr('data-mj', '100');
        $("#newdi").css("filter", "grayscale(100%)");
        var a = document.getElementById('newdi');
        var tg = a.dataset.mj
        console.log(tg);
        $('#ranger').val(tg)

        $('#thumb-artimage1').css("filter", "grayscale(100%)");
        $('#thumb-artimage2').css("filter", "grayscale(100%)");
        $('#thumb-artimage3').css("filter", "grayscale(100%)");
        $('#thumb-artimage4').css("filter", "grayscale(100%)");

        $('#thumb-artimage5').css("filter", "grayscale(100%)");
        $('#thumb-artimage6').css("filter", "grayscale(100%)");
        $('#thumb-artimage7').css("filter", "grayscale(100%)");
        $('#thumb-artimage8').css("filter", "grayscale(100%)");
    } else {

        var a = document.getElementById('newdi');
        var tg = a.dataset.mj
        console.log(tg);
        $('#ranger').val(tg)
        $("#newdi").css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage1').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage2').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage3').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage4').css("filter", "grayscale(" + tg + "%)");

        $('#thumb-artimage5').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage6').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage7').css("filter", "grayscale(" + tg + "%)");
        $('#thumb-artimage8').css("filter", "grayscale(" + tg + "%)");
    }



})

$('#heu50').click(() => {
    cou2 = cou2 + 1;
    var jh = $("#heu50").attr('src')
    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    $("#newdi").fadeIn("fast").attr('src', jh);
    $("#newdi").fadeIn("fast").attr('data-d', '2');
    if (cou2 == 1) {
        $("#newdi").fadeIn("fast").attr('data-mk', '50');

        $("#newdi").css("filter", "hue-rotate(50deg)");
        var a = document.getElementById('newdi');
        var tg = a.dataset.mk
        console.log(tg);
        $('#ranger').val(tg)

        $('#thumb-artimage1').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage2').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage3').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage4').css("filter", "hue-rotate(50deg)");

        $('#thumb-artimage5').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage6').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage7').css("filter", "hue-rotate(50deg)");
        $('#thumb-artimage8').css("filter", "hue-rotate(50deg)");
    } else {

        var a = document.getElementById('newdi');
        var tg = a.dataset.mk
        console.log(tg);
        $('#ranger').val(tg)

        $("#newdi").css("filter", "hue-rotate(" + tg + "deg)");

        $('#thumb-artimage1').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage2').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage3').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage4').css("filter", "hue-rotate(" + tg + "deg)");

        $('#thumb-artimage5').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage6').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage7').css("filter", "hue-rotate(" + tg + "deg)");
        $('#thumb-artimage8').css("filter", "hue-rotate(" + tg + "deg)");
    }


})
$('#satur5').click(() => {
    cou3 = cou3 + 1;
    var jh = $("#satur5").attr('src')
    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    $("#newdi").fadeIn("fast").attr('src', jh);
    $("#newdi").fadeIn("fast").attr('data-d', '3');
    if (cou3 == 1) {
        $("#newdi").fadeIn("fast").attr('data-ml', '30');

        var a = document.getElementById('newdi');
        var tg = a.dataset.ml
        console.log(tg);
        $('#ranger').val(tg)

        $("#newdi").css("filter", "saturate(3)");

        $('#thumb-artimage1').css("filter", "saturate(3)");
        $('#thumb-artimage2').css("filter", "saturate(3)");
        $('#thumb-artimage3').css("filter", "saturate(3)");
        $('#thumb-artimage4').css("filter", "saturate(3)");

        $('#thumb-artimage5').css("filter", "saturate(3)");
        $('#thumb-artimage6').css("filter", "saturate(3)");
        $('#thumb-artimage7').css("filter", "saturate(3)");
        $('#thumb-artimage8').css("filter", "saturate(3)");
    } else {
        var a = document.getElementById('newdi');
        var tg = a.dataset.ml
        console.log(tg);
        $('#ranger').val(tg)
        var hy = tg / 10;
        $("#newdi").css("filter", "saturate(" + hy + ")");

        $('#thumb-artimage1').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage2').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage3').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage4').css("filter", "saturate(" + hy + ")");

        $('#thumb-artimage5').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage6').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage7').css("filter", "saturate(" + hy + ")");
        $('#thumb-artimage8').css("filter", "saturate(" + hy + ")");

    }



})
$('#sepi70').click(() => {
    cou4 = cou4 + 1;
    var jh = $("#sepi70").attr('src')
    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    $("#newdi").fadeIn("fast").attr('src', jh);
    $("#newdi").fadeIn("fast").attr('data-d', '4');
    if (cou4 == 1) {
        $("#newdi").fadeIn("fast").attr('data-mn', '50');

        var a = document.getElementById('newdi');
        var tg = a.dataset.mn
        console.log(tg);
        $('#ranger').val(tg)
        $("#newdi").css("filter", "sepia(45%)");

        $('#thumb-artimage1').css("filter", "sepia(45%)");
        $('#thumb-artimage2').css("filter", "sepia(45%)");
        $('#thumb-artimage3').css("filter", "sepia(45%)");
        $('#thumb-artimage4').css("filter", "sepia(45%)");

        $('#thumb-artimage5').css("filter", "sepia(45%)");
        $('#thumb-artimage6').css("filter", "sepia(45%)");
        $('#thumb-artimage7').css("filter", "sepia(45%)");
        $('#thumb-artimage8').css("filter", "sepia(45%)");
    } else {

        var a = document.getElementById('newdi');
        var tg = a.dataset.mn
        console.log(tg);
        $('#ranger').val(tg)
        $("#newdi").css("filter", "sepia(" + tg + "%)");

        $('#thumb-artimage1').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage2').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage3').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage4').css("filter", "sepia(" + tg + "%)");

        $('#thumb-artimage5').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage6').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage7').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage8').css("filter", "sepia(" + tg + "%)");

    }



})

$('#sepi100').click(() => {
    cou5 = cou5 + 1;
    var jh = $("#sepi100").attr('src')
    $('#ui').hide()
    $('#ui1').hide()
    $('#ui2').hide()
    $('#ui3').hide()
    $("#newdi").fadeIn("fast").attr('src', jh);
    $("#newdi").fadeIn("fast").attr('data-d', '5');


    if (cou5 == 1) {
        $("#newdi").fadeIn("fast").attr('data-mo', '100');

        $("#newdi").css("filter", "sepia(100%)");
        var a = document.getElementById('newdi');
        var tg = a.dataset.mo
        console.log(tg);
        $('#ranger').val(tg)

        $('#thumb-artimage1').css("filter", "sepia(100%)");
        $('#thumb-artimage2').css("filter", "sepia(100%)");
        $('#thumb-artimage3').css("filter", "sepia(100%)");
        $('#thumb-artimage4').css("filter", "sepia(100%)");

        $('#thumb-artimage5').css("filter", "sepia(100%)");
        $('#thumb-artimage6').css("filter", "sepia(100%)");
        $('#thumb-artimage7').css("filter", "sepia(100%)");
        $('#thumb-artimage8').css("filter", "sepia(100%)");
    } else {

        var a = document.getElementById('newdi');
        var tg = a.dataset.mo
        console.log(tg);
        $('#ranger').val(tg)

        $("#newdi").css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage1').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage2').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage3').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage4').css("filter", "sepia(" + tg + "%)");

        $('#thumb-artimage5').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage6').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage7').css("filter", "sepia(" + tg + "%)");
        $('#thumb-artimage8').css("filter", "sepia(" + tg + "%)");
    }


})

$('#ranger').change(() => {
    var va = $('#ranger').val();
    var df = document.getElementById('newdi');
    console.log(df.dataset.d);
    var stynum = df.dataset.d;


    if (stynum == 1) {
        $("#newdi").css("filter", "grayscale(" + va + "%)");

        $('#thumb-artimage1').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage2').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage3').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage4').css("filter", "grayscale(" + va + "%)");

        $('#thumb-artimage5').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage6').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage7').css("filter", "grayscale(" + va + "%)");
        $('#thumb-artimage8').css("filter", "grayscale(" + va + "%)");


        df.dataset.mj = va;
    } else if (stynum == 2) {
        $("#newdi").css("filter", "hue-rotate(" + va + "deg)");

        $('#thumb-artimage1').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage2').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage3').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage4').css("filter", "hue-rotate(" + va + "deg)");

        $('#thumb-artimage5').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage6').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage7').css("filter", "hue-rotate(" + va + "deg)");
        $('#thumb-artimage8').css("filter", "hue-rotate(" + va + "deg)");
        df.dataset.mk = va;
    } else if (stynum == 3) {
        gh = va / 10;
        $("#newdi").css("filter", "saturate(" + gh + ")");

        $('#thumb-artimage1').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage2').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage3').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage4').css("filter", "saturate(" + gh + ")");

        $('#thumb-artimage5').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage6').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage7').css("filter", "saturate(" + gh + ")");
        $('#thumb-artimage8').css("filter", "saturate(" + gh + ")");
        df.dataset.ml = va;
    } else if (stynum == 4) {
        $("#newdi").css("filter", "sepia(" + va + "%)");

        $('#thumb-artimage1').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage2').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage3').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage4').css("filter", "sepia(" + va + "%)");

        $('#thumb-artimage5').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage6').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage7').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage8').css("filter", "sepia(" + va + "%)");

        df.dataset.mn = va;
    } else if (stynum == 5) {
        $("#newdi").css("filter", "sepia(" + va + "%)");

        $('#thumb-artimage1').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage2').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage3').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage4').css("filter", "sepia(" + va + "%)");

        $('#thumb-artimage5').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage6').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage7').css("filter", "sepia(" + va + "%)");
        $('#thumb-artimage8').css("filter", "sepia(" + va + "%)");

        df.dataset.mo = va;
    }



})


const framebtn = document.querySelectorAll('#frameType');
framebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const datad = btn.value;
        console.log(datad);

        if (datad == 'black') {



            $('#thumb-artimage1').css("border", "1px solid black");
            $('#thumb-artimage2').css("border", "1px solid black");
            $('#thumb-artimage3').css("border", "1px solid black");
            $('#thumb-artimage4').css("border", "1px solid black");

            $('#thumb-artimage5').css("border", "3px solid black");
            $('#thumb-artimage6').css("border", "3px solid black");
            $('#thumb-artimage7').css("border", "3px solid black");
            $('#thumb-artimage8').css("border", "3px solid black");

        } else {
            $('#thumb-artimage1').css("border", "1px solid #847115");
            $('#thumb-artimage2').css("border", "1px solid #847115");
            $('#thumb-artimage3').css("border", "1px solid #847115");
            $('#thumb-artimage4').css("border", "1px solid #847115");

            $('#thumb-artimage5').css("border", "3px solid #847115");
            $('#thumb-artimage6').css("border", "3px solid #847115");
            $('#thumb-artimage7').css("border", "3px solid #847115");
            $('#thumb-artimage8').css("border", "3px solid #847115");
        }
    })

});

var currrensies;


$('#detectloc').click(() => {

    const onPosition = (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;



        axios.get('https://api.opencagedata.com/geocode/v1/json?q=' + latitude + '+' + longitude + '&key=4906212d010e4b63938e5334e3205589').then(resp => {
            console.log(resp.data);
            console.log(resp.data.results[0].formatted);
            var country = resp.data.results[0].components.country;
            console.log(country);
            $('#mylo').val(resp.data.results[0].formatted)






        }).then(sym => {

        })



    }
    const locationError = (errorposition) => {
        console.log(errorposition);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPosition, locationError)
    }

})



