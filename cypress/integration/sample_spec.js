/// <reference types="cypress"/>

describe('first test', function(){
    it('adds an item to todos', function(){
        cy.visit('http://localhost:8888/')
        cy.get('.new-todo').type('random todo {enter}')
        cy.get('.todo-list li').should('have.length', 1)
    })
})

describe('adding, finishing and clearing todos', function(){
    it('adds 6 items and finishes two of them', function(){
        cy.visit('http://localhost:8888/')
        cy.get('.new-todo').type('1 todo {enter}')
        cy.get('.new-todo').type('2 todo {enter}')
        cy.get('.new-todo').type('3 todo {enter}')
        cy.get('.new-todo').type('4 todo {enter}')
        cy.get('.new-todo').type('5 todo {enter}')
        cy.get('.new-todo').type('6 todo {enter}')
        cy.get('.todo-list li').should('have.length', 6)

        cy.get('.todo-list li').eq(0).find('.toggle').check()
        cy.get('.todo-list li').eq(5).find('.toggle').check()

        cy.get('.clear-completed').should('be.visible')
        cy.get('.clear-completed').click()
        cy.get('.clear-completed').should('not.be.visible')
        cy.get('.todo-list li').should('have.length', 4)
    })
})