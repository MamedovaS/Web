CREATE TABLE `stadium` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  tickets INT UNSIGNED  NOT NULL,
  capacity INT UNSIGNED  NOT NULL,
  location VARCHAR(100) NOT NULL, 
  PRIMARY KEY (id)
);

use stadium;

INSERT INTO stadium (name, tickets, capacity, location)
VALUES
  ('Stadium A', 1000, 50000, 'City1'),
  ('Stadium B', 1500, 75000, 'City2'),
  ('Stadium C', 1200, 60000, 'City3'),
  ('Stadium D', 800, 40000, 'City4');

SELECT * from stadium.stadium;