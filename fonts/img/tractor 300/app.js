import tractor from './tractor.json' assert {type: 'json'};

let container = document.querySelector(".right-bar");

for(let i=0; i < tractor.length; i++) {
    let user = ` 
    <div class= "right">
        
        <div class"add">
            <div class="imeg"><img src="./img/${tractor[i].img}"></div>
            <div class="text">
                ${tractor[i].name}<br>
                ${tractor[i].price}
            </div><br>
            <div class="button"> 
                <button data-id = "${tractor[i].id}" class = "btn1">Puchrace</button>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += user; 
}


const meal = document.querySelector('.left-bar');

document.querySelectorAll('.btn1').forEach(item => {
    item.addEventListener('click', addToCard)
});

function addToCard(event) {

    
    let id = event.target.dataset.id;
    console.log(id);
    for(let i = 0; i < tractor.length; i++){
        if (id == tractor[i].id){
            let card = document.createElement('div');
            card.innerHTML +=  ` 
            <div class= "right">
                
                <div class"add">
                    <div class="imeg"><img src="./img/${tractor[i].img}"></div>
                    <div class="text">
                        ${tractor[i].name}<br>
                        ${tractor[i].price}
                    </div><br>
                    <div class="button"> 
                        <button data-id = "${tractor[i].id}" class = "remove">Delete</button>
                    </div>
                </div>
            </div>
            `;
            meal.append(card);

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                console.log(e);
                // e.target.parentNode.parentNode.remove();
                e.target.parentNode.parentNode.parentNode.remove();
            });
            break;
        }
    }
}