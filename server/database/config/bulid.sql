BEGIN;

DROP TABLE IF EXISTS student,teacher cascade;

CREATE TABLE student (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL,
  birthdate VARCHAR(20) NOT NULL,
  subject VARCHAR(20) NOT NULL
);
CREATE TABLE teacher (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL,
  address VARCHAR(10)NOT NULL,
  subject VARCHAR(20) NOT NULL
);

INSERT INTO student (name, birthdate,subject) VALUES
  ('Ali', "",'math'),
  ('Mo', 'Canada'),
  ('John', 'USA');


COMMIT;