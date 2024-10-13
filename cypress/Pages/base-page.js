class BasePage {
    selectMenu(menu) {
        cy.get('a[href="/' + menu + '"]').click();
    }

    logout() {
        cy.get('a[href="/logout"]').click();
    }
}

module.exports = BasePage;
