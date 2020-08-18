echo '1. Web server and front end build'
npm run build
echo '2. Docker container build'
docker-compose build
echo 'Done!'
