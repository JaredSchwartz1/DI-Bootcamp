let form = document.getElementById('libform');
let story = document.getElementById('story');
let shuffler = document.getElementById('shuffle-button');
let para = document.getElementById('paragraph');
const myDayStory = {
    title: 'My Day',
    text: `I woke up in my ${noun} and got dressed for the day. I ate pancakes for breakfast and they were ${adjective}. I said hello to the ${person} as he opened the door for me and then I was on my way to Ramat Gan. I needed to ${verb} quickly to make it to ${place}. Luckily I made it there just in time.`,
    shown: false
}
const theBeachStory = {
    title: 'The Beach',
    text: `It was early June and we decided we wanted to go on a ${noun}. It was a ${adjective} day so we decided the best place to go to would be the beach. ${person} drove us there and we found our spot on the beach. We played football, dug a big hole in the sand, and swam in the water before it was then time to ${verb} lunch. It took a bit of searching and further deliberating among us but we eventually settled on eating in the ${place}. It was a surprisingly good meal.`,
    shown: false
}
const Airplanes = {
    title: 'Airplanes',
    text: `I love to fly. Although the food isn't the greatest and there isn't much leg room, it's always worth it so you can make it to your ${noun} at your destination. For me losing my stuff on the plane is super ${adjective}. Another annoying thing is when the ${person} pushes the cart to the front of the plane so that first class passengeers get the food first. Don't get me started on when you have to ${verb} the plane. It takes forever and if your are traveling internationally you get to wait in more lines at ${place}. Planes aren't perfect but it sure is faster than roadtrips or cruises.`,
    shown: false
}
const theBasketballGame = {
    title: 'The Basketball Game',
    text: `I really had a special experience as a ${noun} of my school's basketball team. Normally our team is pretty ${adjective} but on this occasion everything seemed to click. Our best player, ${person}, scored what felt like every shot he took. Ben managed to ${verb} the ball from the other team seven times and then made the easy pass to a sprinting teammate for multiple easy scores at the ${place}. Our team ended up winning convincingly and all of the fans cheered.`,
    shown: false
}
const codersNeeded = {
    title: 'Coders Needed',
    text: `Are you good with using a ${noun}? Well, here at The Cool Coding Company, we are looking for ${adjective} individuals with lots of experience with coding languages. Our work is highly valuable to society and we help people like King Charles, ${person}, and Travis Kelce. If you think you would be worthy of the position, ${verb} us your information and we will send you a date for an interview. Come to the ${place} at the adress 75 Suplex City. Password is 42C. We look forward to seeing you there.`,
    shown: false
}
const stories = [myDayStory, theBeachStory, Airplanes, theBasketballGame, codersNeeded]
let selectedStory = stories[Math.floor(Math.random() * 5)];
let titleElement = document.createElement('h2')
let libTitle = document.createTextNode(`${selectedStory.title}`)
let libStory = document.createTextNode(`${selectedStory.text}`)
let returnArray = [selectedStory, libTitle, titleElement, libStory]

function libCreate(event, selectedStory) {
    event.preventDefault()
    let verb = document.getElementById('verb').value
    let place = document.getElementById('place').value
    let person = document.getElementById('person').value
    let adjective = document.getElementById('adjective').value
    let noun = document.getElementById('noun').value

    myDayStory.text = `I woke up in my ${noun} and got dressed for the day. I ate pancakes for breakfast and they were ${adjective}. I said hello to the ${person} as he opened the door for me and then I was on my way to Ramat Gan. I needed to ${verb} quickly to make it to ${place}. Luckily I made it there just in time.`
    theBeachStory.text = `It was early June and we decided we wanted to go on a ${noun}. It was a ${adjective} day so we decided the best place to go to would be the beach. ${person} drove us there and we found our spot on the beach. We played football, dug a big hole in the sand, and swam in the water before it was then time to ${verb} lunch. It took a bit of searching and further deliberating among us but we eventually settled on eating in the ${place}. It was a surprisingly good meal.`
    Airplanes.text = `I love to fly. Although the food isn't the greatest and there isn't much leg room, it's always worth it so you can make it to your ${noun} at your destination. For me losing my stuff on the plane is super ${adjective}. Another annoying thing is when the ${person} pushes the cart to the front of the plane so that first class passengeers get the food first. Don't get me started on when you have to ${verb} the plane. It takes forever and if your are traveling internationally you get to wait in more lines at ${place}. Planes aren't perfect but it sure is faster than roadtrips or cruises.`
    theBasketballGame.text = `I really had a special experience as a ${noun} of my school's basketball team. Normally our team is pretty ${adjective} but on this occasion everything seemed to click. Our best player, ${person}, scored what felt like every shot he took. Ben managed to ${verb} the ball from the other team seven times and then made the easy pass to a sprinting teammate for multiple easy scores at the ${place}. Our team ended up winning convincingly and all of the fans cheered.`
    codersNeeded.text = `Are you good with using a ${noun}? Well, here at The Cool Coding Company, we are looking for ${adjective} individuals with lots of experience with coding languages. Our work is highly valuable to society and we help people like King Charles, ${person}, and Travis Kelce. If you think you would be worthy of the position, ${verb} us your information and we will send you a date for an interview. Come to the ${place} at the adress 75 Suplex City. Password is 42C. We look forward to seeing you there.`

    if (noun.value == "" || adjective == "" || person == "" || verb == "" || place == "") {
        alert('Missing fields')
    }
    else {
        if (shuffler.getAttribute('style') == "display: none;") {
            selectedStory = stories[Math.floor(Math.random() * 5)];
            shuffler.removeAttribute('style')
        }
        console.log(selectedStory)
        titleElement = document.createElement('h2')
        libTitle = document.createTextNode(`${selectedStory.title}`)
        titleElement.appendChild(libTitle)
        document.body.insertBefore(titleElement, para);
        libStory = document.createTextNode(`${selectedStory.text}`)
        story.appendChild(libStory)
        selectedStory.shown = true
        console.log(selectedStory)
        returnArray = [selectedStory, libTitle, titleElement, libStory]
        return returnArray
    }
}
function shuffle(returnArray) {
    for (let i of returnArray) {
        i = i
    }
    let n = 0;
    for (i of stories) {
        if (i.shown == true) {
            continue;
        }
        else {
            n++
        }
    }
    if (n == 0) {
        for (i of stories) {
            i.shown = false
        }
        alert('All stories have been used. You can change your answers if you\'d like.')
        shuffler.setAttribute('style',"display: none;")
        libTitle.remove()
        titleElement.remove()
        libStory.remove()
    }
    else {
        while (selectedStory.shown == true) {
            selectedStory = stories[Math.floor(Math.random() * 5)]
        }
        console.log(selectedStory)
        libTitle.remove()
        titleElement.remove()
        libStory.remove()
        libCreate(event, selectedStory)
    }
}
form.addEventListener('submit', libCreate)
shuffler.addEventListener('click', function () { shuffle(returnArray) })


