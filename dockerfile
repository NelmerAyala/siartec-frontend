FROM node:22-alpine

WORKDIR /

COPY . .

RUN npm install

EXPOSE 3010