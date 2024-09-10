FROM node:21-slim

RUN apt update && apt install -y openssl procps

# RUN npm install -g @nestjs/cli@10.3.2 @prisma/client

USER node

RUN mkdir /home/node/smartranking-api/

WORKDIR /home/node/smartranking-api/

CMD ["/home/node/smartranking-api/.docker/start-dev.sh"]