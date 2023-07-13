
// // Write your solution in this file!
var customerName = 'bob';
console.log(customerName);


function upperCaseCustomerName() {
        customerName = customerName.toUpperCase();
        return customerName;
    }

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'Victor';
    leastFavoriteCustomer = 'Joan';
    return leastFavoriteCustomer;
}


