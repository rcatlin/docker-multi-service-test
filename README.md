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
CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS                    NAMES
ce80ab66d9f6        dockermultiservicetest_app   "npm start"              26 seconds ago      Up 12 seconds       0.0.0.0:9999->9999/tcp   dockermultiservicetest_app_1
d27e882f4f26        dockermultiservicetest_api   "npm start"              27 seconds ago      Up 37 seconds       0.0.0.0:8888->8888/tcp   dockermultiservicetest_api_1
29c7bfb63351        redis:alpine                 "docker-entrypoint.s…"   28 seconds ago      Up 37 seconds       6379/tcp                 dockermultiservicetest_redis_1
```

The api is bound to port `8888`, and the app is bound to port `9999`

4) Visit `http://localhost:9999` in your browser

You should see the front-end form where you can enter a name for a greeting.

![Form Screenshot](https://github.com/rcatlin/docker-multi-service-test/raw/master/screenshot.png)

5) Checkout the GraphQLi endpoint at `http://localhost:8888/graphql`

![Form Screenshot](https://github.com/rcatlin/docker-multi-service-test/raw/master/screenshot_graphql.png)

### Versions

```bash
$> docker --version
Docker version 17.12.0-ce, build c97c6d6
$> docker-compose --version
docker-compose version 1.18.0, build 8dd22a9
```
