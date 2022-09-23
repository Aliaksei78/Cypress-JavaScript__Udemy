/// <reference types="Cypress" />

describe('Grocery shop', () => {

    it('End-2-End something real', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length', 4)         // 4 products are expected
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const inscription = $el.find('h4.product-name').text()
            if (inscription.includes('Cashews')) {
                cy.wrap($el).find('button').click()   // without 'cy.wrap()' method 'click' is deprecated for 'find()'
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()   // get(button) is not obligatory
        cy.contains('Place Order').click()           // get(button) is not obligatory
    })
})
