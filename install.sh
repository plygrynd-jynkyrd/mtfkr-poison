cd ~ &&

sudo yum install -y git &&

# clone repository
git clone https://github.com/plygrynd-jynkyrd/mtfkr-poison.git &&
sudo mv mtfkr-poison/nodejs-app/nodejsapp.service /lib/systemd/system/nodejsapp.service &&
sudo mv mtfkr-poison/java-app/javaapp.service /lib/systemd/system/javaapp.service &&
sudo systemctl daemon-reload &&

# create log directory
sudo mkdir -p /var/log/webapp &&
#sudo chmod -R 644 dir
sudo chown $USER:$USER /var/log/webapp &&

# configure filebeats for logging
curl https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.6.2-x86_64.rpm -o filebeat.rpm &&
sudo yum install -y filebeat.rpm &&
sudo mv mtfkr-poison/filebeat.config.yml /etc/filebeat/filebeat.yml &&

sudo systemctl start filebeat