--Crear base de datos
CREATE DATABASE IF NOT EXISTS UPEA;
USE UPEA;
-- Crear tabla
CREATE TABLE ttr_edf1 (
  id_edf1 INT PRIMARY KEY AUTO_INCREMENT,
  datos_edf1 VARCHAR(1000),
  fecha_edf1 TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*para node-red
msg.topic = `
  INSERT INTO ttr_edf1 (datos_edf1) VALUES ('${msg.payload}');
  DELETE FROM ttr_edf1 WHERE fecha_edf1 < NOW() - INTERVAL 1 HOUR;
`;
msg.payload = '';
return msg;

*/