
var express		= require('express');
var bodyParser	= require('body-parser');
var sqlite3		= require('sqlite3');
var db			= new sqlite3.Database('projectlife.db');
var app			= express();
var port		= 3010;
var lisApp		= function() {
				console.log('App listening on port [' + port + ']');
				}

var getAllParticipants = function(req, res){
	console.log('Response: Arrived to getAllParticipants.');
	db.all('SELECT * FROM projectlife', function(err, rows){
		if(err){
			res.send(err.message);
		}else{
			console.log('Response: Sent payload.');
			res.json(rows);
		}
	});
}

var addNewParticipant  = function(req, res){
	console.log('Server: Arrived to addNewParticipant...');
	let newPart = JSON.parse(
		JSON.stringify(req.body)
		.replace(/\{\"/, '' )
		.replace(/\":\"\"\}/, '')
		.replace(/\\/g, '')
	).newPart;
	db.run('INSERT INTO projectlife VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[
			newPart.FullName,
			newPart.DOB,
			newPart.Age,
			newPart.Gender,
			newPart.Ethnicity,
			newPart.Phone,
			newPart.Email,
			newPart.Address1,
			newPart.Address2,
			newPart.City,
			newPart.State,
			newPart.Zip,
			newPart.County,
			newPart.HasTransport,
		]
	);
	res.send({'Server_Response':'Arrived to addNewParticipant'});
}

app.use(bodyParser.urlencoded({extend: true}));
app.listen( port, lisApp);

app.get('/', resApp);

app.get('/getAllParticipants', getAllParticipants);
app.post('/addNewParticipant', addNewParticipant);

