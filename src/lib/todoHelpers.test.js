import {addTodo} from '.todoHelpers'

test ('addTodo should add the passed todo to the list',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false}
    ]

    const newTodo = {id:3, name: 'three', isComplate: false},
    const expected = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const result = addTodo(startTodos,newTodo)
    
    expect(result).toEqual(expected)
})