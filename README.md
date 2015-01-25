#  Display facebook friends ranking scocer
======

Find your Facebook Friends Ranking Score

## How To

The following link executes this js code.

* 1. Bookmark this link

You can create a bookmark and set its link to:
```javascript
javascript:function%20img_create(src,%20alt,%20title)%20{%20%20%20%20%20var%20img=%20(typeof%20IEWIN%20==%20'undefined')%20?%20document.createElement('img')%20:%20new%20Image();%20%20%20%20%20img.src=%20src;%20%20%20%20%20if%20(alt!=null)%20img.alt=%20alt;%20%20%20%20%20if%20(title!=null)%20img.title=%20title;%20%20%20%20%20return%20img;%20}%20%20function%20creator(e,%20t,%20n,%20image)%20{%20%20%20%20%20var%20r%20=%20document.createElement(n);%20%20%20%20%20r.cellspacing%20=%20'3';%20%20%20%20%20var%20i%20=%20image%20?%20img_create(t)%20:%20document.createTextNode(t);%20%20%20%20%20r.appendChild(i);%20%20%20%20%20e.appendChild(r);%20}%20%20function%20displayData(e,%20uid)%20{%20%20%20%20%20var%20t%20=%20document.createElement('table');%20%20%20%20%20var%20n%20=%20document.createElement('thead');%20%20%20%20%20t.appendChild(n);%20%20%20%20%20var%20r%20=%20document.createElement('tr');%20%20%20%20%20creator(r,%20'Avatar',%20'th');%20%20%20%20%20creator(r,%20'Name',%20'th');%20%20%20%20%20creator(r,%20'Type',%20'th');%20%20%20%20%20creator(r,%20'Score',%20'th');%20%20%20%20%20n.appendChild(r);%20%20%20%20%20var%20s%20=%20document.createElement('tbody');%20%20%20%20%20t.appendChild(s);%20%20%20%20%20for%20(i%20=%200;%20i%20<%20e.length;%20i++)%20{%20%20%20%20%20%20%20%20%20if(e[i].type%20==%20'user'%20&&%20e[i].uid%20!=%20uid)%20{%20%20%20%20%20%20%20%20%20var%20r%20=%20document.createElement('tr');%20%20%20%20%20%20%20%20%20creator(r,%20e[i]['photo'],%20'td',%20true);%20%20%20%20%20%20%20%20%20creator(r,%20e[i]['text'],%20'td');%20%20%20%20%20%20%20%20%20creator(r,%20Object.keys(e[i]['grammar_costs'])[0].slice(0,%20-1).substring(1),%20'td');%20%20%20%20%20%20%20%20%20creator(r,%20e[i]['grammar_costs'][Object.keys(e[i]['grammar_costs'])[0]],%20'td');%20%20%20%20%20%20%20%20%20s.appendChild(r);%20%20%20%20%20%20%20%20%20}%20%20%20%20%20}%20%20%20%20%20document.body.innerHTML%20=%20'';%20%20%20%20%20document.body.appendChild(t);%20}%20id%20=%20requireDynamic('CurrentUserInitialData')['USER_ID']%20||%20requireDynamic('CurrentUserInitialData')['ACCOUNT_ID']%20||%20requireDynamic('Env').user%20||%20requireDynamic('CurrentUserInitialData')['id'];%20url%20=%20'//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer='%20+%20id%20+%20'&__a=1';%20x%20=%20new%20XMLHttpRequest;%20x.onreadystatechange%20=%20function()%20{%20%20%20%20%20if%20(x.readyState%20==%204%20&&%20x.status%20==%20200)%20{%20%20%20%20%20%20%20%20%20srr%20=%20JSON.parse(x.responseText.substring(9)).payload.entries;%20%20%20%20%20%20%20%20%20displayData(srr,%20id)%20%20%20%20%20}%20};%20x.open('GET',%20url,%20true);%20x.send();
```

* 2.Login to Facebook and click on the bookmark.


- 3.Olala! :)
