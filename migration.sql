DROP TABLE IF EXISTS goal;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE goal(
    goalId SERIAL,
    userId INTEGER, 
    FOREIGN KEY(USERID) REFERENCES users(id),
    goal TEXT NOT NULL,
    date_Created DATE,
    goal_Deadline DATE NOT NULL
);

INSERT INTO users(name) VALUES('Samuel Marvin');
INSERT INTO users(name) VALUES('Katy Bradford');

INSERT INTO goal(userid, goal, date_Created, goal_Deadline) VALUES(1, 'get a job', NOW(), '2022-06-01');
INSERT INTO goal(userid, goal, date_Created, goal_Deadline) VALUES(1, 'practice leetCode problems 5 days a week', NOW(), '2022-06-01');
INSERT INTO goal(userid, goal, date_Created, goal_Deadline) VALUES(2, 'graduate', NOW(), '2022-05-28');
INSERT INTO goal(userid, goal, date_Created, goal_Deadline) VALUES(2, 'get a puppy', NOW(), '2022-07-01');
INSERT INTO goal(userid, goal, date_Created, goal_Deadline) VALUES(2, 'buy a new car', NOW(), '2022-10-01');