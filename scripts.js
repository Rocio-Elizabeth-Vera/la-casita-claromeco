$(document).ready(function() {
    // Image carousel functionality
    let currentSlide = 0;
    const slides = $('.image-carousel img');
    const slideCount = slides.length;

    function showSlide(index) {
        slides.hide();
        slides.eq(index).fadeIn();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }

    // Initialize carousel
    showSlide(0);
    setInterval(nextSlide, 5000); // Auto-advance every 5 seconds

    // Availability form submission
    $('#availability-form').submit(function(e) {
        e.preventDefault();
        
        // Gather form data
        const name = $('input[name="name"]').val();
        const dateFrom = $('input[name="dateFrom"]').val();
        const dateTo = $('input[name="dateTo"]').val();
        const guests = $('input[name="guests"]').val();
        const comments = $('textarea[name="comments"]').val();

        // Construct WhatsApp message
        const message = `Hola, me interesa La Casita.\nNombre: ${name}\nDesde: ${dateFrom}\nHasta: ${dateTo}\nHuéspedes: ${guests}\nComentarios: ${comments}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp with the pre-filled message
        window.open(`https://wa.me/5491131741969?text=${encodedMessage}`, '_blank');
    });
});