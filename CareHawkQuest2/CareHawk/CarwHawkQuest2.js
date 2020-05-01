const cheerio = require('cheerio');
const request = require('request');

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

function parse(urlLink, css)
{
    
    return new Promise(function(resolve, reject)
    {
      return  request(
        {
            method: 'GET',
            url: urlLink
        }, function (error, response, body) 
        {
             if (error) return reject(error);
            try 
            {
                
                resolve(body);
            } 
            catch(e) {
                reject(e);
            }
        });
    })
    .then(function(result) 
    { 
        let $ = cheerio.load(result);
        
      return $;
    })
    .then(function(result) 
    { 
        let h1El = result('.'+css);

        console.log("----> ",h1El.get(0).tagName)
    
    });
}


if(myArgs.length==2)
{
    if(ValidURL(myArgs[0]))
    {
        parse(myArgs[0],myArgs[1]);
    }
    else
    {
        console.log("not a valid webpage url");
    }
}
else
{
    console.log("You either enter less than two arguments or more than two arguments");
    console.log("Please valid web page url and css name");
}

function ValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      alert("Please enter valid URL.");
      return false;
    } else {
      return true;
    }
  }