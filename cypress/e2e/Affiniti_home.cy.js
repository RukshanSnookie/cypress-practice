describe("Affiniti Home", () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    
    it("Landing Page", () => {
        cy.visit('http://178.128.19.250:8181/AFFINITI_CDB_360_WEB-V1.1.35_HOTFIX/home')
    })
    
    it("Login to system", () =>{
        const userName = 'admin'
        const pwrd = 'a'
        cy.request('POST','http://178.128.19.250:8181/AFFINITI_CDB_360_WEB-V1.1.35_HOTFIX/login',{userid : 'rukshan', password : 'a' })
        cy.get('[type="text"]').click().type(`${userName}`)
        cy.get('.login-input.m-t-20').click().type(`${pwrd}`)
        cy.get('.btn-primary').click()
        cy.wait(5000)
        
    })

    /*it("Filter data in date range", () =>{
        cy.get('#dateRange').click()
        for(let a=0 ; a < 20 ; a++){
            cy.get('.calendar-table > .table-condensed > thead > :nth-child(1) > .prev > span')
        .click()
        }
        cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c4"]')
        .click()
        for(let a=0 ; a < 20 ; a++){
            cy.get('.calendar-table > .table-condensed > thead > :nth-child(1) > .next > span')
            .click()
        }
        cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(5) > [data-title="r4c3"]')
        .click()
    })*/
})

//{userid :  'admin',password : 'a'}