FROM centos
RUN yum update -y
RUN yum install nodejs -y
COPY . /app
WORKDIR /app
CMD ["npm", "install", "-g", "@angular/cli@7"]