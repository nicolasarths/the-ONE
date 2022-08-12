import testCreateRequest from "./testCreateRequest"
import testReadRequest from "./testReadRequest"

import RequestHandler from "../../../controller/RequestHandler";
import { Block } from '../../../model';
import responses from "../../../controller/responses";
import { createRequest, JSONcreateRequest, readRequest } from '../../testHelpers/mockRequests'
export { RequestHandler, responses, createRequest, readRequest, Block, JSONcreateRequest }

export default describe('Request Handler', () => {
    testCreateRequest
    testReadRequest
})