/// <reference types="Cypress" />

describe('Sandbox for selectors', () => {

    it('Important', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // CHECKBOX                click() is possible but check() is more reliable for checkboxes and radio buttons
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')    // check
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')                           // uncheck
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])    // check from list checkboxes with value 'option2', 'option3'


        // RADIO BUTTON (attribute 'name' common for group of radio button, only one can be checked)
        cy.get('[value="radio3"]').check().should('be.checked')      // check


        // DROPDOWN STATIC  (tag name == select)
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')   // to 'select()' write parameter 'value' of needed point
        //cy.get('#dropdown-class-example').invoke('val', 'Select')              // clear --> I do not like it
        //cy.get('#dropdown-class-example').select([])                           // clear --> I do not like it
        //cy.get('#dropdown-class-example').select([0]).should('have.value', '') // clear --> as a not bad variant
        cy.get('#dropdown-class-example').select('').should('have.value', '')    // clear


        // DROPDOWN DINAMIC  (tag name == input)
        cy.get('#autocomplete').type('bel')                           // to 'input' enter "bel"
        cy.get('.ui-menu-item div').each(($el, index, $list) => {     // found out tags with countries and check country FOR EACH 
            if ($el.text() === 'Belarus') {                           // because in dropdown dynamic event 'id' every time different
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Belarus')

        cy.get('#autocomplete').clear().should('have.attr', 'placeholder', 'Type to Select Countries')     // clear and check placeholder


        // INVISIBLE / VISIBLE ELEMENT
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
})
