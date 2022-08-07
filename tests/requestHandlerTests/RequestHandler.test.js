import testCreateRequest from "./testCreateRequest"
import testReadRequest from "./testReadRequest"

describe('Request Handler', () => {
    it('returns a success response to creation requests', testCreateRequest)
    it('returns view to a load dashboard request', testReadRequest)
})