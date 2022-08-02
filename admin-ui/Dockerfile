FROM node:16.16.0 as build

WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm run prod

FROM nginx:1.22.0

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/admin-ui/ /usr/share/nginx/html