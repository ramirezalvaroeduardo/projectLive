

let objData = {
    "phone": "111-111-1111",
    "name": "NN-NNN",
    "age": "AAA",
    "addressNumber1": "AAA AAA AAA",
    "addressNumber2": "",
    "city": "CCC",
    "state": "SSS",
    "zip": "12345",
    "hadCovid": "false"
};

let postData = new FormData();
postData.append("json", JSON.stringify(objData));



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
    .then(resp => {
        return resp.text();
    })
    .then(text => {
        resp = JSON.parse(text);
        console.log('Response 2:', resp);
        return 
    })
}

async function addNew(newPart){
    console.log('Got to handleParticipant.AddNew...');
    console.log('Data', postData);
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