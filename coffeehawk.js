//CoffeeHawk - By 'Richard Chen' -applab, lab 1, 2018
//Huihui's assumptions
/*
    order-process is slow
    most people know what they want
    Payment quick
    baristas fast
    struggle to keep up with order and answering questions
    solution is a combination of technological and operational efficiencies
    missing out on business where people come grab drinks and go
*/


/* 
    When customer enters line, count how long it takes for the customer to reach the cashier
    When customer approaches cashier, count the time it takes for cashier to initialize first input in cash register 
    start a timer when cashier first inputs order, measure the time between each button press, and the total number of times the back button or clear button was pressed
    measure the time between when the order is finalized between customer and cashier and customer successfully pays
    measure time between when order is sent from cash register to reception in "kitchen" area
    for each type of drink compare the statistical norm for how long it takes to make each drink to how long it takes to make the drink and put on the pick-up counter
    every 5 seconds measure how many people are in line and how many leave before reaching the cashier
*/
let TimeinLine = 6;
let TimeatCashier = 10;
let TimeatBarista = 5;
console.log(TimeatCashier + TimeatBarista + TimeinLine)


