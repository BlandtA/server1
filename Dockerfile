FROM node:24.14.1-alpine3.23

WORKDIR /app

COPY package*.json ./

RUN npm install --save @nestjs/sequelize sequelize sequelize-typescript serve-static

RUN npm install --save-dev @types/sequelize

RUN npm install --save pg pg-hstore

RUN npm i @nestjs/config swagger swagger-ui-express wt bcryptjs

RUN npm i cross-env class-validator class-transformer uuid

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]