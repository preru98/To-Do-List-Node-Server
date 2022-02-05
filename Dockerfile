FROM node:17

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g nodemon

CMD nodemon server/server.js

EXPOSE 3003