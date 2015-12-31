from ubuntu:14.04

maintainer Dockerfiles

run apt-get update
run apt-get install -y build-essential git
run apt-get install -y python python-dev python-setuptools
run apt-get install -y nginx supervisor
run easy_install pip


add . /home/docker/code/

# install uwsgi now because it takes a little while
run pip install uwsgi
run pip install flask

expose 80
cmd ["supervisord", "-n"]


