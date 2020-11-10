const readline = require("readline");
const fs = require("fs");
const os = require("os");
const http = require("http");
const rl = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
});

console.log("\nChoose an option: " +
            "\n1. Read package.json " +
            "\n2. Display OS info " +
            "\n3. Start HTTP server ");
rl.question("Type a number: ", (answer) => {
    
    switch(answer) {
        case "1":
            console.log("Reading package.json file");
            fs.readFile(__dirname + "/package.json", "utf-8", (err, data) => {
                if (err) throw err;
                console.log(data);    
            });
            break;
        case "2":
            console.log("Getting OS info...")                               // log all OS info
            console.log(`SYSTEM MEMORY: ${(os.totalmem() /1024 / 1024 / 1024).toFixed(2) + "GB" }`);
            console.log(`FREE MEMORY: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2) + "GB" }`);
            console.log(`CPU CORES: ${os.cpus().length}`);
            console.log(`ARCH: ${os.arch()}`);
            console.log(`PLATFORM: ${os.platform()}`);
            console.log(`RELEASE: ${os.release()}`);
            console.log(`USER: ${os.userInfo().username}`);
            break;
        case "3":
            console.log("Starting HTTP server..." + 
                        "\nListening on port 3000");
            require("http").createServer(function(req, res) {
                res.statusCode = 200;
                res.setHeader("content-type", "text/plain");
                res.end("Hello World");
            }).listen(3000);
            break;
        default:
            console.log("That's an invalid option. Please enter a number between 1 - 3.");
    }
    rl.close();
});