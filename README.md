# SOAP-Example
This is simple user-management web-service in WSDL using SOAP over HTTP in node.js

# setup steps
* Take a clone from `https://github.com/MariumShahid13/SOAP-Example.git`
* Install dependencies using `npm i`
* Run project using `node index.js`

# Test in postman
* Create New post request with url "http://localhost:4000/user-management"
* Add header "content-Type" : "text/xml"
* Add header "SOAPAction" : "getUser"
* Navigate to body tab and select "raw" and then "XML" from dropdown menu
* Paste code in body section
    * `<?xml version="1.0" encoding="UTF-8"?>`
    * `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"`
    * `xmlns:web="http://example.com/user-management" >`
    * `<soapenv:Header/>`
    * `<soapenv:Body>`
    * `<web:getUserRequest>`
        * `<web:userId>123</web:userId>`
    *  `</web:getUserRequest>`
    * `</soapenv:Body>`
    * `</soapenv:Envelope>`
* You will receive user in xml



