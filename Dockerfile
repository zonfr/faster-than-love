FROM node:14
RUN mkdir -p /user/src/app
COPY package*.json ./
COPY . .
RUN npm install
CMD["node", "server.js"]