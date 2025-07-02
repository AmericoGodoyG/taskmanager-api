TaskManager API

API do TaskManager desenvolvida em Node.js, Express e MongoDB.

=================================================================
Como rodar localmente

git clone https://github.com/AmericoGodoyG/taskmanager-api.git
cd taskmanager-api
npm install
npm start
=================================================================

Acesse em: http://localhost:5000

=================================================================
Docker

docker build -t americogodoydocker/taskmanager-api:latest .
docker run -p 5000:5000 americogodoydocker/taskmanager-api:latest
=================================================================

CI/CD
Este projeto utiliza GitHub Actions para build e push automático da imagem Docker para o Docker Hub.