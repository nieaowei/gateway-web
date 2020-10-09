FROM node:latest

RUN mkdir /home/app

WORKDIR /home/app

COPY . .

RUN npm install

ENTRYPOINT ["npm","run","serve"]
