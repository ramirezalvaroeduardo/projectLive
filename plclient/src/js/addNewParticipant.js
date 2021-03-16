
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {addNew} from '../js/handleParticipants';
import '../style/Participant.css';

function addNewParticipant(event){
    console.log('Got to MainMenu.addNewParticipant');
    event.preventDefault();
    let newParticipant = {'newPart': {
        'FullName'       : document.getElementsByName('FullName')[0].value,
        'DOB'             : document.getElementsByName('DOB')[0].value,
        'Age'             : document.getElementsByName('Age')[0].value,
        'Gender'          : document.getElementsByName('Gender')[0].value,
        'Ethnicity'       : document.getElementsByName('Ethnicity')[0].value,
        'Phone'           : document.getElementsByName('Phone')[0].value,
        'Email'           : document.getElementsByName('Email')[0].value,
        'Address1'        : document.getElementsByName('Address1')[0].value,
        'Address2'        : document.getElementsByName('Address2')[0].value,
        'City'            : document.getElementsByName('City')[0].value,
        'State'           : document.getElementsByName('State')[0].value,
        'Zip'             : document.getElementsByName('Zip')[0].value,
        'County'          : document.getElementsByName('County')[0].value,
        'HasTransport'    : document.getElementsByName('HasTransport')[0].checked,
    }}
    addNew(newParticipant)
    .then(response => {
        console.log('POST addNew - from Server:', response);
      //this.setState({
      //    participants: response
      //})
    })
    .catch(error => { 
        console.log('Error:', error.message)
    });
}

//<!--Form.Control name='Gender' type='text' placeholder='Gender' required/-->

function AddNewParticipantForm(){
    return(
        <div id='newPart' className='AddNewDiv'>
            <h3>New Participant</h3>
            <Form className='AddNewForm'>
                <Form.Row>
                    <Form.Group className='form-group col col-12'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='FullName' type='text' placeholder='Full Name' required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group  className='form-group col col-8'>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control name='DOB' type='date' placeholder='Date of Birth' required/>
                    </Form.Group>
                    <Form.Group className='form-group col col-4'>
                        <Form.Label>Age</Form.Label>
                        <Form.Control name='Age' type='number' placeholder='Age' min='18' max='120' required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='form-group col col-6'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as='select' name='Gender' custom required>
                            <option>Female</option>
                            <option>Male</option>
                            <option>TransFemale</option>
                            <option>TransMale</option>
                            <option>Intersex</option>
                            <option>Unknown</option>
                            <option>Other</option>
                        </Form.Control>
                     </Form.Group>
                    <Form.Group className='form-group col col-6'>
                        <Form.Label>Ethnicity</Form.Label>
                        <Form.Control as='select' name='Ethnicity' custom required>
                            <option>Asian</option>
                            <option>Black</option>
                            <option>Native</option>
                            <option>White</option>
                            <option>Unknown</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='form-group col col-6'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name='Phone' type='integer' placeholder='Phone Number' required/>
                    </Form.Group>
                    <Form.Group className='form-group col col-6' controlId='formGridEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name='Email' type='email' placeholder='Email Address' required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='form-group col col-9' controlId='formGridAddress1'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='Address1' type='text' placeholder='Address 1' required/>
                    </Form.Group>
                    <Form.Group className='form-group col col-3' controlId='formGridAddress1'>
                        <Form.Label>Apt/#</Form.Label>
                        <Form.Control name='Address2' type='text' placeholder='Apt/#' required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='form-group col col-6' controlId='formGridCity'>
                        <Form.Label>City</Form.Label>
                        <Form.Control name='City' type='text' placeholder='City' required/>
                    </Form.Group>
                    <Form.Group className='form-group col col-3'>
                        <Form.Label>State</Form.Label>
                        <Form.Control name='State' type='text' placeholder='State' required/>
                    </Form.Group>
                    <Form.Group className='form-group col col-3'>
                    <   Form.Label>Zip</Form.Label>
                        <Form.Control name='Zip' type='text' placeholder='Zip' required/>
                    </Form.Group>
                </Form.Row>
                <Form.Group className='form-group col col-8'>
                    <Form.Label>County</Form.Label>
                    <Form.Control name='County' type='text' placeholder='County' required/>
                </Form.Group>
                <Form.Group className='form-group col'>
                    <Form.Check id='HasTransport' custom type='switch' label='Has Transportation' name='HasTransport'/>
                </Form.Group>
                <Form.Group className='form-group col'>
                    <Button variant="primary" type="submit" onClick={event => addNewParticipant(event)}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddNewParticipantForm;