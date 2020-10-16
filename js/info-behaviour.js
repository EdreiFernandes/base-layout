var xml = new XMLHttpRequest();
xml.open("GET", "https://api.ipify.org");
xml.send();
xml.addEventListener("loadend", loaded);

function loaded(e) {
    var p_ipv4 = document.getElementById("ipv4");
    p_ipv4.innerHTML = xml.responseText;

    var p_url = document.getElementById("url");
    p_url.innerHTML = window.location.href;

    var p_hostname = document.getElementById("hostname");
    p_hostname.innerHTML = window.location.hostname;

    var p_pathname = document.getElementById("pathname");
    p_pathname.innerHTML = window.location.pathname;

    var p_protocol = document.getElementById("protocol");
    p_protocol.innerHTML = window.location.protocol;

    var p_port = document.getElementById("port");
    p_port.innerHTML = window.location.port;
}