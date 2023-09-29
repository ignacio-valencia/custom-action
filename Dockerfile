FROM node:14

COPY . /action
WORKDIR /action

RUN npm install

ENTRYPOINT ["node", "/action/index.js"]
