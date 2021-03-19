
var express		= require('express');
var bodyParser	= require('body-parser');
var path		= require('path');
var sqlite3		= require('sqlite3');
var db			= new sqlite3.Database('projectlife.db');
var app			= express();
var port		= 3010;

				
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, './plclient/build')));

var lisApp = function() {
	console.log('App listening on port [' + port + ']');
}

var mainPage = function(req,res){
	res.sendFile(path.join(__dirname, './plclient/build/index.html'));
}

var getAllParticipants = function(req, res){
	db.all('SELECT rowid, * FROM projectlife', function(err, rows){
		if(err){
			res.send(err.message);
		}else{
			console.log('Response: Sent payload.');
			res.json(rows);
		}
	});
}

var addNewParticipant  = function(req, res){
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

app.get('/', mainPage);
app.get('/getAllParticipants', getAllParticipants);
app.post('/addNewParticipant', addNewParticipant);

app.listen(process.env.PORT || port, lisApp);

