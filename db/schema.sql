DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
 id INT(100) NOT NULL AUTO_INCREMENT,
  name varchar(35) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);


