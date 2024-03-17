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
);
CREATE TABLE yellow_cards(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

CREATE TABLE goals(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

CREATE TABLE injuries(
    id SERIAL PRIMARY KEY,
    player_id BIGINT UNSIGNED,
    game_id BIGINT UNSIGNED,
    team_id BIGINT UNSIGNED,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

-- tabla de goles y el nombre de jugador por partido
CREATE VIEW goals_player AS
SELECT players.first_name, players.last_name, goals.game_id, goals.team_id
FROM goals
JOIN players ON goals.player_id = players.id

CREATE VIEW yellow_cards_player AS
SELECT players.first_name, players.last_name, yellow_cards.game_id, yellow_cards.team_id
FROM yellow_cards
JOIN players ON yellow_cards.player_id = players.id;

CREATE VIEW red_cards_player AS
SELECT players.first_name, players.last_name, red_cards.game_id, red_cards.team_id
FROM red_cards
JOIN players ON red_cards.player_id = players.id;

CREATE VIEW injuries_player AS
SELECT players.first_name, players.last_name, injuries.game_id, injuries.team_id
FROM injuries
JOIN players ON injuries.player_id = players.id;

-- VISTAS DE SER  NECESARIAS 
CREATE VIEW goals_team AS
SELECT team_id, COUNT(*) as goals
FROM goals
GROUP BY team_id
-- 

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








-- EXAMPLE QUERIES

-- Equipo 1
INSERT INTO teams (creator_id, name, logo_url) VALUES
(9, 'Barcelona FC', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png');

-- Equipo 2
INSERT INTO teams (creator_id, name, logo_url) VALUES
(9, 'Real Madrid CF', 'https://1000logos.net/wp-content/uploads/2020/09/Real-Madrid-logo.png');


-- Jugadores del Equipo 1
INSERT INTO players (first_name, last_name, camiseta, dni, team_id, verified) VALUES
('Lionel', 'Messi', 10, '123456789A', 15, true),
('Sergio', 'Ramos', 4, '987654321B', 15, true),
('Neymar', 'Jr.', 11, '567891234C', 15, true),
('Mohamed', 'Salah', 11, '345678912D', 15, true),
('Kevin', 'De Bruyne', 17, '789123456E', 15, true),
('Robert', 'Lewandowski', 9, '234567891F', 15, true),
('Virgil', 'van Dijk', 4, '891234567G', 15, true),
('Kylian', 'Mbappé', 7, '456789123H', 15, true);

-- Jugadores del Equipo 2
INSERT INTO players (first_name, last_name, camiseta, dni, team_id, verified) VALUES
('Cristiano', 'Ronaldo', 7, '912345678I', 14, true),
('Luis', 'Suárez', 9, '345678912J', 14, true),
('Gareth', 'Bale', 11, '678912345K', 14, true),
('Eden', 'Hazard', 10, '891234567L', 14, true),
('Antoine', 'Griezmann', 7, '234567891M', 14, true),
('Sadio', 'Mané', 10, '456789123N', 14, true),
('Harry', 'Kane', 10, '789123456O', 14, true),
('Sergio', 'Agüero', 10, '123456789P', 14, true);









-- VISTA UTIL PARA STATS POR JUGADORES GENERALES:
CREATE VIEW team_player_stats AS
SELECT
    p.id AS player_id,
    CONCAT(p.first_name, ' ', p.last_name) AS player_name,
    COALESCE(goals.goals_count, 0) AS goals,
    COALESCE(red_cards.red_cards_count, 0) AS red_cards,
    COALESCE(yellow_cards.yellow_cards_count, 0) AS yellow_cards,
    COALESCE(injuries.injuries_count, 0) AS injuries,
FROM players p
LEFT JOIN (
    SELECT player_id, COUNT(*) AS goals_count
    FROM goals
    GROUP BY player_id
) AS goals ON p.id = goals.player_id
LEFT JOIN (
    SELECT player_id, COUNT(*) AS red_cards_count
    FROM red_cards
    GROUP BY player_id
) AS red_cards ON p.id = red_cards.player_id
LEFT JOIN (
    SELECT player_id, COUNT(*) AS yellow_cards_count
    FROM yellow_cards
    GROUP BY player_id
) AS yellow_cards ON p.id = yellow_cards.player_id
LEFT JOIN (
    SELECT player_id, COUNT(*) AS injuries_count
    FROM injuries
    GROUP BY player_id
) AS injuries ON p.id = injuries.player_id;



-- VISTA PARA OBTENER LAS STATS DE CADA JUGADOR
-- EN UN JUEGO EN ESPECIFICO

DROP VIEW game_team_player_stats IF EXISTS;
CREATE VIEW game_team_player_stats AS
SELECT
    g.id AS game_id,
    t.id AS team_id,
    p.id AS player_id,
    CONCAT(p.first_name, ' ', p.last_name) AS player_name,
    COALESCE(goals.goals_count, 0) AS goals,
    COALESCE(red_cards.red_cards_count, 0) AS red_cards,
    COALESCE(yellow_cards.yellow_cards_count, 0) AS yellow_cards,
    COALESCE(injuries.injuries_count, 0) AS injuries
FROM games g
INNER JOIN teams t ON g.home_team_id = t.id OR g.away_team_id = t.id
INNER JOIN players p ON t.id = p.team_id
LEFT JOIN (
    SELECT player_id, game_id, COUNT(*) AS goals_count
    FROM goals
    GROUP BY player_id, game_id
) AS goals ON p.id = goals.player_id AND g.id = goals.game_id
LEFT JOIN (
    SELECT player_id, game_id, COUNT(*) AS red_cards_count
    FROM red_cards
    GROUP BY player_id, game_id
) AS red_cards ON p.id = red_cards.player_id AND g.id = red_cards.game_id
LEFT JOIN (
    SELECT player_id, game_id, COUNT(*) AS yellow_cards_count
    FROM yellow_cards
    GROUP BY player_id, game_id
) AS yellow_cards ON p.id = yellow_cards.player_id AND g.id = yellow_cards.game_id
LEFT JOIN (
    SELECT player_id, game_id, COUNT(*) AS injuries_count
    FROM injuries
    GROUP BY player_id, game_id
) AS injuries ON p.id = injuries.player_id AND g.id = injuries.game_id;







-- VISTA PARA OBTENER LAS STATS POR EQUIPO EN UN JUEGO EN ESPECIFICO
DROP VIEW game_team_stats;
CREATE VIEW game_team_stats AS
SELECT
    g.id AS game_id,
    g.date,
    g.time,
    g.location,
    g.tournament_id,
    g.home_team_id AS team_id,
    t.name AS team_name,
    t_count.teams_count AS teams_count,
    t.logo_url AS team_logo,
    COALESCE(home_goals.goals_count, 0) AS goals,
    COALESCE(home_red_cards.red_cards_count, 0) AS red_cards,
    COALESCE(home_yellow_cards.yellow_cards_count, 0) AS yellow_cards,
    COALESCE(home_injuries.injuries_count, 0) AS injuries
FROM games g
INNER JOIN teams t ON g.home_team_id = t.id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS goals_count
    FROM goals
    GROUP BY team_id
) AS home_goals ON g.home_team_id = home_goals.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS red_cards_count
    FROM red_cards
    GROUP BY team_id
) AS home_red_cards ON g.home_team_id = home_red_cards.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS yellow_cards_count
    FROM yellow_cards
    GROUP BY team_id
) AS home_yellow_cards ON g.home_team_id = home_yellow_cards.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS injuries_count
    FROM injuries
    GROUP BY team_id
) AS home_injuries ON g.home_team_id = home_injuries.team_id
INNER JOIN (
    SELECT teams_count,id
    FROM tournament
) AS t_count ON t_count.id = g.tournament_id

