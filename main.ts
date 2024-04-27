
//      100 DAYS OF CODING CHALLENGE
//          "Day 5 Challenge: Start Coding!"

//Q13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//     and make a list that stores several examples. Use your list to print a series of statements about these items, 
//     such as “I would like to own a Honda motorcycle.”

let transportation_mode = ["Toyota Corolla", " Mercedes-Benz", "B.M.W", "Lamborghini", "Ferrari"];
transportation_mode.forEach((Brand) =>
    console.log(`I would like to buy a ${Brand}`)
);
console.log(`But ${transportation_mode[2]} is my dream car`);

//Q14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//     Make a list that includes at least three people you’d like to invite to dinner.
//      Then use your list to print a message to each person, inviting them to dinner.

let guestList = ["Maryam", "Insiya", "Sakina", "Nafisa"];
guestList.forEach((invitation) => 
    console.log(`"Hey ${invitation}, I'd love to catch up over dinner!
    How about joining me for a delicious meal this "Saturday" at "8:00pm" at "BBQ Tonight".Let me know if you're free!`)
);

//Q15) changing Guest List: One of your guests can't make it to the dinner, 
//     so you need to send out a new set of invitations with a replacement guest.

let newGuestList = ["Maryam", "Insiya", "Sakina", "Nafisa"];
console.log(`${newGuestList[1]} is not coming`);

newGuestList.splice(1,1, "Maria")

newGuestList.forEach((newInvitation)=>
    console.log(`Hey ${newInvitation}, I'd love to catch up over dinner!
How about joining me for a delicious meal this "Saturday" at "8:00pm" at "BBQ Tonight".Let me know if you're free!`)
);




