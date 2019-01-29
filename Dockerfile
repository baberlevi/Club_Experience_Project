FROM centos:7
LABEL maintainer="Levi Baber <baber@iastate.edu>"

# prereq
RUN yum -y install epel-release
RUN yum -y install nodejs mongodb-server git
RUN git clone https://github.com/ISU-WebDevClub/webdev.git

RUN cd webdev && npm install
COPY simple_wrapper simple_wrapper

CMD ["simple_wrapper"]
