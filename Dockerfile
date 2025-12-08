# Docker-Skript für Web-Anwendung
FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]
