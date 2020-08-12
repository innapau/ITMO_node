const http = require('http');
const bl = require('bl');

let urls = process.argv.slice(2)

function makeRequest(urls) {
	if(urls.length > 0) {
		http.get(urls.shift(), (res) => {
			res.pipe(bl((err, data) => {
				if(err) {
                    console.error(err)
                }
				console.log(data.toString())
			}))
			res.on('end', () => makeRequest(urls))
		})
	}
}

makeRequest(urls);
