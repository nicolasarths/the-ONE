import { Block } from "../../model"

function block (id,item){
    return {
        id,
        item
    }
}

const randomValues = [
    new Block(),
    1,
    1.02,
    [1, 1.9],
    'a1@$1.0+_||%%z\'\\\\',
    function (a, b) {
        return
    },
    ['a', 'b', 'c'],
    'str',
    { a: 1, b: 2, c:3 }
]

function mockBlocksOfRandomValues() {
    const mock = []
    randomValues.forEach((value, i) => mock.push(block(i+1, value)))
    return mock
}

export default {
    block,
    randomValues,
    mockBlocksOfRandomValues
}