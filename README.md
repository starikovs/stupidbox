# stupidbox

This is a really simple and a bit stupid **image lightbox** jQuery plugin. It has no options and works out of the box. It just a javascript *jquery.stupidbox.js* file with no styleshets, images, etc.

## HTML

The idea of this markup is that &lt;a&gt; tag has a big image and &lt;img&gt; has a thumbnail.

    <a href="big-image-url.jpg">
        <img src="thumbnail-image.jpg">
    </a>

Or you can use just &lt;img&gt; tag. In this case, you will get the same image in the lightbox.

    <img src="image.jpg">

## Javascript

    jQuery(function ($) {
        $("a").stupidbox();
    });

Or:

    jQuery(function ($) {
        $("img").stupidbox();
    });

## BTW

We stretch image in the lightbox to full screen keeping aspect ratio, so it's recommended to use high quality images for "big image".

