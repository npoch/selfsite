const header = html('_header.html');
const footer = html('_footer.html');

(function(){
    $('body').prepend($('header'));
    $('body').append('footer');
})();