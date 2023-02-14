FROM node:12.18.1-alpine

WORKDIR /usr/src/azure-storage

COPY package*.json ./

RUN npm install --only=production

COPY ./src ./src

CMD npm start