var express = require('express');
var router = express.Router()
const viewPath = `${__dirname.replace('routes',"views/")}`

/****************/
/* VIEW ROUTES */
/**************/
router.get("/", (request, response) => {
    response.sendFile(viewPath+"index.html")
});

router.get("/timestamp-microservice", (request, response) => {
    response.sendFile(viewPath+'timestamp.html');
});

router.get("/url-shortener", (request, response) => {
    response.sendFile(viewPath+'urlShortener.html');
});

module.exports = router