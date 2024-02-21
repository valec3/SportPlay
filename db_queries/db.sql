CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    dni VARCHAR(10) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);


CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    creator_id INT, 
    name VARCHAR(100) ,
    logo_url VARCHAR(100),
    FOREIGN KEY (creator_id) REFERENCES users(id)
)

CREATE TABLE player_team(
    id PRIMARY KEY,
    camiseta INT,
    team_id INT,
    FOREIGN KEY (team_id) REFERENCES teams(id)
)

