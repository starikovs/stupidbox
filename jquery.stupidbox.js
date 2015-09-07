(function ($) {
    $.fn.stupidbox = function () {
        var b = $("body"),
            name = "stupidbox",
            cls = "." + name,
            t = '<a href="$" id="' + name + '" style="' +
                    'display:block;' +
                    'position:fixed;' +
                    'top:0;' +
                    'right:0;' +
                    'bottom:0;' +
                    'left:0;' + 
                    'background:url($) center center rgba(0,0,0,.8) no-repeat;' +
                    'background-size:contain;' +
                    'z-index:9999999;' +
                '"></a>';

        b.off(cls).on("click" + cls, cls, function (e) {
            var el = $(this),
                href = el.attr("href"),
                src = el.attr("src"),
                url = href || src;

            if (url) {
                $(t.replace(/\$/g, url)).insertAfter(b).on("click", function (e) {
                    e.preventDefault();
                    $(this).remove();
                });
            }

            e.preventDefault();
        });

        return this.addClass(name);
    };
})(jQuery);

