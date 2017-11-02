drop database fish;
create database fish;

use fish;

create table fishes (
  id integer auto_increment,
  name text,
  age integer,
  description text,
  image text,
  primary key (id)
);


/*
http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm
create database fish;
use fish;
show tables;
*/
