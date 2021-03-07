
class handleParticipants extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            participants: [],
            phone: '',
            name: '',
            age,
            addressNumber1: '',
            addressNumber2: '',
            city: '',
            state: '',
            zip: '',
            hadCovid: false
        }

        this.getAll = this.getAll.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    getAll(event){
        event.preventDefault();
        fetch('/plserver/getAllParticipants',
        {
            'method': 'GET',
            'headers': {
                'content-type': 'application/json',
                'accept': 'application/json'
            }    
        })
        .then(response => response.json())
        .then(reponse => {
            this.setState({
                participants: response
            })
        })
        .catch(error => { console.log('Error:', error.message)
        });
    }

    addNew(event){
        event.preventDefault('/plserver/getAllParticipants',{
            'method': 'POST',
            'headers': {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            'body': JSON.stringify({
                phone: '111-111-1111',
                name: 'NN-NNN',
                age: 'AAA',
                addressNumber1: 'AAA AAA AAA',
                addressNumber2: '',
                city: 'CCC',
                state: 'SSS',
                zip: '12345',
                hadCovid: false
            })
        })
        .then(response => response.json())
        .then(reponse => {
            console.log('Response': response)
        })
        .catch(error => { 
            console.log('Error:', error.message)
        });
    }
}
