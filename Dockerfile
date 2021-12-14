FROM node:11.6.0-alpine AS builder
COPY . ./testProject
WORKDIR /testProject
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /testProject/dist/testProject/ /usr/share/nginx/html