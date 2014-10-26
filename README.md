# custom-background.js

> Easily add background themes option to your website in a few minutes

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
