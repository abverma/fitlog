const mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
  date: Number,
  exercise: String,
  sets: Number,
  reps: Number,
  maxWeight: Number,
  maxWeightReps: Number,
  caloriesConsumed: Number,
  volume: Number,
  comments: String
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = {
  Workout
}
