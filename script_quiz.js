const questions = [
    {
      question: 'Do you have red hair?',
      answers: [
        { text: 'YES', correct: true },
        { text: 'NO', correct: true }
      ]
    },
    {
        question: 'Do you ever experience deja vu again?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do you want to understant completely to be complete?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do you have the endurance to lie with nine partners a week?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do you consider attractiveness relative to your own attractiveness?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do you have a birthmark on your face?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do you want to be famous?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Are you able to look at things and see them as metaphors for other things, like trees and eagles?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Can you easily ignore your entire family and join a new group of friends? ',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
      {
        question: 'Do your checks clear?',
        answers: [
          { text: 'YES', correct: true },
          { text: 'NO', correct: true }
        ]
      },
  ]

  const startButton = document.getElementById('start-btn')
  const nextButton = document.getElementById('next-btn')
  const questionContainerElement = document.getElementById('question-container')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answer-buttons')
  
  let shuffledQuestions, currentQuestionIndex
  
  startButton.addEventListener('click', startGame)
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
  
  function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => currentQuestionIndex) // segue l'indice in ordine corretto
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Retake the quiz' // Restart
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }