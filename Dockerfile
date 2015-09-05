FROM nginx
MAINTAINER Vacheslav Starikov <slavicstar@fastmail.com>
RUN sed -i.bak "s/\([[:space:]]\{1,\}sendfile[[:space:]]\{1,\}\)on/\1off/" /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html
VOLUME /usr/share/nginx/html

