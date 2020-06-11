
// scroll all attendees
document.querySelector(".people-list_load-more__2dx_z").click()


var i;
for (i = 0; i < 40; i++) { 
setTimeout(() => { document.querySelector(".people-list_load-more__2dx_z").click() }, 2000);
}



//get attendee data
Name = []
Headline = []

stemp = document.querySelectorAll(".test-id-attendee-name")
stemp.forEach(element => Name.push(element.innerText))

stemp = document.querySelectorAll(".test-id-attendee-headline")
stemp.forEach(element => Headline.push(element.innerText))

/*
Name.forEach(element => console.log(element))
Headline.forEach(element => console.log(element))
*/

copy(Name)
copy(Headline)
