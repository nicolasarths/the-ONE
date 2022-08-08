import testCreateRequest from "./testCreateRequest"
import testReadRequest from "./testReadRequest"

import Controller from "../../../controller";
import responses from "../../../controller/responses";
import mockCreateRequest from '../../testHelpers/mockCreateRequest'
export { Controller, responses, mockCreateRequest }

export default describe('Request Handler', () => {
    testCreateRequest
    testReadRequest
})