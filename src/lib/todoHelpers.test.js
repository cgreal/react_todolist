import {addTodo, findById, toggleTodo, updateTodo, removeTodo} from './todoHelpers'

test ('addTodo should add the passed todo to the list',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false}
    ]

    const newTodo = {id:3, name: 'three', isComplate: false}
    const expected = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const result = addTodo(startTodos,newTodo)
    
    expect(result).toEqual(expected)
})
test ('addTodo should not mutate the existing todo array',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false}
    ]

    const newTodo = {id:3, name: 'three', isComplate: false}
    const expected = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const result = addTodo(startTodos,newTodo)
    
    expect(result).not.toBe(startTodos)
})

test ('findById should return the expected item from an array',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const expected = {id:2, name: 'two', isComplate: false}
    const result = findById(2,startTodos)
    expect(result).toEqual(expected)
})
test ('toggleTodo should toggle the isComplete prop of a todo',() => {
    const startTodo = {id:2, name:'two', isComplate:false}
    const expected = {id:2, name: 'two', isComplate: true}
    const result = toggleTodo(startTodo)
    expect(result).toEqual(expected)
})
test ('toggleTodo should not mutate the original todo',() => {
    const startTodo = {id:2,name:'two',isComplate:false}
    const result = toggleTodo(startTodo)
    expect(result).not.toBe(startTodo)
})
test ('updateTodo should update an item by id',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const updatedTodo = {id:2, name: 'two', isComplate: true}
    const expectedTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: true},
        {id:3, name: 'three', isComplate: false}
    ]
    const result = updateTodo(startTodos,updatedTodo)
    expect(result).toEqual(expectedTodos)
})
test ('updateTodo should not mutate the original array',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const updatedTodo = {id:2, name: 'two', isComplate: true}
    const result = updateTodo(startTodos,updatedTodo)
    expect(result).not.toBe(startTodos)
})
test ('removeTodo should remove an item by id',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const targetId = 2
    const expectedTodos = [
        {id:1,name:'one',isComplate:false},
        {id:3,name:'three',isComplate:false}
    ]
    const result = removeTodo(startTodos,targetId)
    expect(result).toEqual(expectedTodos)
})
test ('removeTodo should not mutate the original array',() => {
    const startTodos = [
        {id:1, name: 'one', isComplate: false},
        {id:2, name: 'two', isComplate: false},
        {id:3, name: 'three', isComplate: false}
    ]

    const targetId = 2
    const result = removeTodo(startTodos,targetId)
    expect(result).not.toBe(startTodos)
})