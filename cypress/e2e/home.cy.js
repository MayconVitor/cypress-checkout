/// <reference types="Cypress" />

let testdata;
import loc from '../support/locators'
import user from '../support/data'
import card from '../support/cardTest'


describe('Loja Checkout', () => {

  before(()=>{

    cy.fixture('datamass').then(
      t =>{testdata = t}
      )})


  context('Usuario',()=>{

    it('Devo cadastrar um usuario', () => {

      const user = testdata;
  
      cy.deleteAccount(user);
      cy.acessoCadastroUser(user);
      cy.preenchoAccountInformation(user);
      cy.preenchoAdressInformation(user);
      cy.get(loc.ADDRESS.MSG_ACCOUNT_CREATED)
      .should('have.text','Account Created!')
  
    })
  
  
    it('Devo realizar login de usuario', () =>{
  
      const data = testdata;
  
      cy.deleteAccount(data);
      cy.postCreateAccount(data);
  
      cy.login(data);
  
      cy.get('a')
      .should('be.visible')
      .contains(' Logged in as ' + data.name)
    })
  
  
    it('Devo realizar logout de usuario', () =>{
  
      const data = testdata;
  
      cy.deleteAccount(data);
      cy.postCreateAccount(data);
  
      cy.login(data);
  
      cy.get('a')
      .should('be.visible')
      .contains(' Logout').click()
  
      cy.get('[class=login-form]>h2')
      .should('be.visible')
      .contains('Login to your account')
  
    })

  })


  context('Checkout', ()=>{

    it('Devo adcionar produto ao carrinho', ()=>{

      const data = testdata;


      cy.deleteAccount(data);
      cy.postCreateAccount(data);
      cy.login(data);
      cy.addProductToCart();


    })

    it('Devo remover produto ao carrinho', ()=>{


      const data = testdata;
  
      cy.deleteAccount(data);
      cy.postCreateAccount(data);
      cy.visit('/')
      cy.addProductToCart();
      cy.removeProductToCart();

    })

    it('checkout do produto blue top ', ()=>{

      const data = testdata;
  
      cy.deleteAccount(data);
      cy.postCreateAccount(data);
      cy.login(data);
      cy.checkoutProduct();


    })


  })

})
