var cont = 0;
var vista = "def";
var respuesta1 = false;
var respuesta2 = false;
var respuesta3 = false;
function cargarTestimonios() {
        $.ajax( "./json/testimonios.json" )
        .done(function(info) {
            respuesta1 = true;
            maquetarTestimonios(info);
            cambiaTesimonios(info);
            manejaVistaTestimonios(info);
        })
        .fail(function() {
            setTimeout(cargarTestimonios, 5000);
        })
    }

        
function maquetarTestimonios(info){
    vista = "def";
    var n=0;
    var x=0;
        while(cont<3){
            var random = Math.floor(Math.random() * (11 - 1)) + 1;
            if(random != n && random != x){
                for (var i = 0; i<info.length; i++){
                    if(info[i].id == random){
                        for (var j=0; j<info[i].estrellas; j++){
                            var estrella = $('<img>').attr("src", "./img/star.png")
                            .css({"width": "20px",
                                    "margin-top": "18px"});
                            $(".reseñas>div#"+cont).append(estrella);
                        }
                        var title = $('<h3>').html(info[i].asunto).css("textAlign", "center");
                        var text = $('<p>').html(info[i].mensaje);
                        var autor = $('<p>').html(info[i].nombre).css("fontStyle", "italic");
                        var fecha = $('<p>').html(info[i].fecha).css("textAlign", "center");
                        $(".reseñas>div#"+cont).append(title);
                        $(".reseñas>div#"+cont).append(text);
                        $(".reseñas>div#"+cont).append(autor);
                        $(".reseñas>div#"+cont).append(fecha);
                        if(cont == 0){
                            n = random;
                        }else if(cont == 1)
                            x = random;
                        
                        

                        cont++;
                        
                    }
                }
            }
            
        }
        $( ".reseñas>div:hidden" ).slideToggle( "slow" );
        $(".reseñas>div").css("display", "block");
    }

    function cambiaTesimonios(info){
        window.setInterval(()=>
        {
                cont=0;
                $(".reseñas>div").fadeOut( "slow" );
                $(".reseñas>div").css("display", "none");
                $(".reseñas>div>*").remove();
                if (vista == "def"){
                    maquetarTestimonios(info);
                }else if (vista == "tabla"){
                    vistaTabla(info);
                }
                

            
        }, 10000);
    }

    function vistaTabla(info){
        vista = "tabla";
        var n=0;
        var x=0;
        while(cont<3){
            var random = Math.floor(Math.random() * (11 - 1)) + 1;
            if(random != n && random != x){
                var tabla = $('<table>');
                var tr1 = $('<tr>'); 
                var td1 = $('<td>').attr("colspan", 2);
                for (var i = 0; i<info.length; i++){
                    if(info[i].id == random){
                        for (var j=0; j<info[i].estrellas; j++){
                            var estrella = $('<img>').attr("src", "./img/star.png")
                            .css({"width": "20px",
                                    "margin-top": "18px"});
                            td1.append(estrella);
                        }
                        tr1.append(td1);
                        tabla.append(tr1);
                        var tr2 = $('<tr>'); 
                        var title = $('<th>').attr("colspan", 2).html(info[i].asunto).css("textAlign", "center");
                        tr2.append(title);
                        tabla.append(tr2);
                        var tr3 = $('<tr>');
                        var text = $('<td>').attr("colspan", 2).html(info[i].mensaje);
                        tr3.append(text);
                        tabla.append(tr3);
                        var tr4 = $('<tr>');
                        var autor = $('<td>').html(info[i].nombre).css("fontStyle", "italic");
                        var fecha = $('<td>').html(info[i].fecha).css("textAlign", "center");
                        tr4.append(autor);
                        tr4.append(fecha);
                        tabla.append(tr4);
                        $(".reseñas>div#"+cont).append(tabla);
                        if(cont == 0){
                            n = random;
                        }else if(cont == 1)
                            x = random;

                        cont++;
                        
                    }
                }
            }
            
        }
        $( ".reseñas>div:hidden" ).slideToggle( "slow" );
        $(".reseñas>div").css("display", "block");

    }


    function manejaVistaTestimonios(info){
        $("#cambiaVista").click(function (e) { 
            e.preventDefault();
                cont=0;
                $(".reseñas>div").fadeOut( "slow" );
                $(".reseñas>div").css("display", "none");
                $(".reseñas>div>*").remove();
                if (vista == "tabla"){
                    maquetarTestimonios(info);
                }else if (vista == "def"){
                    vistaTabla(info);
                }
            
            
        });
    }

    function cargarProductos() {
        $.ajax( "./json/productos.json")
        .done(function(info) {
            //console.log(info);
            respuesta2 = true;
            maquetarProductos(info);
            
        })
        .fail(function() {
            setTimeout(cargarProductos, 5000);
        })
    }

    function maquetarProductos(info){
        for (var i = 0; i<info.length; i++){
                var title = $('<h3>').html(info[i].titulo).attr("class", "location-title");
                var text = $('<p>').html(info[i].texto).attr("class", "location-title");
                var img = $('<img>').attr("src", info[i].img);
                var boton = $('<a>').attr("href", info[i].link).html("Comprar ahora").css({
                    "border-radius": "5px",
                    "padding": "10px 7px",
                    "text-decoration": "none",
                    "color": "white",
                    "background-color": "#eb5182",
                    "margin": "5px",
                });
                $(".productos>div#"+(i+3)).append(img);
                $(".productos>div#"+(i+3)).append(title);
                $(".productos>div#"+(i+3)).append(text);
                $(".productos>div#"+(i+3)).append(boton);
                   
        }

        $( ".productos>div:hidden" ).fadeIn( "slow" );
        $(".productos>div").css("display", "block");
                    
                
    }

    function cargarServicios() {
        $.ajax( "./json/servicios.json")
        .done(function(info) {
            //console.log(info);
            respuesta3 = true;
            maquetarServicios(info);
            
        })
        .fail(function() {
            setTimeout(cargarServicios, 5000);
        })
    }

    function maquetarServicios(info){
        for (var i = 0; i<info.length; i++){
                var title = $('<h3>').html(info[i].titulo).attr("class", "location-title");
                var text = $('<p>').html(info[i].texto).attr("class", "location-title");
                var img = $('<img>').attr("src", info[i].img);
                $(".servicios>div#"+(i+8)).append(img);
                $(".servicios>div#"+(i+8)).append(title);
                $(".servicios>div#"+(i+8)).append(text);
                
                
                
                
        }       
        $( ".servicios>div:hidden" ).fadeIn( "slow" );
        $(".servicios>div").css("display", "block");    
                
    }

    function validarFormulario(){
        var validator= $("#basic-form").validate({
            rules: {
                nombre: "required",
                apellidos:"required",
                  email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                nombre: "Introduzca su nombre correctamente",
                apellidos: "Introduzca su primer apellido correctamente",
                email: "Introduzca un email válido"
            }
        });
        $("#basic-form>#nombre").keydown(function(){
            if($("#basic-form>#nombre").val().length>1){
                $("#basic-form>#apellidos").attr("readOnly", false);
                $("#basic-form>#apellidos").keydown(function(){
                    if($("#basic-form>#apellidos").val().length>1){
                        $("#basic-form>#email").prop("readOnly", false);
                        $("#basic-form>#email").keydown(function(){
                            if(validarCampoEmail($("#basic-form>#email").val())){
                                $("#basic-form>#telefono").prop("readOnly", false);
                            }
                        });
                }
            });
        }
    });
}




