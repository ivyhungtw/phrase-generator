function generatePhrase(data) {
  // Define variables
  const jobList = require('./jobs.json').results
  const job = jobList.find(el => el.job === data.job)
  console.log(job)
  const phrases = ['很簡單', '很容易', '很快', '很正常']

  // Find the target
  const target = job.title
  // select a random task and phrase
  let index = Math.floor(Math.random() * job.tasks.length)
  const task = job.tasks[index]

  index = Math.floor(Math.random() * phrases.length)
  const phrase = phrases[index]

  // Return the sentence
  return `身為一個${target}，${task}，${phrase}吧！`
}

// Export function
module.exports = generatePhrase
