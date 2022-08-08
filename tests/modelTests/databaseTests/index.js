//Type ``npm run test Database`` to run tests
import { Database } from '../../../model'
import mock from '../../testHelpers/mock'

import testDrop from './testDrop'
import testStoreLots from './testStoreLots'
import testStore from './testStore.js'
import testDelete from './testDelete'
import testRetrieve from './testRetrieve'
import testStoringWithCommas from './testStoringWithCommas'
import testUpdate from './testUpdate'

export { Database, mock }

export default
afterEach(() => Database.dropAll())

describe('Database', () => {
    testStore
    testDrop
    testStoringWithCommas
    testStoreLots
    testRetrieve
    testDelete
    testUpdate
})