from ubuntu:14.04

maintainer Dockerfiles

run apt-get update
run apt-get install -y build-essential git
run apt-get install -y python python-dev python-setuptools
run apt-get install -y supervisor
run easy_install pip


add uwsgi.ini /root/
add supervisor-app.conf /root/
run ln -s /root/supervisor-app.conf /etc/supervisor/conf.d/

# install uwsgi now because it takes a little while
run pip install uwsgi
run pip install flask

#expose 5000
cmd ["supervisord", "-n"]


