let options = {
	httpEndpoint: 'http://192.168.43.84:8888',
	debug: true
};
var eos = Eos(options);

eos.getInfo((err, info) => {
	console.log(err, info);
});
<<<<<<< HEAD

eos.getCode({ account_name: 'beesocial' }, (err, res) => {
	if ( ! err) {
		console.log(res.abi);
	}
	else console.error(err);
});

eos.getTableRows({
	scope: 'beesocial',
	code: 'beesocial',
	table: 'skill',
	json: true
}, (err, res) => {
	if ( ! err) {
		res.rows.forEach(item => {
			console.log('item', item);
		});
	}
	else console.error(err);
});
=======
>>>>>>> fc222f2c383ae5ca0d1d450da945cb7408b3a54b