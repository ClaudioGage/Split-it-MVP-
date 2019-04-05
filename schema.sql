DROP DATABASE IF EXISTS SplitIt;

CREATE DATABASE SplitIt;

USE SplitIt;

CREATE TABLE Bills (
  id int NOT NULL AUTO_INCREMENT,
  group DECIMAL(20, 2) NOT NULL,
  invididual DECIMAL(20, 2)  NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
