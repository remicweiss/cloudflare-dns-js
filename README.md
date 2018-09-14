# cloudflare-dns-js

Two functions that help with getting dns info in javascript. It uses the cloudflare DNS services, specifically https://developers.cloudflare.com/1.1.1.1/dns-over-https/. The code is native javascript.

Example call for get IP method (returns ip to the callback function):
```javascript
CloudflareDNS.getIPv4("google.com",callbackFunction);
```

Example call for the full response (returns https://developers.cloudflare.com/1.1.1.1/dns-over-https/json-format/ to the callback function):
```javascript
CloudflareDNS.getIPv4("google.com","A",callbackFunction);
```
