FROM nginx:latest

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

RUN mv ./nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]
