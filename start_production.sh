#!/bin/bash

( cd /home/system-registration-frontend && sudo rm -r /build )
( cd /home/system-registration-frontend && npm run build )
( cd /home/system-registration-frontend && git pull )
( cd /var/www/html/ && sudo rm -r /femeg)
mkdir /var/www/html/femeg
cp -r /home/system-registration-frontend/build/* /var/www/html/femeg/
chown -R www-data:www-data /var/www/html/femeg/
nginx -t
systemctl restart nginx