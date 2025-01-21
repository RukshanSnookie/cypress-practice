describe('Automation Practice Tests', () =>{
    it('Navigate to the web page', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Login to website', () => {
        cy.get('.fa.fa-lock').click()
        cy.get('[data-qa="signup-name"]').click().type('Rukshan')
        cy.get('[data-qa="signup-email"]').click().type('divibap269@aleitar.com')
    })
})



//divibap269@aleitar.com
//password