(function ($) {
    $.fn.stupidbox = function () {
        var b = $("body"),
            name = "stupidbox",
            cls = "." + name,
            id = "#" + name,
            t =
                '<div id="' + name + '" style="' +
                    'position:fixed;' +
                    'top:0;' +
                    'right:0;' +
                    'bottom:0;' +
                    'left:0;' + 
                    'background:url($) center center rgba(0,0,0,.8) no-repeat;' +
                    'background-size:contain;' +
                '"></div>';

        b.off(cls);
        b.on("click" + cls, cls, function (e) {
            var el = $(this),
                href = el.attr("href"),
                src = el.attr("src"),
                url = href || src;

            $(id).remove();

            if (url) {
                $(t.replace("$", url)).insertAfter(b).on("click", function () {
                    $(this).remove();
                });
            }

            e.preventDefault();
        });

        return this.addClass(name);
    };
})(jQuery);

