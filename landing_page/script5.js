


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

(function () {

    const root =
        document.documentElement;

    const toggle =
        document.getElementById("themeToggle");


    let storedTheme = null;


    try {

        storedTheme =
            localStorage.getItem(
                "erp-hayok-theme"
            );

    } catch (error) {

        storedTheme = null;

    }


    if (
        storedTheme === "light" ||
        storedTheme === "dark"
    ) {

        root.setAttribute(
            "data-theme",
            storedTheme
        );

    }


    function isDarkMode() {

        const theme =
            root.getAttribute(
                "data-theme"
            );


        if (theme === "dark") {
            return true;
        }


        if (theme === "light") {
            return false;
        }


        return (
            window.matchMedia &&
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
        );

    }


    if (toggle) {

        toggle.addEventListener(
            "click",
            function () {

                const nextTheme =
                    isDarkMode()
                        ? "light"
                        : "dark";


                root.setAttribute(
                    "data-theme",
                    nextTheme
                );


                try {

                    localStorage.setItem(
                        "erp-hayok-theme",
                        nextTheme
                    );

                } catch (error) {

                    // Ignore storage errors

                }

            }
        );

    }

})();



/* =========================================================
   FAQ ACCORDION
========================================================= */

(function () {

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item) {

            const button =
                item.querySelector(
                    ".faq-question"
                );


            const answer =
                item.querySelector(
                    ".faq-answer"
                );


            button.addEventListener(
                "click",
                function () {

                    const isOpen =
                        item.classList.contains(
                            "active"
                        );


                    faqItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "active"
                            );


                            const otherAnswer =
                                otherItem.querySelector(
                                    ".faq-answer"
                                );


                            otherAnswer.style.maxHeight =
                                null;

                        }
                    );


                    if (!isOpen) {

                        item.classList.add(
                            "active"
                        );


                        answer.style.maxHeight =
                            answer.scrollHeight + "px";

                    }

                }
            );

        }
    );

})();



/* =========================================================
   WORK STORY CAROUSEL
========================================================= */

(function () {

    const carousel =
        document.querySelector(
            ".story-carousel"
        );


    if (!carousel) {
        return;
    }


    const slides =
        Array.from(
            carousel.querySelectorAll(
                ".story-slide"
            )
        );

    const dots =
        Array.from(
            carousel.querySelectorAll(
                ".story-dot"
            )
        );

    const previousButton =
        carousel.querySelector(
            ".story-previous"
        );

    const nextButton =
        carousel.querySelector(
            ".story-next"
        );

    let activeIndex = 0;


    function showSlide(nextIndex) {

        activeIndex =
            (nextIndex + slides.length) %
            slides.length;


        slides.forEach(
            function (slide, index) {

                const isActive =
                    index === activeIndex;


                slide.hidden = !isActive;


            }
        );


        dots.forEach(
            function (dot, index) {

                const isActive =
                    index === activeIndex;


                dot.classList.toggle(
                    "is-active",
                    isActive
                );

                dot.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            }
        );

    }


    previousButton.addEventListener(
        "click",
        function () {
            showSlide(activeIndex - 1);
        }
    );


    nextButton.addEventListener(
        "click",
        function () {
            showSlide(activeIndex + 1);
        }
    );


    dots.forEach(
        function (dot, index) {

            dot.addEventListener(
                "click",
                function () {
                    showSlide(index);
                }
            );

        }
    );

})();



/* =========================================================
   CARD HOVER EFFECT
========================================================= */

(function () {

    const cards =
        document.querySelectorAll(
            ".feature, " +
            ".info-card, " +
            ".stat-card, " +
            ".panel, " +
            ".bar-section, " +
            ".organisation-bullet, " +
            ".organisation-card, " +
            ".cta-band"
        );


    cards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.style.zIndex = "20";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.zIndex = "";

                }
            );

        }
    );

})();