
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id int AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(99) NOT NULL,
devoured BOOLEAN default false,
date TIMESTAMP);