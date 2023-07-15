const User = require('../../models/user');
const Habit = require('../../models/habit');
const chartData = require('../../models/chartdata')
const mongoose = require('mongoose');


module.exports = {
  addHabit,
  index,
  completeHabit,
  getChartData,
  deleteHabit,
  addChartData,
  getAreaChartData
}

async function getAreaChartData(req, res) {
  try {
    const user = await User.findById(req.user._id)
    console.log(user.chart_data)
    await res.json(user.chart_data)
  } catch (err) {
    console.log(err)
  }
}

async function addChartData(req, res) {
  try {
    const user = await User.findById(req.user._id)
    console.log(user.chart_data)
    console.log(req.body.habit.dates_completed)
    if (!user.chart_data.find(data => data.date === req.body.habit.dates_completed)) {
      console.log('if')
      const newData = new chartData({
        date: req.body.habit.dates_completed,
        habits_completed: 1
      })
      user.chart_data.push(newData)
      console.log(user.chart_data)
    } else {
      if(req.body.habit.completed_today) {
        const dataToUpdate = user.chart_data.findIndex(data => data.date === req.body.habit.dates_completed)
        console.log('plus')
        user.chart_data[dataToUpdate].habits_completed += 1
        console.log(user.chart_data[dataToUpdate].habits_completed)
      } else if(!req.body.habit.completed_today) {
        console.log('minus')
        const dataToUpdate = user.chart_data.findIndex(data => data.date === req.body.habit.dates_completed)
        user.chart_data[dataToUpdate].habits_completed -= 1
        console.log(user.chart_data[dataToUpdate].habits_completed)
      }
    }
    await user.save()
    res.json('Chart Data Updated')
  } catch (err) {
    console.log(err)
  }
}

async function deleteHabit(req, res) {
  const user = await User.findById(req.user._id)
  const habitId = req.body.habitId
  const habitToDelete = user.habit.find(habit => habit._id.equals(habitId))
  const index = user.habit.indexOf(habitToDelete)
  user.habit.splice(index, 1)
  await user.save();
  res.json()
}

async function getChartData(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const habits = await user.habit
    res.json(habits)
  } catch(err) {
    console.log(err)
  }
}


//TODO: ADD ERROR HANDLING FOR MULTIPLE DATES BEING ADDED WHEN SPAMMED
async function completeHabit(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const habits = await user.habit
    const objId = mongoose.Types.ObjectId(req.body.habit._id)
    const habit = await habits.find(habit => habit._id.equals(objId))
    // console.log('REQ.BODY:', req.body.habit.dates_completed)
    habit.completed_today = req.body.habit.completed_today



    if (await req.body.habit.completed_today === true) {
      await habit.dates_completed.push(req.body.habit.dates_completed)
      habit.multiplier = habit.multiplier + (habit.multiplier * 0.01)
      habit.amount_completed += 1
      await habit.multiplier_day_by_day.push(habit.multiplier);


    } else {
      await habit.dates_completed.pop(req.body.habit.dates_completed)
      habit.multiplier = habit.previous_multiplier
      habit.amount_completed = habit.previous_amount
      await habit.multiplier_day_by_day.pop()
    }

    // console.log('HABIT', habit)
    await user.save()
    await res.json(habit);
  } catch (err) {
    console.log(err);
  }
}

async function addHabit(req, res) {
  try {
    const userId = req.user._id;
    console.log(userId)
    const user = await User.findById(userId)
    const newHabit = await new Habit(req.body)
    await newHabit.save()
    user.habit.push(newHabit)
    await user.save()
    console.log(newHabit);
    res.end()
  } catch(err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const tDay = new Date().toLocaleString('en-GB').split(',')[0];
    console.log(tDay)
    const user = await User.findById(req.user._id);
    const allHabits = await user.habit
    await allHabits.forEach((habit) => {

      if (!habit.dates_completed.includes(tDay)) {
        habit.previous_multiplier = habit.multiplier
        habit.previous_amount = habit.amount_completed
        habit.completed_today = false
        console.log('WHYYYYYY')
      } else {
        habit.completed_today = true
      }
      console.log('FOREACH', habit.habit, habit.dates_completed)
      console.log('HERE', habit.habit, habit.completed_today)
    })
    await user.save();
    await res.json(allHabits)
    // console.log('ALL HABITS', allHabits);
    
    console.log('tDay', tDay)

  } catch (err) {
    console.log(err);
  }
} 