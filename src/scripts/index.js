import '../styles/index.scss';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

let loadData = document.querySelector('#btnID');
let output = document.querySelector('#output');

// _ _ _ _USING XMLHttpRequest_ _ _ _ _ _ _  
// loadData.addEventListener('click', () => {
    
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         output.innerHTML =  xhr.response;
//     }
//     xhr.open('GET', URL);
//     xhr.send();

// })

// _ _ _ _USING Fetch API_ _ _ _ _ _ _

// loadData.addEventListener('click', () => {
//     fetch(URL)
//     .then((res) => res.json())
//     .then((res_data) => {
//         res_data.forEach(element => {
//             output.innerHTML += ` Name: ${element.name}<br>`; 
//             // OR
//             // output.innerHTML = `${output.innerHTML} Name: ${element.name} <br>`; 
//         });
//     })
//     .catch((err) => console.log(err))
// });

// _ _ _ _SAME THING DONE BY USING Axios API_ _ _ _ _ _ _

loadData.addEventListener('click', () => {
    axios.get(URL)
        .then((response) => {
            response.data.forEach(element => {
                output.innerHTML += ` Name: ${element.name}<br>`; 
                // OR
                // output.innerHTML = `${output.innerHTML} Name: ${element.name} <br>`; 
            });
        })
        .catch((err) => console.log(err))
});


