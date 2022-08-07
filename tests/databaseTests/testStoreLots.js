import { Database } from "../../model"
import mock from "../testHelpers/mock"

export default it('is possible to add multiple data at once using commas', () => {
    Database.storeLots(mock.randomValues)
    expect(Database.retrieve()).toEqual(mock.mockBlocksOfRandomValues())
})