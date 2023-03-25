FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
COPY ./mongo/mongo-init/mongo-init.js ./docker-entrypointdb.d/mongo-init.js

RUN npm ci

ENV DEBUG=playground:*

USER node
CMD npm start
