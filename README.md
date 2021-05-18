# Movie database

## Docker environment variables

### Client
Variable | Value | Default
--- | --- | ---


### Backend
Variable | Value | Default 
--- | --- | ---
PORT | The port where the backend should run | 4000
DB_HOST | Hostname (or service name in the compose file) | db
DB_PORT | The port where the database is running | 3306
DB_USERNAME | Username that has access to the databas | root
DB_PASSWORD | User password | password


### MySQL
Variable | Value
--- | ---
MYSQL_ROOT_PASSWORD | The password of the root user
MYSQL_DATABASE | The name of a database that will be created on the first startup |
MYSQL_USER | A user that will have access to that database |
MYSQL_PASSWORD | User password |