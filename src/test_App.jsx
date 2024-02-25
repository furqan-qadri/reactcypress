// describe('App', () => {
//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('renders the app', () => {
//         cy.contains('hello furqan').should('be.visible');
//     });

//     it('renders additional greetings', () => {
//         cy.contains('hello furqan').should('be.visible');
//         cy.contains('hello areeba').should('be.visible');
//         cy.contains('hello sumaiya').should('be.visible');
//         cy.contains('hello fayak').should('be.visible');
//     });
// });describe('App', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:5174');
//     });

//     it('renders the app', () => {
//         cy.contains('hello furqan').should('be.visible');
//     });

//     it('renders additional greetings', () => {
//         cy.contains('hello furqan').should('be.visible');
//         cy.contains('hello areeba').should('be.visible');
//     });

//     it('renders the div with id', () => {
//         cy.get('#fayak').should('exist');
//     });
// });

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174');
  });

  it('renders the app', () => {
    cy.contains('hello furqan').should('be.visible');
  });

  it('renders the div with id', () => {
    cy.get('#fayak').should('exist');
  });

  it('renders the paragraphs with data-test-id', () => {
    cy.get('[data-test-id="hello-furqan"]').should('be.visible');
    cy.get('[data-test-id="hello-for"]').should('be.visible');
    cy.get('[data-test-id^="number-"]').should('have.length', 15);
    cy.get('[data-test-id="hello-fayak"]').should('be.visible');
  });
});