var http = new XMLHttpRequest();
var url = "http://api.justyo.co/yo/";
var params = "api_token=<8857de65-b94d-45c9-b1d7-752432b7e7d8>&username=SQUAD5";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);