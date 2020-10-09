FROM nginx:latest

RUN mkdir /home/app && mv ./nginx.conf /etc/nginx/nginx.conf

COPY . /home/app

WORKDIR /home/app

ENTRYPOINT ["nginx","-g","daemon off;"]
