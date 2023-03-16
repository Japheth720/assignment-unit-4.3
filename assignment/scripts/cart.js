console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create an variable called 'basket' and set it with NO arrays
let basket = [];

// Create Function called addItem( item )
function addItem( item ){
   basket.push( item );
   return true;

}



//  Function for listItems
function listItems( basket ){
    for ( item of basket ){
        console.log( item );
    }
}



//  Function for empty
function empty(){
    basket = [];
    return true;
}

//  console.log testing
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

console.log('Resetting basket:', empty());
console.log(`Basket should now be ${basket}`);




