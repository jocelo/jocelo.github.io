FROM centos
WORKDIR /app
RUN yum update -y \
    yum install -y curl
CMD ["tail", "-f", "/dev/null"]