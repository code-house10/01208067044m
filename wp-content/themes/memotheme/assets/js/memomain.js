!(function () {
    "use strict";
    var e = document.querySelector(".memo-sidebar-open"),
        o = document.getElementsByTagName("BODY")[0],
        c = document.querySelectorAll(".memo-submenu-toggle"),
        n = document.querySelector(".memo-main-nav");
    document.addEventListener("scroll", function () {
        var e = document.body.scrollTop || document.documentElement.scrollTop,
            t = document.querySelector(".memo-header"),
            o = document.getElementById("memo-scroll-up");
        e > 600 ? o.classList.add("active") : o.classList.remove("active"), e > 100 ? t.classList.add("sticky") : t.classList.remove("sticky");
    }),

        e.addEventListener("click", function () {
            n.classList.toggle("active"),
            e.classList.toggle("active"),
            
            o.classList.toggle("memo-hideflow");

        }),

        c.forEach(function (e) {
            e.addEventListener("click", function () {
                e.nextElementSibling.classList.toggle("active"), e.classList.toggle("active");
            });
        });

        var acc = document.getElementsByClassName("memo-post-faq-box");
    if(acc){
        var qs;
        for (qs = 0; qs < acc.length; qs++) {
            acc[qs].addEventListener("click", function () {
                [].forEach.call(acc, function (el) {
                    el.classList.remove("active");
                });
                this.classList.toggle("active");
            });
        }
    }
    document.querySelector(".memo-search-open").addEventListener("click", function() {
        document.querySelector(".memo-search-container").classList.add('active');
        document.body.style.overflow = 'hidden';
        document.querySelector(".memo-search-field").focus();
    });
    
    const searchoverlay = document.querySelector(".memo-search-container");
    searchoverlay.addEventListener("click", function(event) {
        if (event.target === searchoverlay) {
            document.querySelector(".memo-search-container").classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });

    const closepanel = document.querySelector(".close-panel");
    if(closepanel){
closepanel.addEventListener("click", function(event) {
        document.querySelector(".order-services").classList.remove('active');
});
}


    let popupShown = false;


    function showPopup() {
        if (!popupShown) {
            document.querySelector(".order-services").classList.add('active');
            popupShown = true;
        }
       
    }

    

    window.addEventListener('scroll', function() {
        let scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;

        if (scrollPercentage >= 0.20) {
            showPopup();
        }
    });

})();
