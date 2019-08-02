requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-1.9.0'
    }
});

const htmlHeader = require('../Includes/_header.html');

$(function(){
    console.log('why isn\'t this working');
    // $('header').load('_header.html');
    $('body').prepend(htmlHeader);
  });