import { config } from './Commons/config.js';
import container from './Infrastructures/container.js';
import { createServer } from './Infrastructures/http/createServer.js';

const start = async () => {
  const app = await createServer(container);

  app.listen(config.app.port, config.app.host, () => {
    console.log(`server running at port ${config.app.port}`);
  });
};

start();