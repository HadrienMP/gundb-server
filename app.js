import { createServer } from 'http';
import GUN from 'gun';
const port = process.env.PORT || 8080;
const server = createServer().listen(port);
GUN({ web: server });

console.log(`Gun is running on port ${port}`)
