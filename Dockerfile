FROM nginx:latest

RUN mkdir /home/app

COPY . /home/app

RUN mv ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /home/app

ENTRYPOINT ["nginx","-g","daemon off;"]
