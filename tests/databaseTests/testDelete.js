import { Database } from "../../model"
import mock from "../testHelpers/mock"

export default it('is possible to delete data by passing its id to delete()', () => {
    Database.storeLots(mock.randomValues)
    const supposedStoredValues = mock.mockBlocksOfRandomValues()

    const fromMiddle = 3
    Database.delete(fromMiddle)
    supposedStoredValues.splice(fromMiddle-1,1)

    expect(Database.retrieve()).toEqual(supposedStoredValues)

    Database.delete(1)
    supposedStoredValues.shift()

    expect(Database.retrieve()).toEqual(supposedStoredValues)

    Database.delete(mock.randomValues.length)
    supposedStoredValues.pop()

    expect(Database.retrieve()).toEqual(supposedStoredValues)

    
})