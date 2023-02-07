/// <reference types="Cypress" />

describe('Lamp.cy.js', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should have 2 power control buttons', () => {
        cy.get('.lamp-power__button').should('have.length', 2);
    });
    describe('Increase power', () => {
        it('Should increase the % when the button is pressed and response is ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__power-display').should('have.text', '100%');
        });

        it('Should increase the progress bar value when the button is pressed and response is ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 5);
        });

        it('Should send the correct data to the server when the power up button is pressed', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck').then((interception) => {
                assert.deepEqual(interception.request.body, { type: 'increasePower', value: 100 });
            });
        });

        it('Should not increase the % when the button is pressed and response is not ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerInvalidResponse.json'
            });
            cy.get('.lamp-power__button').first().click();
            cy.get('.lamp-power__power-display').should('have.text', '30%');
        });

        it('Should not increase the progress bar value when the button is pressed and response is not ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerInvalidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 4);
        });

        it('Should change button background color to rgb(178, 31, 31) if the power up button has been pressed and the response is invalid', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerInvalidResponse.json'
            });
            cy.get('.lamp-power__button')
                .first()
                .click()
                .should('have.css', 'background-color', 'rgb(178, 31, 31)');
        });

        it("Should change button background color to rgb(178, 31, 31) if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__button')
                .first()
                .should('have.css', 'background-color', 'rgb(178, 31, 31)');
        });

        it("Should not increase the % when the button is pressed and if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__power-display').should('have.text', '30%');
        });

        it("Should not increase the progress bar value when the button is pressed and if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'increasePowerValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.lamp-power__button').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 4);
        });
    });

    describe('Decrease power', () => {
        it('Should decrease the % when the button is pressed and response is ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__power-display').should('have.text', '10%');
        });

        it('Should decrease the progress bar value when the button is pressed and response is ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 3);
        });

        it('Should send the correct data to the server when the power down button is pressed', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck').then((interception) => {
                assert.deepEqual(interception.request.body, { type: 'decreasePower', value: 10 });
            });
        });

        it('Should not decrease the % when the button is pressed and response is not ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerInvalidResponse.json'
            });
            cy.get('.lamp-power__button').last().click();
            cy.get('.lamp-power__power-display').should('have.text', '30%');
        });

        it('Should not decrease the progress bar value when the button is pressed and response is not ok', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerInvalidResponse.json'
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 4);
        });

        it('Should change button background color to rgb(178, 31, 31) if the power down button has been pressed and the response is invalid', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerInvalidResponse.json'
            });
            cy.get('.lamp-power__button')
                .last()
                .click()
                .should('have.css', 'background-color', 'rgb(178, 31, 31)');
        });

        it("Should change button background color to rgb(178, 31, 31) if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__button')
                .last()
                .should('have.css', 'background-color', 'rgb(178, 31, 31)');
        });

        it("Should not decrease the % when the button is pressed and if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json',
                delay: 5200
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power__power-display').should('have.text', '30%');
        });

        it("Should not increase the progress bar value when the button is pressed and if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'decreasePowerValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.lamp-power__button').last().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-power-progress__value').should('have.length', 4);
        });
    });

    describe('Light Mode Change', () => {
        it('Should switch with the correct response from the server', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeValidResponse.json'
            }).as('apiCheck');

            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck');
            cy.get('.radio-button__switch').should('have.class', 'radio-button__switch--toggled');
        });

        it('Should not switch when getting the wrong response from the server', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeInvalidResponse.json'
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck');
            cy.get('.radio-button__switch').should(
                'not.have.class',
                'radio-button__switch--toggled'
            );
        });

        it('Should have background color rgb(178, 31, 31) when response from server is invalid', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeInvalidResponse.json'
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck');
            cy.get('.radio-button__switch').should(
                'have.css',
                'background-color',
                'rgb(178, 31, 31)'
            );
        });

        it('Should send the correct data to the server when clicked', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeValidResponse.json'
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck').then((interception) => {
                assert.deepEqual(interception.request.body, { type: 'Night Vision', value: true });
            });
        });

        it('Should send the correct data to the server when clicked', () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeValidResponse.json'
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck').then((interception) => {
                assert.deepEqual(interception.request.body, { type: 'Night Vision', value: true });
            });
        });

        it("RadioButton Should change background color to rgb(178, 31, 31) if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck');
            cy.get('.radio-button__switch')
                .first()
                .should('have.css', 'background-color', 'rgb(178, 31, 31)');
        });

        it("RadioButton Should change text color to rgb(178, 31, 31) if the server doesn't respond in 5 seconds", () => {
            cy.intercept('POST', 'http://localhost:8080', {
                fixture: 'modeChangeValidResponse.json',
                delay: 5000
            }).as('apiCheck');
            cy.get('.radio-button__switch').first().click();
            cy.wait('@apiCheck');
            cy.get('.lamp-mode > p').first().should('have.css', 'color', 'rgb(178, 31, 31)');
        });
    });
});
