FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y openssl

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3500

CMD ["/bin/bash", "-c","npm run start"]