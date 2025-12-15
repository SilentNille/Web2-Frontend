FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 80

COPY . .

CMD [ "npm", "start", "--", "--host", "0.0.0.0"]
