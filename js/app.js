// Date : 15 July 2021 

showNotes();

//If user adds a note, add it to localStorage
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes === null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

//function to show elements (notes) from local storage

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes === null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                    </div>
                </div>`;
    });

    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0)
        notesElem.innerHTML = html;
    else
        notesElem.innerHTML = `Nothing to show! Use "Add Note" section above to add notes. `;
}

//function to delete a note

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes === null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

// /Adding search functionality
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.querySelector('p');
        let contentTxt = cardTxt.innerText;
        
        if(contentTxt.includes(inputVal))
            element.style.display = 'block';    
        else
            element.style.display = 'none';
    })
})

