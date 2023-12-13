FROM alpine:3

RUN apk add --no-cache apache2 apache2-http2 apache2-proxy \
    && rm -rf /usr/sbin/fcgistarter /usr/sbin/suexec /var/www \
    && mkdir -p /static-html/htdocs

COPY ./httpd-container.conf /etc/apache2/regsys.conf
COPY ./public /static-html/reg-frontend/app
COPY ./html /static-html/reg-frontend

RUN chmod -R go=rX /static-html /etc/apache2/regsys.conf

RUN mkdir -p /run/apache2 && chmod 777 /run/apache2

EXPOSE 8080

USER 8877

CMD ["/usr/sbin/httpd", "-f", "/etc/apache2/regsys.conf"]
