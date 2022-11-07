FROM alpine:latest AS builder
RUN apk add --no-cache --update nodejs npm
WORKDIR /usr/src/app
COPY . .
# 先完成安裝
RUN npm install --production

FROM alpine:latest
RUN apk add --no-cache --update nodejs npm
WORKDIR /usr/src/app
# 把安裝好的全部移過去
COPY --from=builder /usr/src/app .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]