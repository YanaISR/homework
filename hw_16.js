const value = document.querySelector(".value");
const btnContainer = document.querySelector(".btn-container");
let counter = 0;

const getCounter = (e) => {
    const eventName = e.target.dataset.action;

    switch(eventName) {
        case 'decrease':
            counter--;
            break;
        case 'reset':
            counter = 0;
            break;
        case 'increase':
            counter++;
            break;
        default:
            return counter;
    }

    value.innerHTML = counter;
     
    counter > 0 ? value.style.color = 'green': counter < 0 ? value.style.color = 'red' : value.style.color = 'gray';

    
}

btnContainer.addEventListener('click', getCounter);