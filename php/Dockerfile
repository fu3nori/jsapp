FROM php:latest

RUN docker-php-ext-install mysqli pdo pdo_mysql

WORKDIR /var/www/html

EXPOSE 9000

CMD ["php", "-S", "0.0.0.0:9000"]
