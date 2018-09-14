class CloudflareDns {

    static resolve(domain, type, response) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                response(this.status === 200 ? JSON.parse(this.responseText) : { Status: -1, requestStatus: this.status });
            }
        };
        xhttp.open("GET", "https://cloudflare-dns.com/dns-query?name=" + domain + "&type=" + type, true);
        xhttp.setRequestHeader("accept", 'application/dns-json');
        xhttp.send();
    }

    static getIPv4(domain, response) {

        function interResolve(data) { (typeof (data.Answer) === "undefined" ? response(null) : response(data.Answer[0].data)) }
        this.resolve(domain, "A", interResolve);
    }

    static getIPv6(domain, response) {

        function interResolve(data) { (typeof (data.Answer) === "undefined" ? response(null) : response(data.Answer[0].data)) }
        this.resolve(domain, "AAAA", interResolve);
    }
}
