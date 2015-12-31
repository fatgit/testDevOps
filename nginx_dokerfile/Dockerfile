from nginx:latest

maintainer Dockerfiles

run apt-get update
run apt-get install -y supervisor

run rm /etc/nginx/conf.d/default.conf
add nginx.conf /root/
run ln -s /root/nginx.conf /etc/nginx/conf.d/
add uwsgi_params /root/
run echo "daemon off;" >> /etc/nginx/nginx.conf
add supervisor-app.conf /root/
run ln -s /root/supervisor-app.conf /etc/supervisor/conf.d/

cmd ["supervisord", "-n"]
expose 80