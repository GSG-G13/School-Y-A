BEGIN;

DROP TABLE IF EXISTS student,teacher cascade;

CREATE TABLE student (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  birthdate TEXT NOT NULL ,
  subject  VARCHAR(20) NOT NULL
);
CREATE TABLE teacher (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  address VARCHAR(20) NOT NULL,
  subject VARCHAR(20) NOT NULL  UNIQUE
);





COMMIT;