function generatePhrase(data) {
  // Define variables
  const targets = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }
  const tasks = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }
  const phrases = ['很簡單', '很容易', '很快', '很正常']

  // Find the target and select a random task
  const target = targets[data.job]

  let index = Math.floor(Math.random() * tasks[data.job].length)
  const task = tasks[data.job][index]

  // targets.forEach(job => {
  //   if (data[job]) {
  //     target = job
  //     const index = Math.floor(Math.random() * tasks[job].length)
  //     task = tasks[job][index]
  //   }
  // })

  // Choose a random phrase
  index = Math.floor(Math.random() * phrases.length)
  const phrase = phrases[index]

  // Return the sentence
  return `身為一個${target}，${task}，${phrase}吧！`
}

// Export function
module.exports = generatePhrase
