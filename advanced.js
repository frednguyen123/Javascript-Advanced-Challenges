// Function that shows ratings
function showRating(numOfStars) {
    let star = '*';
    let half = '.';
    let space = ' '
    let numLeft = numOfStars;
    let rating = ''
    for(let i = 0; i < Math.floor(numOfStars); ++i){
        if (numLeft >= 1) {
            numLeft = numLeft - 1;
            rating = rating + star + space;
        }
        if (numLeft < 1 && numLeft > 0){
            numLeft = numLeft - 1;
            rating = rating + half + space;
        }
    }
    return rating 
}
console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

// Function that shows rating, other solution
function showRating2(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings = ratings + "*"
        if (i !== Math.floor(rating) - 1){
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)){
        ratings += " ."
    }
    return ratings
}
console.log(showRating2(3));
console.log(showRating2(4.5));
console.log(showRating2(0.5));

// Function that sorts lowest to highest price
function sortLowToHigh(arr) {
    return arr.sort((a,b) => a - b)
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// Function that sorts highest to lowest given an array of objects
function sortHighToLow(arr) {
    return arr.sort((a,b) => {
        return b.price - a.price
    });
}
console.log(sortHighToLow([ {id: 1, price: 50},
                            {id: 2, price: 30},
                            {id: 3, price: 60},
                            {id: 4, price: 10},]));

// Promises
// Function to find all posts by a single user
async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json()
    
    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}
postsByUser(4);

// Function to find the first 6 Incomeplete Todos
async function firstSixIncomplete(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const posts = result.filter(element => element.completed === false);

    // Can be written:
    // const posts = result.filter(element => element.completed === false).slice(0,6)
    
    const size = 6;

    const firstSix = posts.slice(0, size)
    
    console.log(firstSix)


}
firstSixIncomplete();
