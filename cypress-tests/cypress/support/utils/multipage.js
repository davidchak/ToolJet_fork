import { multipageSelector } from "Selectors/multipage";
import { commonSelectors } from "../../constants/selectors/common";

export const searchPage = (pageName) => {
  cy.get('[title="Search"]').click();
  cy.get('[data-cy="search-input-filed"]').type(pageName);
};

export const clearSearch = () => {
  cy.get(".clear-icon").click();
};

export const modifyPageHandle = (pageName, handle) => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(multipageSelector.pageHandleText).click();
  cy.get(multipageSelector.pageHandleInputField).clear().type(handle);
  cy.get(multipageSelector.pageHandleSaveButton).click();
};

export const detetePage = (pageName) => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(multipageSelector.deletePageOptionButton).click();
  cy.get(multipageSelector.modalConfirmButton).click();
  cy.verifyToastMessage(
    commonSelectors.toastMessage,
    `${pageName} page deleted.`
  );
  cy.notVisible(`[data-cy="pages-name-${pageName.toLowerCase()}"]`);
};

export const hideOrUnhidePage = (pageName, operation = "hide") => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(`[data-cy="${operation}-page-on-app-menu-option-button"]`).click();
};

export const setHomePage = (pageName) => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .trigger("mouseover")
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(multipageSelector.markHomePageOptionButton).click();
};

export const addNewPage = (pageName) => {
  cy.get(multipageSelector.addPageIcon).click();
  cy.get(".col-12 > .form-control").type(`{selectAll}{backspace}${pageName}`);
  cy.get(multipageSelector.addPageIcon).click();
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`).click();
};

export const addEventHandler = (pageName) => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(multipageSelector.eventHandlerOptionButton).click();
  cy.get(multipageSelector.addEventHandlerLink).click();
  cy.get(multipageSelector.eventName).verifyVisibleElement(
    "have.text",
    "Show Alert"
  );
};

export const hideOrUnhidePageMenu = () => {
  cy.get(multipageSelector.sidebarPageButton).click();
  cy.get(multipageSelector.pagesMenuIcon).click();
  cy.get(multipageSelector.disableMenuToggle).click();
};

export const disableOrEnablePage = (pageName, option = "disable") => {
  cy.get(`[data-cy="pages-name-${pageName.toLowerCase()}"]`)
    .click()
    .parent()
    .find(multipageSelector.pageMenuIcon)
    .click();
  cy.get(`[data-cy="${option}-option-button"]`).click();
};
