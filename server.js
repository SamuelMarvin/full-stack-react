require('dotenv').config();
const cors = require("cors");
const express = require('express');
const pg = require('pg');
const app = express();
const { Pool } = require('pg');

app.use(express.json());

app.use(cors());

const pool = new Pool ({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
      rejectUnauthorized: false
  }: false
});

app.get('/:userId/goals', (req,res)=>{
  const userId = req.params.userId;
  pool.query('SELECT * FROM goal WHERE userid=$1',[userId])
  .then((result)=> {
      res.send(result.rows)})
  .catch((err)=> console.log(err))
})

app.post('/addGoal', (req, res) => {
  const {userId, goal, goal_deadline} = req.body;
  pool.query('INSERT INTO goal(userId, goal, date_Created, goal_Deadline) VALUES($1, $2, $3, $4);',[userId, goal, now(), goal_deadline])
  .then((result)=> res.send('goal added'))
  .catch((err)=> res.send('unable to add goal'))
})

app.post('/addUser', (req, res) => {
  const {name} = req.body;
  pool.query('INSERT INTO users(name) VALUES($1);',[name])
  .then((result)=> res.send('user created'))
  .catch((err)=> res.send('unable to create user'))
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});