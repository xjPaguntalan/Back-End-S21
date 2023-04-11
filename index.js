let users = ["Dwayne Johnson","Steve Austin","Kurt Angle","Dave Bautista"];

console.log("Original Array:")
console.log(users);

/*
    1. Create a function called addItem which is able to receive a single argument and add the input at the end of the users array.
        -function should be able to receive a single argument.
        -add the input data at the end of the array.
        -The function should not be able to return data.
        -invoke and add an argument to be passed in the function.
        -log the users array in the console.

*/

function addItem(item) {
    users[users.length] = item;
}

addItem("John Cena");
console.log(users);


/*
    2. Create function called getItemByIndex which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.

*/

function getItemByIndex(index) {
    return users[index];
}

let itemFound;

itemFound = getItemByIndex(2);
console.log(itemFound);


/*
    3. Create function called deleteItem which is able to delete the last item in the array and return the deleted item.
        -Create a function scoped variable to store the last item in the users array.
        -Shorten the length of the array by at least 1 to delete the last item.
        -return the last item in the array which was stored in the variable.

*/

function deleteItem() {
    lastItem = users[users.length-1];
    users.length = users.length-1;
    return lastItem;
}

deletedItem = deleteItem();
console.log(deletedItem);
console.log(users);

/*
    4. Create function called updateItemByIndex which is able to update a specific item in the array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -log the users array in the console.

*/

function updateItemByIndex(update, index) {
    users[index] = update;
}

updateItemByIndex('Triple H', 3);
console.log(users);


/*
    5. Create function called deleteAll which is able to delete all items in the array.
        -You can modify/set the length of the array.
        -The function should not return anything.

*/

function deleteAll() {
    users.length = users.length-4;
    console.log(users);
}

deleteAll();

/*
    6. Create a function called isEmpty which is able to check if the array is empty.
        -Add an if statement to check if the length of the users array is greater than 0.
            -If it is, return false.
        -Else, return true.
        -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
        -log the isUsersEmpty variable in the console.

*/

function isEmpty () {
    if(users.length > 0) {
        return false;
    }
    else {
        return true;
    }
}

isUsersEmpty = isEmpty();
console.log(isUsersEmpty);

try {
   module.exports = {
       users,
       addItem,
       getItemByIndex,
       deleteItem,
       updateItemByIndex,
       deleteAll,
       isEmpty
   } 
} catch (err) {

}
