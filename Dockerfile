FROM node:16-alpine

WORKDIR /app

COPY package* ./
RUN apk update && apk add --no-cache --virtual .build-deps make gcc g++ python3 \
 && npm ci \
 && apk del .build-deps \
 && npm install pg --save
COPY . .

CMD ["npm", "run", "start:dev"]
