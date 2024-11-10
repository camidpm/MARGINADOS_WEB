AOS.init();

$(document).ready(function() {
    
    //BOTON FOOTER
    $('#toggleButton').click(function() {
        $('#additionalText').slideToggle().css('display', 'inline-block');
    });
    
    // CONTACT0
    
     // Validación en tiempo real para el campo de Nombre
     $("#nombre").on("input", function() {
        if ($(this).val().length < 3) {
            $(this).addClass("is-invalid").removeClass("is-valid");
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
        }
    });

    // Validación en tiempo real para el campo de Email
    $("#email").on("input", function() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test($(this).val())) {
            $(this).addClass("is-invalid").removeClass("is-valid");
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
        }
    });

    // Validación en tiempo real para el campo de Mensaje
    $("#mensaje").on("input", function() {
        if ($(this).val().trim() === "") {
            $(this).addClass("is-invalid").removeClass("is-valid");
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
        }
    });


    $('form').on('submit', function(event) {
        event.preventDefault();
        var email = $('input[type="email"]').val();
        if (email) {
            alert('¡Gracias por suscribirte, ' + email + '!');
            $('input[type="email"]').val('');
        } else {
            alert('Por favor, introduce un correo válido.');
        }
    });


    // BOTON
    $('.btn').hover(
        function() {
            $(this).css('transform', 'scale(1.05)').css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)').css('box-shadow', 'none');
        }
    );

    $('.artist-list li').click(function() {
    var artist = $(this).data('artist');
    
    $('.artist-image').hide();
    
    $('#image-' + artist).show();
});
});
