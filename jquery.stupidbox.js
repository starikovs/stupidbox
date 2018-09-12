(function ($) {
  $.fn.stupidbox = function () {
    var b = $("body");
    var name = "stupidbox";
    var cls = "." + name;
    var t = 
      '<a href="$" id="' + name + '" style="' +
      'display:block;' +
      'position:fixed;' +
      'top:0;' +
      'right:0;' +
      'bottom:0;' +
      'left:0;' + 
      'background:url($) center center rgba(0,0,0,.8) no-repeat;' +
      'background-size:contain;' +
      'z-index:9999999">' +
      '<b style="position:fixed;top:20px;right:20px;z-index:99999999;color:#fff;font-size:50px;font-family:sans-serif">X</b>' + 
      '</a>';

    b.off(cls).on("click" + cls, cls, function (e) {
      var el = $(this);
      var href = el.attr("href");
      var src = el.attr("src");
      var url = href || src;

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

