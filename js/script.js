AOS.init();

$(document).ready(function() {
    
    //BOTON FOOTER
    $('#toggleButton').click(function() {
        $('#additionalText').slideToggle().css('display', 'inline-block');
    });
    
    // CONTACT0
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
        $('#image-' + artist).toggle(); 
    });
});
