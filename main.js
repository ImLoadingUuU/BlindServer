var config = {
    'port': 3000
}
console.log("Blind Server 0.1 - Alpha")
console.log("Blind Server | Do you know,BlindServer has just 23 lines of codes!")
const express = require('express')
const app = express()
const Html2Obj = require('html2obj')

app.use(express.json())

app.post('/', function (req, res) {
    var html = req.body.html
    console.log(req.body)

    var dom = new Html2Obj().parseHtml(html)[0]
    console.log(JSON.stringify(dom))
    res.json(dom)
})
app.get('/', function (req, res) {
    res.send("not a type of request,please use POST")
})
app.listen(config.port)
console.log(`BlindServer Listen on port ${config.port}`)
