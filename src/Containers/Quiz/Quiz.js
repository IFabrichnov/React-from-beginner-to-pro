import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, // {id}: 'success' or 'error'
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо',
        rightAnswerId: 2,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург',
        rightAnswerId: 3,
        answers: [
          {text: '1700', id: 1},
          {text: '1705', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4}
        ]
      }
    ]
  }

  //функция которая будет выбирать правельный вариант ответа
  //и переключать на следующий вопрос
  onAnswerClickHandler = (answerId) => {

    //получим доступ к объекту вопроса
    const question = this.state.quiz[this.state.activeQuestion];
    //Если отвечаем верно, то делаем таймайт
    // и выделяем правильный ответ перед переключением
    if (question.rightAnswerId === answerId) {
      //меняем цвет при клике на ответ (зеленый)
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null //после правильного ответа обнуляем выбор
          })
        }
        window.clearTimeout(timeout)
      }, 1000);
    } else {
      //меняем цвет при клике на ответ (красный)
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            onAnswerClick={this.onAnswerClickHandler}
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}


export default Quiz