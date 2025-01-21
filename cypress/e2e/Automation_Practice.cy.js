describe('Automation Practice Tests', () =>{
    it('Navigate to the web page', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Login to website', () => {
        cy.get('.fa.fa-lock').click()
        cy.get('[data-qa="signup-name"]').click().type('Rukshan')
        cy.get('[data-qa="signup-email"]').click().type('divibap269@aleitar.com')
        cy.get('[data-qa="signup-button"]').click()
    })

    it('Update registered user profile', () => {
        cy.contains('.title.text-center > b', 'Enter Account Information')
        // cy.get('.title.text-center > b').should('have.text', 'Enter Account Information')
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').click().type('password')
    })
})



//divibap269@aleitar.com
//password