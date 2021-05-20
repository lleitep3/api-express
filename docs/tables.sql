
CREATE DATABASE IF NOT EXISTS todo_api CHARSET utf8mb4;

USE todo_api;

CREATE TABLE IF NOT EXISTS todos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(300) default ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='todos';

INSERT INTO todos (text) VALUES ('Primeira tarefa');
INSERT INTO todos (text) VALUES ('Segunda tarefa');
INSERT INTO todos (text) VALUES ('Terceira tarefa');
INSERT INTO todos (text) VALUES ('Quarta tarefa');

SELECT * FROM todos;