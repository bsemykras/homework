var https = require('http');
var url = require('url');
var util =require("util");
var counter =0;

function UrlError(status,message){
    this.status =status;
    this.message =message;
}

util.inherits(UrlError,Error);
UrlError.prototype.name ="UrlError";
UrlError.prototype.ShowMessage =function()
{
    return this.status+" "+this.message;
};

https.createServer(function(req,res){
    res.setHeader("Content-type", 'text/html; charset=utf-8');
    var pathname = url.parse(req.url).pathname;

    if(pathname==="/index.html")
    {
        counter++;
        res.end("Привіт світ!");
    }
    else if(pathname==="/count.html")
    {
        res.end(counter.toString());
    }
    else if(pathname!=="/" && pathname!=="/favicon.ico")
    {
        console.log(pathname);
        throw new UrlError(500,"Page not found");
    }
}).listen(1337,'127.0.0.1');





/**
 * Created by bogdan on 17.03.15.
 */