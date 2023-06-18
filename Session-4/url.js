const url=require('url');

let address="http://www.amazon.in:8000/products/product.html?name=sonam&year=2022";

var myUrl= url.parse(address,true);

console.log('Host: '+myUrl.host);
console.log('HostName: '+myUrl.hostname);
console.log('Protocol: '+myUrl.protocol);
console.log('Port: '+myUrl.port)
console.log('Path: '+myUrl.path);
console.log('PathName: '+myUrl.pathname);
console.log('Search: '+myUrl.search)

let query= myUrl.query;
console.log(query.name)
console.log(query.year)