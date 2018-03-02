# Docker Multi Service Test

I created this repository with the sole purpose of learning how to manage a multi-service project using Docker.


# Setup

1) Clone the repository
```
$> git clone git@github.com:rcatlin/docker-multi-service-test
```

2) CD into project directory
```
$> cd docker-multi-service-test 
```

3) Build and run Docker containers
```
$> make up
```

You will now have three containers running
```
$> docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                    NAMES
266d012870af        dockermultiservice_api   "npm start"              32 minutes ago      Up 33 minutes       0.0.0.0:8888->8888/tcp   dockermultiservice_api_1
86fb696901ad        redis:alpine             "docker-entrypoint.s…"   2 hours ago         Up 2 hours          6379/tcp                 dockermultiservice_redis_1
6b93f0f0fc7b        dockermultiservice_app   "npm start"              20 hours ago        Up 20 hours         0.0.0.0:9999->9999/tcp   dockermultiservice_app_1
```

The api is bound to port `8888`, and the app is bound to port `9999`

4) Visit `http://localhost:9999` in your browser

You should see the front-end form where you can enter a name for a greeting.

![Form Screenshot](https://github.com/rcatlin/docker-multi-service-test/raw/master/screenshot.png)

### Versions

```bash
$> docker --version
Docker version 17.12.0-ce, build c97c6d6
$> docker-compose --version
docker-compose version 1.18.0, build 8dd22a9
```