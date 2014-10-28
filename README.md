# custom-background.js

> Easily add background themes option to your website in a few minutes.

## Intro

A lightweight jQuery plugin  to allow users change the website’s default background and saves the background selected to local storage. This plugin can easily be added to any website or web app without any compromise on website's performance.

#### Features

* 4 inbuilt themes with 40 sample images
* Easy background selector window with background settings
* User's background data/settings are saved in local storage
* Appcache manifest file included for stronger file caching
* Ultra Lightweight - only 2 js files that add less than 20 KBs
* Background images and thumbnails are called on-demand using AJAX
* Additional required CSS/JS files are called on-demand only when required
* No need of server side languages or SQL, purely built using javascript/jQuery

#### Background options availiable

* Choose background image from provided backgrounds
* Random background image on every page load
* Upload custom image and use it as background
* Live changing background images
* Choose background color from provided color scheme
* Random background color on every page load
* Choose background color using color picker
* Live changing background colors


## Live Demo

Try out the live demo [here](http://cybrsys.github.io/custom-background.js/custom-background/example.html).


## Documentation

###### Getting Started

First of all, include **custombg** folder in your project, exactly where html files of your web pages reside.

This plugin requires jquery and jqueryUI. So, in case you are not already using it please add them. You can find them in  custombg/js/jquery and include it the html head.

Paste the following div just below body start tag
```html
<div id="options-window" class="fg-creamy bg-lightgrey"></div>
```

Now create a button that will load background options window whenever clicked
```html
<input type="button" value="Change Background" onclick="loadOptionsWindow()">
```

Add the loader javascript just before end of body tag.
```html
<script type="text/javascript" src="custombg/js/custombg-loader.js"></script>
```

###### Using HTML5 Appcache (Optional)

Though use of appcache is recommended for best possible performance, it is still optional. Please use appcache only if you are comfortable using it. However, if you do not use appcache manifest, you have to depend on leverage browser caching only.

To use appcache, simple include the manifest file named **custombg.manifest** in the html tag of the web page.

```html
  <!DOCTYPE html>
  <html manifest="custombg/custombg.manifest">
```

###### Performance Optimized
The total size of this plugin is ~15Mb, 99% of which is only because of images. Please note that these images are never requested if not needed, and are called on-demand using AJAX. You just need to include a tiny custombg-loader.js that calls required html, js, css whenever required i.e. when 'Change Background' button is clicked. The main js file that the loader always calls is mandatory and costs only ~10 Kb (minified) and can further be cached.

##### Changing Images or Themes

To change any image just go to images/bg-themes/ and replace existing image(s) with new one(s).
To do this, change themes's folder name in images/bg-themes/ and just find and replace 'Old theme name' with 'new theme name' in entire 'custombg' folder.

## Idea

The idea is to let users easily change the background of the website. Users can choose any image or color from the options window to overwrite the default background (provided by developer) of the website. And since the background image or color set is saved in local storage of the browser, the background settings will sustain until the user clears local storage.

Most websites today implement change background theme using server side languages. For e.g. Yahoo Mail, Gmail, Twitter etc.
This is not always an easy solution for front end developers and designers. Moreover it kills the performance of the web page.

We always needed a client side solution to make this easier and faster. Hence, this plugin was developed.


## Heavy use of HTML5 local storage

This plugin is mostly based on HTML5 local storage. This plugin uses local storage to save background settings, backgorund colors, background image urls, base64 png images etc. Even today, HTML5 local storage is often underestimated and poorly implemented. But, this plugin was possible only by harnessing the complete potential of html5 local storage.


## Browser Compatibility

IE9+, Chrome, Firefox, Opera, Safari


## Credits

Concept/Product Development: Shubham Badal

Lead Javascript Developer: Ajeet Lakhani

## License

The MIT License (MIT)

Copyright (c) 2014 CybrSys

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
