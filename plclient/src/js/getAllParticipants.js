
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../style/Participant.css';
import {getAll} from './handleParticipants';
import {showArea} from '../js/general';


function SetAllParts(parts){
    let dTBody = document.getElementById('partsTable');
    dTBody.innerHTML = '';
    for(let dRow in parts){
        let currRow = dTBody.insertRow(dRow);
        let dCellArray = [];
        for(let dCell = 0; dCell < Object.keys(parts[dRow]).length; dCell++){
            dCellArray.push( currRow.insertCell(dCell))
        }
        dCellArray[0].innerHTML = parts[dRow].rowid;
        dCellArray[1].innerHTML = parts[dRow].fullname;
        dCellArray[2].innerHTML = parts[dRow].dob;
        dCellArray[3].innerHTML = parts[dRow].age
        dCellArray[4].innerHTML = parts[dRow].gender
        dCellArray[5].innerHTML = parts[dRow].ethnicity
        dCellArray[6].innerHTML = parts[dRow].phone
        dCellArray[7].innerHTML = parts[dRow].email
        dCellArray[8].innerHTML = parts[dRow].address1
        dCellArray[9].innerHTML = parts[dRow].address2
        dCellArray[10].innerHTML = parts[dRow].city
        dCellArray[11].innerHTML = parts[dRow].state
        dCellArray[12].innerHTML = parts[dRow].zip
        dCellArray[13].innerHTML = parts[dRow].county
        dCellArray[14].innerHTML = parts[dRow].hastransport;
    }
}

function GetAllParts() {
    showArea('allPart');
    getAll()
      .then(resp => {
        return resp.text();
      })
      .then(text => {
        let respParts = JSON.parse(text);
        SetAllParts(respParts);
      })
  }


function GetAllParticipants(parts){

    console.log( 'Parts getAllParts..:', parts )
    if(parts === undefined || parts.length <= 0){
        parts = [];
        parts.push({
            'Id':'NA',
            'FullName':'No Records',
            'DOB':'No Records',
            'Age':'No Records',
            'Gender':'No Records',
            'Ethnicity': 'No Records',
            'Phone': 'No Records',
            'Email': 'No Records',
            'Address1': 'No Records',
            'Address2': 'No Records',
            'City': 'No Records',
            'State': 'No Records',
            'Zip': 'No Records',
            'Conty': 'No Records',
            'Has Transport': 'No Records',
        });
    }

    const partRecord  = (part) => {
        return(
            <tr>
                <td>{part.Id}</td>
                <td>{part.FullName}</td>
                <td>{part.DOB}</td>
                <td>{part.Age}</td>
                <td>{part.Gender}</td>
                <td>{part.Etdnicity}</td>
                <td>{part.Phone}</td>
                <td>{part.Email}</td>
                <td>{part.Address1}</td>
                <td>{part.Address2}</td>
                <td>{part.City}</td>
                <td>{part.State}</td>
                <td>{part.Zip}</td>
                <td>{part.Conty}</td>
                <td>{part.HasTransport}</td>
            </tr>
        )
    }

    let partsTable = null;
    try{
        partsTable = parts.map((part) => partRecord(part));
    } catch( error) {}

    return(
        <div id='allPart' className='GetAllDiv'>
            <h3>Participant</h3>
            <Table responsive='xl' striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Ethnicity</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Apt/#</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>County</th>
                        <th>Has Transport</th>
                    </tr>
                </thead>
                <tbody id='partsTable'>
                    {partsTable}
                </tbody>
            </Table>
        </div>
    )
}

export {GetAllParts, GetAllParticipants};
