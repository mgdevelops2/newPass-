# Password Generator Starter Code



This is the main branch for my 3rd JS challenge

The idea here is to create a simple password generator. 
The passwod generator will take a few user inputs - one after the other.
- the prompts for user input
    - what length does the require? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        + the first prompt will as for a user input of a passLength, and then continue to another prompt. 
    - newPrompt1 will ask the user to check off if the password will include include <!-- numbers?  "0123456789" -->
        + If the user checks "true" to include numbers then var num will concatenate with the alphabet variable.
    - newPrompt1 will ask the user to check off if the password will include include  <!-- symbols? "!"#$%&'()*+,-./:;<=>?@[]^_`{|}~" -->
        + if the user checks "true" to include the symbols then var symbols will contatenate with the alphabet variable. 

- Once all the prompts have their required inputs the system should create a password and display it in the text field. 


The actual task is, 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```