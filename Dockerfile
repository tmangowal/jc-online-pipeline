FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 2021
CMD npm start
