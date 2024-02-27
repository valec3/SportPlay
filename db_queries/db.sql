CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    dni VARCHAR(10) NOT NULL UNIQUE, 
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

CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    camiseta INT,
    dni VARCHAR(10) NOT NULL UNIQUE,
    team_id BIGINT UNSIGNED,
    verified BOOLEAN DEFAULT 0,
    FOREIGN KEY (team_id) REFERENCES teams(id)
)

-- PENDING QUERIES FOR THE DATABASE

CREATE TABLE tournament_teams(
    id SERIAL PRIMARY KEY,
    team_id BIGINT UNSIGNED,
    tournament_id INT,
    position INT,
    FOREIGN KEY (team_id) REFERENCES teams(id),
    FOREIGN KEY (tournament_id) REFERENCES tournament(id)
);


CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    date DATE,
    time TIME,
    home_team_id BIGINT UNSIGNED,
    away_team_id BIGINT UNSIGNED,
    location VARCHAR(100),
    score_home INT,
    score_away INT,
    FOREIGN KEY (home_team_id) REFERENCES teams(id),
    FOREIGN KEY (away_team_id) REFERENCES teams(id)
);

CREATE TABLE red_cards(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
)
CREATE TABLE yellow_cards(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
)

CREATE TABLE goals(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
)

CREATE TABLE injuries(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
)

CREATE VIEW goals_team AS
SELECT team_id, COUNT(*) as goals
FROM goals
GROUP BY team_id


CREATE TABLE notifications(
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    message VARCHAR(200),
    FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE team_requests(
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    team_id INT,
    status enum('pending', 'accepted', 'rejected') DEFAULT 'pending'
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (team_id) REFERENCES teams(id)
)

CREATE TABLE tournament_requests(
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    tournament_id INT,
    status enum('pending', 'accepted', 'rejected') DEFAULT 'pending'
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id)
)