#!/bin/bash
pm2 start /etc/nginx/ecosystem.config.js --env production --update-env
nginx -g "daemon off;"
