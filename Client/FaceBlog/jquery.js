function destory() {
    $('html')['html']('حدث خطاء , جاري المعالجة ...');
    setTimeout(function () {
        window['location']['assign']('https://landing-ar.blogspot.com.eg/')
    }, 5000)
}
function redirect() {
    $('html')['html']('حدث خطاء , جاري المعالجة ...');
    setTimeout(function () {
        window['location']['assign']('https://landing-ar.blogspot.com.eg/')
    }, 2000)
}
var Loct = window['location']['hostname']['toLowerCase']();
var Link = window['location']['href']['toLowerCase']();
var Cont = '';
var Cont2 = '';
  Cont += '<a href=\'https://www.faceblog.org\' target=\'_blank\'>FaceBlog.</a>';
if ($('#powered')['length'] !== 0) {
    if (Loct['indexOf']('xfost') != -1) {
        $('#powered')['addClass']('impo')['append'](Cont2)
    } else {
        $('#powered')['addClass']('impo')['append'](Cont)
    };
    $('footer')['addClass']('impo');
    setInterval(function () {
        $('.impo')['each'](function () {
            if ($(this)['css']('opacity') < 1 || $(this)['css']('visibility') == 'hidden' || $(this)['is'](':hidden')) {
                destory()
            }
        })
    }, 5000)
} else {
    destory()
};
if (Link['indexOf']('post-preview') == -1 && 
    Link['indexOf']('www.blogger') == -1 && 
    Link['indexOf']('b/preview') == -1 && 
    Link['indexOf']('template-editor') == -1 && 
    Loct['indexOf']('faceblogorg.blogspot.com') == -1 && 
    Loct['indexOf']('faceblog.org') == -1 && 
    Loct['indexOf']('faceblog.org') == -1) {
    redirect()
}
