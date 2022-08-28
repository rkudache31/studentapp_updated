FROM node:alpine
EXPOSE 3000
COPY student.json .
RUN npm install json-server -g
CMD ["json-server","-H","0.0.0.0","--watch","student.json"]