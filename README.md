# stupidbox

This is a really simple and a bit stupid **image lightbox** jQuery plugin. It has no options and works out of the box. It just a javascript *jquery.stupidbox.js* file with no styleshets, images, etc. And just "X" letter is used as a closing icon.

And again, all you need is **jquery.stupidbox.js** (it's around 30 lines of code).

## Demo

[Demo on CodePen](http://codepen.io/starikovs/full/vNEvpW/)

## HTML

The idea of this markup is that &lt;a&gt; tag has a big image and &lt;img&gt; has a thumbnail.

    <a href="big-image.jpg">
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