function subeScroll() {
    $(".btn-flotante").click(function() {
        $("html").animate(
            {scrollTop: 0}, 4000);
    });
    
}


function validarCampoEmail(campoEmail){
    var email = true;
    if(campoEmail.split("@").length != 2){
        email = false;
    }
    if(email){
   
        if(campoEmail.split("@")[0].split(" ").length > 1){
            email = false;
        }
    }

    if(email){
        if(campoEmail.split("@")[1].split(".").length != 2){
            email = false;
        }
    }

    if(email){
        if(campoEmail.split("@")[1].split(".")[0].split(" ").length > 1){
            email = false;
        }
        if(campoEmail.split("@")[1].split(".")[1].split(" ").length > 1){
            email = false;
        }
    }
    return email;
    
    
}
    

function success(position) {
	let coord = position.coords;

	$.ajax(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDjvHdvdurSFFYNLooOUGRmanwxK7qORUw&address=${coord.latitude},${coord.longitude}`)
		.done((response) => {
			console.log(response.results[0].address_components[2].long_name);
		})
		.fail((error) => {
			console.warn(error);
		});
}


function error(error) {
	console.warn(`ERROR(${error.code}): ${error.message}`);
}



window.onload = ()=>{
    cargarTestimonios();
    cargarProductos();
    cargarServicios();
    subeScroll();
    validarFormulario();
    //boton para el formulario
    $("#news").click(function(){
		$("html").animate({scrollTop: 2700},3000)
	});
    navigator.geolocation.getCurrentPosition(success, error);
}