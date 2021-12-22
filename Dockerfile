FROM centos
RUN yum update -y
RUN yum install nodejs -y
RUN yum install curl -y
# COPY . /app
WORKDIR /app
CMD ["npm", "install", "-g", "@angular/cli@7"]
# CMD curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 