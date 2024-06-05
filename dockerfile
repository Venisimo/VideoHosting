FROM node:14

# Установка ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
CMD [ "node", "backend/index.js"]
