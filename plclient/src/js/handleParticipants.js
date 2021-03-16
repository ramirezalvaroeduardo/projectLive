
import {showArea} from '../js/general'

async function getAll(){
    console.log('Requesting All records...');
    let resp;
    let res = await fetch(
        '/getAllParticipants', {
        'method': 'GET',
        'headers': {
            'accept': 'application/x-www-form-urlencoded, application/json',
        },
    })
    return await res;
}

async function addNew(newPart){
    console.log('Got to handleParticipant.AddNew...');
    let res = await fetch(
        '/addNewParticipant', {
        'method': 'post',
        'headers': {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(newPart)
    });
    return await res;
}

export {getAll, addNew}