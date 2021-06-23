quick intro to docker
1. https://geekflare.com/docker-architecture/
2. https://morioh.com/p/b1b47d94f1de
3. https://docs.docker.com/compose/startup-order/

Pre-requisite: - Docker - Docker compose

Setting up application(Deployment)
1.install docker & docker-compose 
https://docs.docker.com/get-docker/

2.change directory in project root directory
.e.g. cd {path_to folder}/
[via terminal]

3.rename .env.example to .env
.e.g. mv .env.example .env
[via terminal]

4.set up enviroment variables in .env[can be done in file or via terminal]
.e.g. 
     - nano .env
     - change values and save configuration
     [via terminal]

5.run "docker-compose up --build" in the root directory
