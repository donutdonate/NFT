import {call, put, takeEvery} from 'redux-saga/effects'
import { getCollections } from '../api/getCollections'
import {fetchSuccess} from '../store/slice'
function* workGetCollectionsFetch() {
    const collections = yield call(() => getCollections())
    yield put(fetchSuccess(collections))
}

function* collectionsSaga() {
    yield takeEvery('collections/fetchCollections', workGetCollectionsFetch)
}

export default collectionsSaga;