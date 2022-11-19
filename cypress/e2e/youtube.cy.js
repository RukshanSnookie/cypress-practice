describe('youtube', () => {
  
  it('youtube landing page', () => {
    cy.visit('https://www.youtube.com')
  })

  it('Change language to English', () =>{
    cy.get('.yt-simple-endpoint > .style-default > #button > .ytd-topbar-menu-button-renderer').click()
    cy.get(':nth-child(2) > #items > :nth-child(2) > #endpoint > tp-yt-paper-item.style-scope').click()
    cy.contains('English (UK)').click()
  })

  it('Youtube Left Navigation menu', () =>{
    cy.get('[aria-selected="true"] > #endpoint > .title').should('have.text','Home')
    cy.get('[aria-label="Explore"] > #endpoint > .title').should('have.text','Explore')
    cy.get('[aria-label="Shorts"] > #endpoint > .title').should('have.text','Shorts')
    cy.get('[aria-label="Subscriptions"] > #endpoint > .title').should('have.text','Subscriptions')
    cy.get('[aria-label="Library"] > #endpoint > .title').should('have.text','Library')
    cy.get('[aria-label="History"] > #endpoint > .title').should('have.text','History')
  })

  it('search text',() =>{
    const textInput = 'Cypress Tutorial'
    cy.get('#search-input > #search').click().type(`${textInput}{enter}`)
  })

  it('Filter tetsted', () =>{
    cy.get('.ytd-search-sub-menu-renderer.style-text > .yt-simple-endpoint > #button').click()
    cy.contains('Over 20 minutes').parent().click()
  })


})