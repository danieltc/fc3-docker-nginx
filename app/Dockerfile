
FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 3000

COPY . . 
RUN npm install
CMD [ "node", "index.js" ]
