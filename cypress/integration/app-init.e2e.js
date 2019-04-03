describe('App initialization', () => {
    it('shou;d load page with correct header text', () => {
        cy.visit('/');

        cy.get('h1').should(($header) => {
            expect($header.text()).to.eq('netflixroulette');
        });
    });

    it('should display results after click on submit button', () => {
        cy.visit('/');

        cy.get('.results-item').should('have.length', 0);
        cy.get('.search-panel__button--submit').click();
        cy.get('.results-item').should('have.length', 10);
    });
});
