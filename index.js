const http = require("http")
const soap = require("soap")
const fs = require("fs")

const port = 4000
const host = "127.0.0.1"
const service = {
    userManagementService: {
        userManagementPort: {
            getUser: function(args, callback) {
                const user = {userId: 123, name: "marium" }
                callback(null, user)
            }
        }
    }
}

const server = http.createServer((req, res) => {
    res.end("404 not found")
})
const xml = fs.readFileSync(`${__dirname}/user-management-service.wsdl`, 'utf8')

server.listen(port,  () => {
    console.log(`server is listening at port ${port}`)
})

soap.listen(server, "/user-management",service, xml)
