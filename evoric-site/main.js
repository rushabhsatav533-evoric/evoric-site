// Simple slider for Success Stories
let currentSlide = 0;
function showSlide(n){
    const slides = document.querySelectorAll('.slide');
    const navs = document.querySelectorAll('.slider-nav span');
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
        navs[i].classList.remove('active');
    }
    if(slides[n]) {
        slides[n].classList.add('active');
        navs[n].classList.add('active');
        currentSlide=n;
    }
}
if(document.querySelectorAll('.slide').length) {
    setInterval(function(){
        const slides = document.querySelectorAll('.slide');
        if(slides.length > 0) {
            showSlide((currentSlide+1)%slides.length);
        }
    },4000);
}

function submitForm(e){
    e.preventDefault();
    document.getElementById("form-msg").textContent="Thanks for reaching out! We'll reply to you soon.";
}

// FAQ Accordion
if(document.querySelectorAll('.faq-q').length) {
    document.querySelectorAll('.faq-q').forEach(function(q){
        q.addEventListener('click', function(e){
            var parent = q.parentNode;
            document.querySelectorAll('.faq-item').forEach(function(item){
                if(item !== parent) item.classList.remove('active');
            });
            parent.classList.toggle('active');
        });
    });
}

// Optionally add your counter animation, impact counters, etc here.
