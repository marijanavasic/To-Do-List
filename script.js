// DODAVANJE STAVKI U LISTU 
let dodajBtn = document.querySelector('#dodaj');
dodajBtn.addEventListener('click', () => {
    let noviUnos = document.querySelector('#novi_unos').value;
    
    if(noviUnos === '') {
        alert('Unesite neku stavku! 📝😎');
    } 
    else {
        let li = document.createElement('li');
        let text = document.createTextNode(noviUnos);
        li.appendChild(text);
        document.getElementById('lista').appendChild(li);
        document.querySelector('#novi_unos').value = '';

        let span = document.createElement('span');
        span.className = 'brisi';
        let brisitxt = 'X'
        let txt = document.createTextNode(brisitxt);
        span.appendChild(txt);
        li.appendChild(span);
    }

 // BRISANJE STAVKI IZ LISTE
    let brisiBtn =  document.querySelectorAll('.brisi');
    brisiBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let span = e.target;
            let li = span.parentNode;
            // console.log(li);
            li.remove();
        })
    });
});

    

