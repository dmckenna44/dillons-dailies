const axios = require('axios');



const characters = () => {
    axios.get('http://hp-api.herokuapp.com/api/characters')
        .then(response => {
            const data = response.data;
            let count = 0;
            data.forEach(char => {
                if(char.house) {
                count++;
                console.log(char.name, count);
                console.log(char.house);
                // console.log(char.patronus);
                }
            })
        })     
}

characters();

const friends = () => {
    axios.get('https://github.com/MattiasPernhult/friends-api/episodes')
        .then(response => {
            console.log(response);
        })
}

friends();