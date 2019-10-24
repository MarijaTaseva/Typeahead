import { all } from 'redux-saga/effects'
import typeaheadSaga from './typeaheadSaga'

export default function* rootSaga() {
  yield all([
    typeaheadSaga(),
  ])
}