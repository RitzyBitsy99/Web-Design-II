// Ensure jQuery is loaded
$(document).ready(function() {
    // Smooth Scroll for Navigation Links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Basic Form Validation
    $('form').on('submit', function(event) {
        var isValid = true;

        $(this).find('input, textarea').each(function() {
            if ($(this).val() === "") {
                $(this).css('border', '1px solid red');
                isValid = false;
            } else {
                $(this).css('border', '1px solid #ddd');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
});
