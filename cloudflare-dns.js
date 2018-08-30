function resolve(what,type)
{
    return new Promise(resolve => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            }
            else if (this.readyState === 4 && this.status !== 200) {
                resolve({Status: -1, requestStatus: this.status});
            }
        };
        xhttp.open("GET", "https://cloudflare-dns.com/dns-query?name="+what+"&type="+type, true);
        xhttp.setRequestHeader("accept",'application/dns-json');
        xhttp.send();
    });
}

function getIP(what,type)
{
    return new Promise(resolve => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if(typeof (JSON.parse(this.responseText).Answer) === "undefined")
                    resolve(null);
                else
                    resolve(JSON.parse(this.responseText).Answer[0].data);
            }
            else if (this.readyState === 4 && this.status !== 200) {
                resolve({Status: -1, requestStatus: this.status});
            }
        };
        xhttp.open("GET", "https://cloudflare-dns.com/dns-query?name="+what+"&type="+type, true);
        xhttp.setRequestHeader("accept",'application/dns-json');
        xhttp.send();
    });
}
