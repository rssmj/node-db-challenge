const server = require('./api/server.js');

const port = process.env.port || 8888;
server.listen(port, () => console.log(`\n [-_-]${port}[-_-] \n`));
