const server = require ("./server");


const PORT   = process.envPORT || 3000;

server.listen(PORT, () => {
    console.log("Server is listening on port 3000")
});