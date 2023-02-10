const locators ={

LOGIN:{
    TXT_EMAIL:'input[data-qa=login-email]',
    TXT_PASSWORD:'input[data-qa=login-password]',
    BTN_LOGIN: 'button[data-qa=login-button]'
},

CADASTRAR: {

    TXT_NAME:'[type="text"]',
    TXT_EMAIL: 'input[data-qa="signup-email"]',
    BTN_SIGNUP: '[data-qa="signup-button"]',
    RD_TITLE:'input[value="Mr"]',
    TXT_SECUNDARY_NAME:'input[data-qa=name]',
    TXT_SECUNDARY_EMAIL:'input[data-qa=email]',
    TXT_PASSWORD: 'input[data-qa=password]',
    SELECT_BIRTHDAY: 'select[data-qa=days]',
    SELECT_MONTH: 'select[data-qa=months]',
    SELECT_YEAR: 'select[data-qa=years]',
    CHECKBOX_NEWSLETTER:'#newsletter',
    CHECKBOX_RECEIVE:'#optin'  
},

ADDRESS:{

    TXT_FIRST_NAME: '#first_name',
    TXT_LAST_NAME: '#last_name',
    TXT_COMPANY:'#company',
    TXT_ADDRES_1:'#address1',
    TXT_ADDRES_2: '#address2',
    SELECT_COUNTRY: '#country',
    TXT_STATE:'#state',
    TXT_CITY:'#city',
    TXT_ZIPCODE:'#zipcode',
    TXT_MOBILE_NUMBER:'#mobile_number',
    BTN_CREATE_ACCOUNT:'button[data-qa=create-account]',
    MSG_ACCOUNT_CREATED: '[data-qa=account-created]'

},

CHECKOUT:{

    BTN_ADD_CART:'div.features_items > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a',
    MSG_PRODUCT_ADD_CART:'.modal-body',
    LINK_VIEW_CART:'#cartModal a[href="/view_cart"]',
    IMG_PRODUCT1:'#product-1 img[src="get_product_picture/1"]',
    NAME_PRODUCT1:'#product-1 .cart_description a',
    DESC_PRODUCT1:'#product-1 .cart_description p',
    PRICE_PRODUCT1:'#product-1 .cart_price p',
    QUANTITY_PRODUCT1:'#product-1 .cart_quantity .disabled',
    TOTAL_PRICE1:'#product-1 .cart_total_price',
    REMOVE_PRODUCT:'#product-1 .cart_quantity_delete',
    MSG_REMOVE_PRODUCT:'#empty_cart',
    BTN_PLACE_ORDER:'.btn.btn-default.check_out',
    TXT_NAME_CARD:'[data-qa="name-on-card"]',
    TXT_NUMBER_CARD:'[data-qa="card-number"]',
    TXT_CVC_CARD:'[data-qa="cvc"]',
    TXT_MONTH_CARD:'[data-qa="expiry-month"]',
    TXT_YEAR_CARD:'[data-qa="expiry-year"]',
    MSG_ORDER_PLACED:'[data-qa="order-placed"]  b'


}

}

export default locators;