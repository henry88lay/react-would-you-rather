import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA';

export function getInitialData() {
  return Promise.all(
    [_getUsers(), _getQuestions()].then(([users, questions]) => ({
      users,
      questions
    }))
  );
}

export function saveQuestions(info) {
  return _saveQuestion(info);
}

export function saveQuestionsAnswer(info) {
  return _saveQuestionAnswer(info);
}