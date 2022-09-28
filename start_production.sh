#!/bin/bash

sudo rm -r /home/system-registration-frontend/build
( cd /home/system-registration-frontend && npm run build )
sudo rm -r /var/www/html/femeg/
mkdir /var/www/html/femeg
cp -r /home/system-registration-frontend/build/* /var/www/html/femeg/
chown -R www-data:www-data /var/www/html/femeg/
nginx -t
systemctl restart nginx