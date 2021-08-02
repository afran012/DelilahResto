# DelilahRest-
# Description

The objective of this project is to define a REST API, which is capable of adding, deleting and modifying the information of a database for a restaurant called Delilah.

The following technologies were used for this project:
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

To test the endpoints you can test the file spec.yml, you can copy the text of this file in the Swagger editor (https://editor.swagger.io/), where you can test all the endpoints.

## Create a new user:
In this section you can create a new user, you must enter the username, full name, account password, contact number, email, address to take orders.
You must click the Tryout button, then the Execute button to request the creation of a new user.
It can be seen in Swagger as in the following screenshot:

![Captura de pantalla de 2021-08-01 20-08-11](https://user-images.githubusercontent.com/77680060/127791800-0ff91be8-f4f7-49b0-8a1f-6f7c237775c6.png)

## Login:

In this section you can enter your credentials to validate your account in the database, this action is necessary for the rest of the actions available in the API. You must enter the username and password:
![Captura de pantalla de 2021-08-01 20-14-54](https://user-images.githubusercontent.com/77680060/127792145-7d9222ef-03a7-468b-ad1b-b94834965523.png)

Then you will receive a Token, which you must enter for most API operations.

## Create a new order.


In this request a new order can be generated. You must enter the time the order was made, the type of payment, the user ID, and an array with the IDS of the products that the order contains.

![Captura de pantalla de 2021-08-01 20-39-23](https://user-images.githubusercontent.com/77680060/127793398-a32d37bb-eeef-4ba1-b632-25606d2ae2d0.png)




Back-End-Proyect
