import axios from 'axios';

export function getQuestions(){


    return axios.request({
        method: 'get',
        url: 'https://opentdb.com/api.php?amount=50&difficulty=hard&type=boolean&encode=url3986'
    }).catch(err => {
        throw err;
    })
}
