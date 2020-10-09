FROM node:latest

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

ENTRYPOINT ["nginx","-c","nginx.conf"]
