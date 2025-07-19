// Scroll animation for section titles
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.our-work-section, .our-team-section, .together-section');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            } else {
                // Remove the visible class when section is out of viewport
                section.classList.remove('visible');
            }
        });
    }
    
    // Add event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);
    
    // Initial check for elements already in viewport
    handleScrollAnimations();
});

// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    if (next && prev) {
        next.addEventListener('click', function(){
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').appendChild(items[0])
        })

        prev.addEventListener('click', function(){
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
        })
    }
});
