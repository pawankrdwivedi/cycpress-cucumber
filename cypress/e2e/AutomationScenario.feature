Feature: Automation Test Scenario
    
    Background: Create a new User and sign in to application.
        Given Application Page is opened. 
    
    @smoke 
    Scenario: Scenario 1- Register a new User
        When User click on Create New Account link.
        Then "Create New Customer Account" page is displayed. 
        When User enters account details "Pawan", "Dwivedi", "pkd1711@gmail.com", "Automation@123".
        Then "My Account" page is displayed. 
        Then "Thank you for registering with Main Website Store." success message is displayed.
    
    @smoke 
    Scenario: Scenario 2- Register a new User with already registered account
        When User click on Create New Account link.
        Then "Create New Customer Account" page is displayed. 
        When User enters account details "Pawan", "Dwivedi", "pkd1711@gmail.com", "Automation@123".
        Then "There is already an account with this email address." error message is displayed.
    
    @smoke 
    Scenario: Scenario 3- Sign in to App with new registered user
        When User click on Sign In link.
        Then "Customer Login" page is displayed. 
        When User enters sign in details "pkd1711@gmail.com", "Automation@123".
        Then "Home Page" page is displayed.
  
    @smoke 
    Scenario: Scenario 4- Sign in to App with wrong credentials
        When User click on Sign In link.
        Then "Customer Login" page is displayed. 
        When User enters sign in details "pkd1711@gmail.com", "Automation@1234567".
        Then "The account sign-in was incorrect or your account is disabled temporarily." error message is displayed.