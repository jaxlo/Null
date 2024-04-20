FROM node:14-alpine

RUN apk --no-cache add sqlite

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install -g && npm cache clean --force

CMD [ "npm", "start" ]

HEALTHCHECK  --interval=5m --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

EXPOSE 3000

