/// <reference types="Cypress" />

describe('My first test suit', () => {

    /*  it('My first test case', () => {
         expect(true).to.equal(true)
     })
 
     it('My second test case', () => {
         expect(true).to.equal(Boolean(99999999999999))
     }) */


    it('Grocery shop', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // cy.get("input[type = 'search']").type('ca')
        // cy.wait(2000)
        cy.get('.search-keyword').type('ca')                                  // 4 products are expected
        //cy.get('.product:visible').should('have.length', 4)                 // ':visible' because we have +one invisible
        cy.get('.products').find('.product').should('have.length', 4)         // 'find' looking for in scope returned get('.products')
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() // 'eq(1)' returns child 2 (sic!) 
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const inscription = $el.find('h4.product-name').text()
            if (inscription.includes('Cashews')) {
                cy.wrap($el).find('button').click()   // without 'cy.wrap()' method 'click' is deprecated for 'find()' because 'find()' in
                // this case from JQuery
            }
        })

        // assertion that logo text is correct
        cy.get('.brand').should('have.text', 'GREENKART')


        // logging: cy.log VS console.log
        cy.log('I print to Test log in right place')

        /* const brend_logo = cy.get('.brand')      cypress does not do it because 'const brend_logo' is not promise, 
        cy.log(brend_logo.text())                   see below how to resolve it */
        cy.get('.brand').then((brend_logo) => {     // use manual handling of promises by using .then()
            cy.log(brend_logo.text())
        })

        console.log('I print to Browser console in the very beginning, cose I am not from Cypress but from JavaScript. (use .then)')
        cy.get('.products').then(() => {
            console.log('I print to Browser console in right place')

        })

        cy.log(() => { cy.get('.brand').text() })   // my trick does not work but does not break the test)))
    })
})
