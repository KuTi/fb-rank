function img_create(src, alt, title) {
	var img= (typeof IEWIN == 'undefined') ? document.createElement('img') : new Image();
	img.src= src;
	if (alt!=null) img.alt= alt;
	if (title!=null) img.title= title;
	return img;
}

function creator(e, t, n, image) {
	var r = document.createElement(n);
	r.cellspacing = '3';
	var i = image ? img_create(t) : document.createTextNode(t);
	r.appendChild(i);
	e.appendChild(r);
}

function displayData(e, d) {
	var t = document.createElement('table');
	var n = document.createElement('thead');
	t.appendChild(n);
	var r = document.createElement('tr');
	creator(r, 'Avatar', 'th');
	creator(r, 'Name', 'th');
	creator(r, 'Type', 'th');
	creator(r, 'Score', 'th');
	n.appendChild(r);
	var s = document.createElement('tbody');
	t.appendChild(s);
	for (i = 0; i < e.length; i++) {
		if(e[i].type == 'user' && e[i].uid != d) {
			var r = document.createElement('tr');
			creator(r, e[i]['photo'], 'td', true);
			creator(r, e[i]['text'], 'td');
			creator(r, Object.keys(e[i]['grammar_costs'])[0].slice(0, -1).substring(1), 'td');
			creator(r, e[i]['grammar_costs'][Object.keys(e[i]['grammar_costs'])[0]], 'td');
			s.appendChild(r);
		}
	}
	document.body.innerHTML = '';
	document.body.appendChild(t);
}
id = requireDynamic('CurrentUserInitialData')['USER_ID'] || requireDynamic('CurrentUserInitialData')['ACCOUNT_ID'] || requireDynamic('Env').user || requireDynamic('CurrentUserInitialData')['id'];
url = '//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer=' + id + '&__a=1';
x = new XMLHttpRequest;
x.onreadystatechange = function() {
	if (x.readyState == 4 && x.status == 200) {
		srr = JSON.parse(x.responseText.substring(9)).payload.entries;
		displayData(srr, id)
	}
};
x.open('GET', url, true);
x.send();
