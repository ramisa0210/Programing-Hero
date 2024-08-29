document.querySelector('.order-now').addEventListener('click', function () {
    alert('Order functionality coming soon!');
});
document.querySelector('.order-process').addEventListener('click', function() {
        alert('Order Process button clicked!');
    });

document.querySelector('.delivery-button').addEventListener('click', function() {
        alert('Thank you for choosing us!');
    });



    document.addEventListener("DOMContentLoaded", () => {
        const seeMoreBtn = document.getElementById('see-more-btn');
        const seeLessBtn = document.querySelector('.see-less-btn');
        const additionalItems = document.querySelector('.additional-items');
    
        // Function to show additional items
        const showMoreItems = () => {
            additionalItems.style.display = "grid"; // Show the hidden items as a grid
            seeMoreBtn.style.display = "none"; // Hide the "See More" button
            seeLessBtn.style.display = "block"; // Show the "See Less" button
        };
    
        // Function to hide additional items
        const hideMoreItems = () => {
            additionalItems.style.display = "none"; // Hide the hidden items
            seeMoreBtn.style.display = "inline-block"; // Show the "See More" button
            seeLessBtn.style.display = "none"; // Hide the "See Less" button
        };
    
        // Event listener for "See More" button
        seeMoreBtn.addEventListener("click", showMoreItems);
    
        // Event listener for "See Less" button
        seeLessBtn.addEventListener("click", hideMoreItems);
    
        // Initial state setup
        hideMoreItems(); // Hide additional items and see less button by default
    });
    

    

    document.addEventListener('DOMContentLoaded', function() {
        const orderButtons = document.querySelectorAll('.order-btn'); // Select all order buttons
    
        orderButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Retrieve product details from data attributes
                const productName = this.getAttribute('data-name');
                const productPrice = this.getAttribute('data-price');
                const productImg = this.getAttribute('data-img');
    
                // Create a product object
                const product = {
                    name: productName,
                    price: productPrice,
                    img: productImg
                };
    
                // Retrieve existing cart from local storage or initialize a new one
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
                // Add the product to the cart
                cart.push(product);
    
                // Save the updated cart back to local storage
                localStorage.setItem('cart', JSON.stringify(cart));
    
                // Display a success message
                alert('Successfully added to cart!');
            });
        });
    });
    











document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column'; // Stack items vertically in mobile view
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', function () {
      navMenu.classList.toggle('show-menu');
    });
  });
  
  
  
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    


// JavaScript for the "See More" and "See Less" functionality


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

})(jQuery);









document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email input value from the form
    const email = document.querySelector('#newsletter-form input[type="email"]').value;

    // Alert with the subscribed email (for demonstration purposes)
    alert(`Subscribed with: ${email}`);
    
    // Save the email to local storage
    localStorage.setItem('subscriberEmail', email);

    // Display the success message by removing the 'hidden' class
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');

    // Optionally, clear the input field after submission
    document.querySelector('#newsletter-form input[type="email"]').value = '';
});



