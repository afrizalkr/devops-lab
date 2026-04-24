FROM nginx:alpine

# hapus default nginx content
RUN rm -rf /usr/share/nginx/html/*

# copy file project kamu
COPY . /usr/share/nginx/html

# expose port
EXPOSE 80
