FROM node:14.17.1-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.17-alpine as prod-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]