UNION ALL

SELECT
    g.id AS game_id,
    g.date,
    g.time,
    g.location,
    g.tournament_id,
    g.away_team_id AS team_id,
    t.name AS team_name,
    t_count.teams_count AS teams_count,
    t.logo_url AS team_logo,
    COALESCE(away_goals.goals_count, 0) AS goals,
    COALESCE(away_red_cards.red_cards_count, 0) AS red_cards,
    COALESCE(away_yellow_cards.yellow_cards_count, 0) AS yellow_cards,
    COALESCE(away_injuries.injuries_count, 0) AS injuries
FROM games g
INNER JOIN teams t ON g.away_team_id = t.id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS goals_count
    FROM goals
    GROUP BY team_id
) AS away_goals ON g.away_team_id = away_goals.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS red_cards_count
    FROM red_cards
    GROUP BY team_id
) AS away_red_cards ON g.away_team_id = away_red_cards.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS yellow_cards_count
    FROM yellow_cards
    GROUP BY team_id
) AS away_yellow_cards ON g.away_team_id = away_yellow_cards.team_id
LEFT JOIN (
    SELECT team_id, COUNT(*) AS injuries_count
    FROM injuries
    GROUP BY team_id
) AS away_injuries ON g.away_team_id = away_injuries.team_id
INNER JOIN (
    SELECT teams_count,id
    FROM tournament
) AS t_count ON t_count.id = g.tournament_id;


