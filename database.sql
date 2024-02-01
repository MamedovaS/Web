CREATE TABLE `stadium` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  tickets INT UNSIGNED  NOT NULL,
  capacity INT UNSIGNED  NOT NULL,
  location VARCHAR(100) NOT NULL, 
  PRIMARY KEY (id)
);

use stadium;

DROP TABLE stadium.stadium;

SELECT * from stadium.stadium;