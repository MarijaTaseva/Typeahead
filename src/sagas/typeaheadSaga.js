import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
import { WATCH_TYPEAHEAD } from '../actions/types'
import { setTypeaheadResults } from '../actions/typeaheadAction'

export function* workerSaga({query}) {
  try { 
    const url = `https://places.cteleport.com/countries?q=${query}`
    const data = yield axios.get(url);
      return yield put(setTypeaheadResults(data.data))
  } 
  catch (error) {
    console.log(error)
  }
}

export default function* watchTypeToListenFor() {
    yield takeLatest(WATCH_TYPEAHEAD, workerSaga)
}
  
