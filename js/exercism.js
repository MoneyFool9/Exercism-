window.addEventListener('load', function () {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("scrollToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    document.getElementById("scrollToTop").addEventListener("click", function () {
        scrollToTop();
    });

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
})