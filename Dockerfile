FROM alpine:3.10

LABEL maintainer phirmware

WORKDIR /var/www

COPY package*.json ./

RUN apk add npm

RUN npm install

COPY . .

ENV port=3000

EXPOSE  $port

CMD ["npm", "start"]