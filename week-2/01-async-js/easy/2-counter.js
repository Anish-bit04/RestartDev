//  Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function updateCounter(count){
    count++;
    console.log(count)
    setTimeout(()=>updateCounter(count),1000)
}
updateCounter(0)


// (Hint: setTimeout)