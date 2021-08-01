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


    conf_db_host  : 'localhost' // host
    
    conf_db_name  : 'RestaurantDB' // database name
    
    conf_user     : 'postgres'           // user name
    
    conf_password : 'admin'               // password
    
    conf_port     : '5432' 
    

![Captura de pantalla de 2021-08-01 16-42-20](https://user-images.githubusercontent.com/77680060/127786136-e14c2e10-3f10-4903-955d-60491eda9210.png)

6. You must press the f3 key to create a new script that is linked to our database, where we will generate the entities with the SQL queries:

![Captura de pantalla de 2021-08-01 17-02-50](https://user-images.githubusercontent.com/77680060/127786576-39840194-1f3d-4a46-a33b-70b9a7ddcee4.png)

7.  We go to the following path /DelilahResto/database/scriptCreateTablePost.txt, the file is opened, everything that is inside is copied, and it is copied in the DBeaver script.

8. After having everything copied in the DBeaver Script, press ctrl + a, and then press crtl + enter, and with this the relationship entities of our model will be created. This can be verified in the DBeaver public, where we can see the tables and their relationships, as can be seen in the following screenshot:

![Captura de pantalla de 2021-08-01 18-06-57](https://user-images.githubusercontent.com/77680060/127787977-c157cd57-9c41-41a6-a38a-a23b530b9aa7.png)

9. The next step is to open the project folder from the command terminal, and located in this path we write the command npm start.
With this the database connections are ready to use. And you will see a message saying that the connection is ready, as in the following screenshot:

![Captura de pantalla de 2021-08-01 18-11-15](https://user-images.githubusercontent.com/77680060/127788066-ddc86b8b-816e-427a-9056-cd08396fff4e.png)


# API

To try out the endpoints



Back-End-Proyect
