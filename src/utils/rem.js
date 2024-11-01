document.addEventListener("touchstart", function() {},false);

(function(d, w) {
    const doc = d.documentElement;
    function rem() {
        const width = doc.getBoundingClientRect().width;//Math.min(doc.getBoundingClientRect().width, 1024);
        doc.style.fontSize = width / 7.5 + "px";
    }
    rem();
    w.addEventListener("resize", rem);
})(document, window);
