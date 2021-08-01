# DelilahRest-
# Description

En este proyecto tiene como objetivo definir una REST API, que sea capaz de agregar, eliminar y modificar la infomación de una base de datos para un restaurante llamado Delilah.

Para este proyecto se usaron las siguientes tecnologias:
1.   body-parser : 
2.   cors :
3.   dotenv :
4.   express :
5.   helmet :
6.   jsonwebtoken :
7.   mysql :
8.   mysql2 :
9.   pg :
10.  pg-hstore :
11.  sequelize :
12.  SWagger :


# Arquitecture.

# Steps to run the app.

To run the app, you have to follow the setps depicted below:

1. Install DBeaver 21.1.0.

2. Clone the repository of the following website https://github.com/afran012/DelilahResto.git in a folder on your hard drive.

3. Open DBeaver and create a new connection by clicking on the icon as seen in the following image:

![Captura de pantalla de 2021-08-01 16-18-06](https://user-images.githubusercontent.com/77680060/127785609-95577a4f-12ac-4432-911d-2380e048ef11.png)

4. PostgreSQL must be selected as the database driver, as can be seen in the following screenshot:

![Captura de pantalla de 2021-08-01 16-36-04](https://user-images.githubusercontent.com/77680060/127785995-d496320b-e9c0-4622-a192-f41408ef1eee.png)

5. The database parameters must be configured with the following characteristics:


    conf_db_host  : 'localhost', // host
    conf_db_name  : 'RestaurantDB', // database name
    conf_user     : 'postgres',           // user name
    conf_password : 'admin',               // password
    conf_port     : '5432' 

![Captura de pantalla de 2021-08-01 16-42-20](https://user-images.githubusercontent.com/77680060/127786136-e14c2e10-3f10-4903-955d-60491eda9210.png)



# API

To try out the endpoints, 



Back-End-Proyect
