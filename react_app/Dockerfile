FROM ubuntu as build-step
#EXPOSE 3001
RUN apt-get update 
RUN apt install npm -y
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app 
RUN npm run build
#CMD [ "npm", "start", "./studentapp" ]

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
