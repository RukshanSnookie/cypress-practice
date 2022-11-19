describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://www.google.lk')
  })

  it("Entered input exits", () =>{
    const inputText = 'Google Translate'
    cy.get('.SDkEP').click().type(`${inputText}{enter}`)
    cy.get('#result-stats').should('have.exist', 'About 3,990,000,000 results (0.36 seconds)')
  })


  it("Delete previous text and go back to home", () =>{
    cy.get('.ExCKkf').click()
    cy.get('#logo > img').click()
  })

  it("enter new text and press search button", () =>{
    const serchText = 'Area 51'
    cy.get('.gLFyf').click().type(`${serchText}`)
    cy.get('.ikrT4e').click()
    cy.get('#gb').click()
    cy.get('.FPdoLc > center > .gNO89b').click()
  })

  it("navigate to images", () =>{
    cy.get('.MUFPAc > :nth-child(2) > a').click()
    //cy.get('#REsRA').should('have.exist', 'Area 51')
  })

  
})