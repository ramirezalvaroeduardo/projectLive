
var express		= require('express');
var bodyParser	= require('body-parser');
var sqlite3		= require('sqlite3');
var db			= new sqlite3.Database('quotes.db');
var app			= express();
var port		= 3010;
var lisApp		= function() {
				console.log('App listening on port [' + port + ']');
				}
var resApp		= function(req, res) {
					res.send('Get request received at "/".');
				}
var quotes		= [
					{
						id: 1,
						quote: "The best is yet to come",
						author: "Unknown",
						year: 2000
					},
					{
						id: 2,
						quote: "This is a quote",
						author: "First Last",
						year: 1930
					},
					{
						id: 3,
						quote: "This is another quote", author: "First2 Last2",
						year: 1910
					},
					{
						id: 4,
						quote: "This is another quote", author: "First2 Last2",
						year: 1920
					}

				];
var resGetQte	=  function(req, res) {
					if(req.query.year) {
							db.all('SELECT * FROM quotes WHERE year = ?',[parseInt(req.query.year)] , function(err, rows){
							if(err){
								res.send(err.message);
							}else{
								console.log('Return a list of quotes from the year:', req.query.year);
								for(var item of rows){
									console.log(item.quote);
								}
								res.json(rows);
							}

						});
					} else {
						db.all('SELECT * FROM quotes', function(err, rows){
							if(err){
								res.send(err.message);
							}else{
								for(var item of rows){
									console.log(item.quote);
								}
								res.json(rows);
							}

						});
					}
				}
var resGetParm	= function(req, res) {
						console.log('Return quote with Id:', req.params.id);
						db.get('SELECT * FROM quotes WHERE rowid = ?', [req.params.id], function(err, row){
							if(err){
								console.log(err.message);
							}else{
								res.json(row);
							}
						});
					}
var resPostParm	= function(req, res) {
						console.log('Insert a quote: ' + req.body.quote);
						var data = req.body;
						db.run('INSERT INTO quotes VALUES (?, ? ,?)', [data.quote, data.author, data.year], function(err){
							if(err){
								console.log(err.message);
							}else{
								res.send('Inserted quote'); // with id:', this.lastID);
							}
						});
					}

app.use(bodyParser.urlencoded({extend: true}));
app.listen( port, lisApp);

app.get('/', resApp);
app.get('/quotes', resGetQte);
app.get('/quotes/:id', resGetParm);
app.post('/quotes', resPostParm);

