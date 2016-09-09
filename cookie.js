var get_previous_value = function(origin, cookie_name){
    var current_page    = document.URL;
    var referrer        = document.referrer;
    var current_cookie  = get_cookie(cookie_name);
 
    if(current_cookie){
        var value   = current_cookie.split('|')[0];
        var page    = current_cookie.split('|')[1];
        if(page == referrer){
            document.cookie = cookie_name + '=' + origin + '|' + current_page + ';path=/';
            return value;
        }
       
    } else {
        document.cookie = cookie_name + '=' + origin + '|' + current_page + ';path=/';
    }
}
 
 
 
var get_cookie = function(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
 
 
get_previous_value(document.title, 'p_title');