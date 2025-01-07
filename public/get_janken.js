const addbutton = document.querySelector('#add');
const hand = document.querySelector('#hand');
const display = document.querySelector('#answer');
addbutton.addEventListener('click', () => {
    const yourhand = hand.value;
    const url = "/add?hand=" + yourhand;
    fetch( url )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        display.value = response.answer;
        console.log( response );
    })
})