var get_previous_value = function(origin, cookie_name){
    var current_page    = document.URL;
    var referrer        = document.referrer;
    var current_cookie  = get_cookie(cookie_name);
	
    if(current_cookie){
        var _value   	= current_cookie.split('|')[0];
        var page    	= current_cookie.split('|')[1];
        if(page){
			set_referrer_value(cookie_name, origin, current_page);
			console.log('>>>>>>>>>>>>>>>>  ' + decodeURI( _value));
            return decodeURI( _value);
        } else {
			set_referrer_value(cookie_name, origin, current_page);
		}
       
    } else {
        set_referrer_value(cookie_name, origin, current_page);
		console.log('>>>>>>>>>>>>>>>>> Criado');
    }
}
 
var set_referrer_value = function(cookie_name, origin, current_page){
	if(typeof cookie_name === "string"){
		document.cookie = cookie_name + '=' + encodeURI(origin) + '|' + current_page + ';domain=.' + document.domain + ';path=/';
	}
} 
 
var get_cookie = function(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
