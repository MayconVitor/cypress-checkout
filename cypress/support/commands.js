
import loc from '../support/locators'
import card from '../support/cardTest'



Cypress.Commands.add('acessoCadastroUser', (user)=> {

    cy.visit('/')
    cy.get('a')
    .should('be.visible')
    .contains(' Signup / Login').click()

    //SIGNUP / LOGIN
    cy.get(loc.CADASTRAR.TXT_NAME).type(user.name)
    cy.get(loc.CADASTRAR.TXT_EMAIL).type(user.email)
    cy.get(loc.CADASTRAR.BTN_SIGNUP).click()

})


Cypress.Commands.add('login', (data)=> {

  cy.visit('/')
  cy.get('a')
  .should('be.visible')

  .contains(' Signup / Login').click()
  cy.get(loc.LOGIN.TXT_EMAIL).type(data.email)
  cy.get(loc.LOGIN.TXT_PASSWORD).type(data.password)
  cy.get(loc.LOGIN.BTN_LOGIN).click()

})

Cypress.Commands.add('preenchoAccountInformation', (user)=>{

    cy.get(loc.CADASTRAR.RD_TITLE).click()
    cy.get(loc.CADASTRAR.TXT_SECUNDARY_NAME).should('have.value',user.name)
    cy.get(loc.CADASTRAR.TXT_SECUNDARY_EMAIL).should('have.value',user.email)
    cy.get(loc.CADASTRAR.TXT_PASSWORD).type(user.password)
    cy.get(loc.CADASTRAR.SELECT_BIRTHDAY).select(user.birthday)
    cy.get(loc.CADASTRAR.SELECT_MONTH).select(user.birthdaymonth)
    cy.get(loc.CADASTRAR.SELECT_YEAR).select(user.birthdayyear)
    cy.get(loc.CADASTRAR.CHECKBOX_NEWSLETTER).click()
    cy.get(loc.CADASTRAR.CHECKBOX_RECEIVE).click()

})


Cypress.Commands.add('preenchoAdressInformation', (user)=>{

    //ADDRESS INFORMATION
    cy.get(loc.ADDRESS.TXT_FIRST_NAME).type(user.name)
    cy.get(loc.ADDRESS.TXT_LAST_NAME).type(user.lastname)
    cy.get(loc.ADDRESS.TXT_COMPANY).type(user.company)
    cy.get(loc.ADDRESS.TXT_ADDRES_1).type(user.adressprimary)
    cy.get(loc.ADDRESS.TXT_ADDRES_2).type(user.adresssecundary)
    cy.get(loc.ADDRESS.SELECT_COUNTRY).select(user.country)
    cy.get(loc.ADDRESS.TXT_STATE).type(user.state)
    cy.get(loc.ADDRESS.TXT_CITY).type(user.city)
    cy.get(loc.ADDRESS.TXT_ZIPCODE).type(user.zipcode)
    cy.get(loc.ADDRESS.TXT_MOBILE_NUMBER).type(user.mobilenumber)
    cy.get(loc.ADDRESS.BTN_CREATE_ACCOUNT).click()

})


Cypress.Commands.add('deleteAccount',(user)=>{

  cy.request({
      url: Cypress.env('apiUrl') +'/deleteAccount',
      method:'DELETE',
      form: true,
      body:{
        email: user.email,
        password: user.password
      }
    }).then(res=> {
      expect(res.status).to.eq(200)
    })

})


Cypress.Commands.add('postCreateAccount', (data)=>{

  cy.request({

     url: Cypress.env('apiUrl') +'/createAccount',
     method: 'POST',
     form: true,
     body: {
       name: data.name,
       email: data.email,
       password: data.password,
       title: data.title,
       birth_date: data.birthday,
       birth_month: data.birthdaymonth,
       birth_year: data.brithdayyear,
       firstname: data.name,
       lastname: data.lastname,
       company: data.company,
       address1: data.adressprimary,
       address2: data.adresssecundary,
       country: data.country,
       zipcode: data.zipcode,
       state: data.state,
       city: data.city,
       mobile_number: data.mobilenumber
     }

   }).as('response')

   cy.get('@response').should((response =>{
     expect(response.status).to.equal(200)
     expect(response.body).to.equal('{"responseCode": 201, "message": "User created!"}')

   }))

})

Cypress.Commands.add('addProductToCart', ()=>{

  cy.get(loc.CHECKOUT.BTN_ADD_CART)
  .should('have.text','Add to cart')
  .click()

  cy.get(loc.CHECKOUT.MSG_PRODUCT_ADD_CART)
  .contains('Your product has been added to cart.')

  cy.get(loc.CHECKOUT.LINK_VIEW_CART).contains('View Cart').click()

  cy.get(loc.CHECKOUT.IMG_PRODUCT1).should('be.visible')
  cy.get(loc.CHECKOUT.NAME_PRODUCT1).should('have.text','Blue Top')
  cy.get(loc.CHECKOUT.DESC_PRODUCT1).should('have.text','Women > Tops')
  cy.get(loc.CHECKOUT.PRICE_PRODUCT1).should('have.text','Rs. 500')
  cy.get(loc.CHECKOUT.QUANTITY_PRODUCT1).should('have.text','1')  
  cy.get(loc.CHECKOUT.TOTAL_PRICE1).should('have.text','Rs. 500')

})

Cypress.Commands.add('removeProductToCart', ()=>{

  cy.get(loc.CHECKOUT.REMOVE_PRODUCT).click()
  cy.get(loc.CHECKOUT.MSG_REMOVE_PRODUCT).contains('Cart is empty! Click here to buy products.')
})


Cypress.Commands.add('checkoutProduct',()=>{

  cy.addProductToCart();

  cy.get('#cart_items .btn').contains('Proceed To Checkout').click()

  cy.get(loc.CHECKOUT.IMG_PRODUCT1).should('be.visible')
  cy.get(loc.CHECKOUT.NAME_PRODUCT1).should('have.text','Blue Top')
  cy.get(loc.CHECKOUT.DESC_PRODUCT1).should('have.text','Women > Tops')
  cy.get(loc.CHECKOUT.PRICE_PRODUCT1).should('have.text','Rs. 500')
  cy.get(loc.CHECKOUT.QUANTITY_PRODUCT1).should('have.text','1')  
  cy.get(loc.CHECKOUT.TOTAL_PRICE1).should('have.text','Rs. 500')

  cy.get(loc.CHECKOUT.BTN_PLACE_ORDER)
  .should('have.text','Place Order').click()

  cy.get(loc.CHECKOUT.TXT_NAME_CARD).type(card.MASTER.NAME)
  cy.get(loc.CHECKOUT.TXT_NUMBER_CARD).type(card.MASTER.NUMBER)
  cy.get(loc.CHECKOUT.TXT_CVC_CARD).type(card.MASTER.CVC)
  cy.get(loc.CHECKOUT.TXT_MONTH_CARD).type(card.MASTER.MONTH)
  cy.get(loc.CHECKOUT.TXT_YEAR_CARD).type(card.MASTER.YEAR)
  cy.get('[data-qa="pay-button"]').click()

  cy.get(loc.CHECKOUT.MSG_ORDER_PLACED).should('have.text', 'Order Placed!')
})

