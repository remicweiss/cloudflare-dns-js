# cloudflare-dns-js

Two functions that help with getting dns info in javascript. It uses the cloudflare DNS services, specifically https://developers.cloudflare.com/1.1.1.1/dns-over-https/. The code is native javascript.

Example call for the simple method:

```javascript
var ip = await getIP("google.com","A")
```

Example call for the full response (https://developers.cloudflare.com/1.1.1.1/dns-over-https/json-format/):
```javascript
var response = await resolve("google.com","A")
```