SELECT * FROM game_team_stats \G;
---------------------------------- RESULTADO ----------------------------------
+---------+------------+----------+---------------------------+---------------+---------+----------------------+-------------+---------------------------------------------------------------------------------------------------------------------------+-------+-----------+--------------+----------+
| game_id | date       | time     | location                  | tournament_id | team_id | team_name            | teams_count | team_logo                                                                                                                 | goals | red_cards | yellow_cards | injuries |
+---------+------------+----------+---------------------------+---------------+---------+----------------------+-------------+---------------------------------------------------------------------------------------------------------------------------+-------+-----------+--------------+----------+
|       1 | 2024-03-07 | 20:00:00 | Estadio Santiago Bernabéu |            54 |      15 | Barcelona FC         |           8 | https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png |     2 |         4 |            6 |        4 |
|       2 | 2024-03-11 | 16:30:00 | Allianz Stadium           |            54 |      44 | Bayern Munchen       |           8 | https://res.cloudinary.com/dy7ncwtov/image/upload/v1709273067/sports-db/rhjsdbqzapd06ivrx2rq.png                          |     3 |         2 |            4 |        2 |
|       3 | 2024-03-12 | 14:00:00 | Etihad Stadium            |            54 |      46 | Manchester City      |           8 | https://res.cloudinary.com/dy7ncwtov/image/upload/v1709273203/sports-db/vkk4pczmzv6c6loswdja.png                          |     9 |         9 |           16 |        7 |
|       1 | 2024-03-07 | 20:00:00 | Estadio Santiago Bernabéu |            54 |      14 | Real Madrid CF       |           8 | https://1000logos.net/wp-content/uploads/2020/09/Real-Madrid-logo.png                                                     |     2 |         4 |            6 |        4 |
|       2 | 2024-03-11 | 16:30:00 | Allianz Stadium           |            54 |      45 | Juventus             |           8 | https://res.cloudinary.com/dy7ncwtov/image/upload/v1709273151/sports-db/fkimydfj3d8msntuqqq0.png                          |     2 |         2 |            4 |        2 |
|       3 | 2024-03-12 | 14:00:00 | Etihad Stadium            |            54 |      47 | Liverpool Inglaterra |           8 | https://res.cloudinary.com/dy7ncwtov/image/upload/v1709273278/sports-db/vnjiyldsy31wtut2qcky.png                          |     8 |         9 |           16 |        7 |
+---------+------------+----------+---------------------------+---------------+---------+----------------------+-------------+---------------------------------------------------------------------------------------------------------------------------+-------+-----------+--------------+----------+ 



-- =====================================================================
-- VISTA PARA OBTENER LA INFORMACIÓN DE LOS EQUIPOS QUE PARTICIPAN 
-- EN UN TORNEO EN UN JUEGO EN ESPECIFICO

DROP VIEW tournament_games_teams;
CREATE VIEW tournament_games_teams AS
SELECT
    g.id AS game_id,
    g.tournament_id,
    g.home_team_id AS home_team_id,
    g.away_team_id AS away_team_id,
    hte.name AS home_team_name,
    ate.name AS away_team_name,
    hte.logo_url AS home_team_logo,
    ate.logo_url AS away_team_logo,
    t.name AS tournament_name,
    t.logo AS tournament_logo
FROM games g
INNER JOIN teams hte ON g.home_team_id = hte.id
INNER JOIN teams ate ON g.away_team_id = ate.id
INNER JOIN tournament t ON g.tournament_id = t.id;

SELECT * FROM tournament_games_teams;



-- =====================================================================
-- VISTA PARA OBTENER LA INFORMACIÓN DE LOS JUEGOS DE UN TORNEO CON INFORMACIÓN DE LOS EQUIPOS Y EL TORNEO

DROP VIEW tournament_games_info;
CREATE VIEW tournament_games_info AS
SELECT
    g.id AS game_id,
    g.date,
    g.time,
    g.location,
    g.tournament_id,
    t.name AS tournament_name,
    t.logo_url AS tournament_logo,
    teams.id AS home_team_id,
    teams.name AS home_team_name,
    teams.logo_url AS home_team_logo,

    