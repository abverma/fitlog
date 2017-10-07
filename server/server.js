const express = require('express');
const path = require('path');

const {mongoose} = require('./db/mongodb');
const {Workout} = require('./models/Workout');

const publicFolder = path.join(__dirname, '../public');
var app = express();
app.use(express.static(publicFolder));

var port = process.env.PORT || 3000;

// app.get('/', (request, response) => {
//   response.send('Pehle seedhe khade ho');
// })

// app.get('/workouts', (req, res) => {
//   Workout.find()
//     .then((workouts) => {
//       res.send(workouts);
//     },
//     (err) => {
//       console.log(err);
//       res.send(400).send('Could not find workouts');
//     })
// })
// app.post('/workouts', (req, res) => {
//   var workout = new Workout({
//     date: new Date().getTime(),
//     exercise: 'Barbell Row',
//     sets: 5,
//     reps: 5
//   });
//
//   workout.save()
//     .then((workout) => {
//       console.log(workout);
//       console.log('Workout saved!');
//       res.send(workout);
//     },
//     (err) => {
//       console.log(err)
//       res.send(400).send("Could not save workout");
//     })
// });

app.listen(port, (request, response) => {
  console.log(`Server listening at port ${port}...`);
});
