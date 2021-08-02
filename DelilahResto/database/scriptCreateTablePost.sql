CREATE TABLE UserState (
StateID  SERIAL NOT NULL PRIMARY KEY,
Name varchar(255) NOT NULL
);


CREATE TABLE Users (
UserID SERIAL NOT NULL PRIMARY KEY,
UserName varchar(255) NOT NULL,	
FullName varchar(255) NOT NULL,
Password varchar(255) NOT NULL,
Address varchar(255) NOT NULL,
PhoneNumber varchar(255) NOT NULL,
Email varchar(255) NOT NULL,
StateID  int
);

ALTER TABLE Users ADD FOREIGN KEY (StateID) REFERENCES UserState(StateID); 


CREATE TABLE OrderState (
StateID SERIAL NOT NULL PRIMARY KEY,
Name varchar(255) NOT NULL
);

CREATE TABLE Orders (
OrderID SERIAL NOT NULL PRIMARY KEY,
StateID int NOT NULL,
OrderHour time,
PaymentType varchar(255) NOT NULL,
UserID int
);

ALTER TABLE Orders ADD FOREIGN KEY (StateID) REFERENCES OrderState(StateID); 
ALTER TABLE Orders ADD FOREIGN KEY (UserID) REFERENCES Users(UserID); 

CREATE TABLE Products (
ProductID SERIAL NOT NULL PRIMARY KEY,
ProductName varchar(255) NOT NULL,
ProductPrice int NOT NULL
);

CREATE TABLE ProductOrder (
ProductOrderID SERIAL NOT NULL PRIMARY KEY,
OrderID int,
ProductID int
);

ALTER TABLE ProductOrder ADD FOREIGN KEY (OrderID) REFERENCES Orders(OrderID); 
ALTER TABLE ProductOrder ADD FOREIGN KEY (ProductID) REFERENCES Products(ProductID);

INSERT INTO "RestaurantDB".public.userstate (Name) VALUES
	 ('Standart'),
	 ('Admin');


INSERT INTO "RestaurantDB".public.users (UserName,FullName,Password,Address,PhoneNumber,Email,StateID) VALUES
	 ('afranadmin','Airan Franco','air123','calle 13','3113434234','afran@asdf.com',2),
	 ('FredyMer','Freddie Mercury','123','calle 123','3113434234','afran@asdf.com',1),
	 ('JhonSmi','John Smith','123','calle 123','3113434234','afran@asdf.com',1),
	 ('BrianMay','Brian May','123','calle 123','3113434234','afran@asdf.com',1),
	 ('MalinQui','Malin Quist','123','calle 123','3113434234','afran@asdf.com',1),
	 ('JordannaKitch','Jordanna Kitchener','123','calle 123','3113434234','afran@asdf.com',1),
	 ('IvanSanders','Ivan Sanders','123','calle 123','3113434234','afran@asdf.com',1),
	 ('Monica Ribeiro','Monica Ribeiro','123','calle 123','3113434234','afran@asdf.com',1),
	 ('FredyMer1','Freddie Mercury','123','calle 123','3113434234','afran@asdf.com',1),
	 ('JhonSmi1','John Smith','123','calle 123','3113434234','afran@asdf.com',1),
	 ('BrianMay1','Brian May','123','calle 123','3113434234','afran@asdf.com',1),
	 ('MalinQui1','Malin Quist','123','calle 123','3113434234','afran@asdf.com',1),
	 ('JordannaKitch1','Jordanna Kitchener','123','calle 123','3113434234','afran@asdf.com',1),
	 ('IvanSanders1','Ivan Sanders','123','calle 123','3113434234','afran@asdf.com',1),
	 ('Monica Ribeiro1','Monica Ribeiro','123','calle 123','3113434234','afran@asdf.com',1);


	
INSERT INTO "RestaurantDB".public.orderstate (Name) VALUES
	 ('Confirmed'),
	 ('Preparing'),
	 ('On the way'),
	 ('Delivered');
	

INSERT INTO "RestaurantDB".public.products (ProductName, ProductPrice) VALUES
	 ('Bagel de Salmón',425),
	 ('Hamburguesa Clásica',350),
	 ('Sandwich Veggie',310),
	 ('Ensalada Veggie',340),
	 ('Focaccia',300),
	 ('Sandwich Focaccia',440),
	 ('Sandwich Focaccia 2',440);
	
INSERT INTO "RestaurantDB".public.Orders (StateID,OrderHour,PaymentType,UserID) VALUES
	 (1,'12:50:00','Credit',2),
	 (1,'12:50:00','cash',1),
	 (1,'12:50:00','cash',3),
	 (1,'12:50:00','Credit',2),
	 (1,'12:50:00','cash',1),
	 (1,'12:50:00','cash',3),
	 (1,'12:50:00','Credit',2),
	 (1,'12:50:00','cash',1),
	 (1,'12:50:00','cash',3),
	 (1,'12:50:00','Credit',2),
	 (1,'12:50:00','cash',1),
	 (1,'12:50:00','cash',3);
	

INSERT INTO "RestaurantDB".public.ProductOrder (OrderID, ProductID) VALUES
	 (2,1),
	 (1,2),
	 (1,5),
	 (3,3),
	 (2,4),
	 (2,1),
	 (4,2),
	 (5,5),
	 (4,3),
	 (6,4),
	 (7,1),
	 (8,2),
	 (8,5),
	 (9,3),
	 (9,5),
	 (10,6),
	 (10,6),
	 (11,7),
	 (11,7),
	 (12,3),
	 (12,2),
	 (1,4),
	 (2,5),
	 (3,1),
	 (4,2),
	 (5,7),
	 (6,6),
	 (7,6),
	 (8,1),
	 (2,1),
	 (1,2),
	 (1,5),
	 (3,3),
	 (2,4);
	 
	 
