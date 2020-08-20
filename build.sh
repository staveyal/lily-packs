echo '1. Web server and front end build'
npm install
npm run build
echo '2. Docker compose build'
docker-compose build
echo 'Done!'
