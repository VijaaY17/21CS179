var express = require('express');
var app = express();
var axios = require('axios')

app.get('/', function (req, res) {
   res.send('Hello World');
})
var prev = []
function add(accumulator, a) {
    return accumulator + a;
  }

app.get("/number/e",async(req,res)=>{
const r = await axios.get("http://20.244.56.144/numbers/primes");
curr = r.data.numbers
console.log(prev,curr)
const result = {}
result["numbers"] = curr
result["windowPrevState"] = prev 
result["windowCurrState"] = curr 
let avg = curr.reduce(add, 0)
result["avg"] = avg
return res.json(result)

})

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
