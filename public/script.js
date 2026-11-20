var $=function(s,e){return (e||document).querySelector(s)};

/* ===== idioma (PT/EN) e moeda (R$/US$) ===== */
var LANG='pt';try{LANG=localStorage.getItem('lg')||(((navigator.language||'pt').toLowerCase().indexOf('pt')===0)?'pt':'en')}catch(e){}
var USD_RATE=0.19; /* usado só quando um item não tem 'u' (preço em dólar) no data.js */
var EN_UI={'Início':'Home','Jogos':'Games','Preços':'Pricing','Contato':'Contact','Portfólio':'Portfolio','Alternar tema':'Toggle theme','sua mídia aqui':'your media here',
'Nenhum projeto ainda :(':'No projects yet :(','O que dizem os clientes':'What clients say','// últimos feedbacks':'// latest feedback','// vamos trabalhar juntos?':'// let’s work together?',
'Enviar e-mail':'Send email','Copiar':'Copy','Copiar usuário':'Copy username','Copiado ✓':'Copied ✓','Ver perfil no Roblox':'View Roblox profile','Entrar no servidor':'Join server','Abrir perfil':'Open profile',
'disponível para projetos':'available for projects','Ver trabalhos':'View work','Sobre mim':'About me','Em destaque':'Featured','trabalhos':'works','Trabalhos recentes':'Recent work','// ordenado por data':'// sorted by date','Experiência':'Experience',
'Gosto de unir código limpo e visual marcante, sempre pensando no desempenho em celulares e consoles.':'I like combining clean code with striking visuals, always keeping performance on phones and consoles in mind.',
'Jogos em que colaborei e jogos que criei do zero.':'Games I collaborated on and games I built from scratch.','Jogos em que trabalhei':'Games I worked on','// projetos de clientes e equipes':'// client and team projects','Jogos criados por mim':'Games I created','// projetos autorais':'// original projects','Nenhum jogo ainda :(':'No games yet :(',
'Abrir jogo ↗':'Open game ↗','Jogo privado':'Private game','Link em breve':'Link coming soon','Sob consulta':'On request','Quer saber mais?':'Want to know more?',
'Para mais informações, entre em contato: os preços e os prazos podem variar de acordo com a demanda de cada projeto.':'For more information, get in touch: prices and deadlines may vary depending on the demand of each project.',
'Falar comigo':'Talk to me','Sobre prazos e escopo':'About deadlines and scope','Valores de referência dos meus serviços e itens à venda, do trabalho simples ao grande.':'Reference prices for my services and items for sale, from simple to large jobs.',
'Serviços':'Services','// por tamanho do trabalho':'// by job size','À venda':'For sale','// packs e itens prontos':'// packs and ready-made items','Todos':'All','Nenhum item à venda ainda :(':'No items for sale yet :(','À venda · ':'For sale · ','Tenho interesse':'I’m interested',
'Não incluso no valor base':'Not included in the base price','// cobrado à parte':'// billed separately','Simples':'Simple','Médio':'Medium','Grande':'Large','Fechar':'Close','Valores em dólar (US$)':'Prices in US dollars'};
var TAG_EN={'Iluminação':'Lighting','Responsivo':'Responsive'},ST_EN={'Público':'Public','Privado':'Private','Acesso limitado':'Limited access'};
function L(){return LANG==='en'}
function tr(s){return L()&&EN_UI[s]!==undefined?EN_UI[s]:s}
function tg(t){return L()&&TAG_EN[t]?TAG_EN[t]:t}
function stl(s){return L()&&ST_EN[s]?ST_EN[s]:s}
function lw(o){if(!L()||!o||!o.en)return o;var r={},k;for(k in o)r[k]=o[k];for(k in o.en)r[k]=o.en[k];return r}
function ph(label,i){var h=[18,28,38,48,58][i%5],s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#1b1b20"/><g fill="#ffffff" opacity=".07">';
 for(var y=0;y<400;y+=20)for(var x=0;x<640;x+=20)s+='<circle cx="'+x+'" cy="'+y+'" r="1.4"/>';
 s+='</g><circle cx="'+(180+i*90)+'" cy="200" r="'+(70+h)+'" fill="#ff6a3d" opacity=".10"/><text x="320" y="205" fill="#8b8b95" font-family="monospace" font-size="16" text-anchor="middle">'+label+'</text><text x="320" y="230" fill="#55555d" font-family="monospace" font-size="11" text-anchor="middle">'+tr('sua mídia aqui')+' · img '+(i+1)+'</text></svg>';
 return 'data:image/svg+xml;utf8,'+encodeURIComponent(s)}
function src(w,i){var m=w.m[i];return m.src||ph(w.t,i)}
function media(w,i,big){var m=w.m[i];if(m.type==='video'&&m.src)return '<video src="'+m.src+(big?'':'#t=0.6')+'" '+(m.poster?'poster="'+m.poster+'" ':'')+'preload="metadata" playsinline '+(big?'controls autoplay':'muted loop')+'></video>'+(big?'':'<span class="play">▶</span>');return '<img src="'+src(w,i)+'" alt="'+w.t+'" loading="lazy">'}
function tmb(w,i){var m=w.m[i];if(m.type==='video'&&m.src)return '<video src="'+m.src+'#t=0.6" preload="metadata" muted playsinline></video><span class="play">▶</span>';return '<img src="'+src(w,i)+'" alt="">'}
function cat(id){var c=CATS.filter(function(c){return c[0]===id})[0];return (L()&&c&&c[3])?[c[0],c[3],c[4]||c[2]]:c}
function card(w0,idx){var w=lw(w0);return '<button class="item" data-i="'+idx+'"><div class="thumb">'+media(w,0,false)+'<span class="badge">'+cat(w.c)[1]+'</span></div><div class="meta"><h3>'+w.t+'</h3><p>'+w.txt+'</p></div></button>'}
function grid(list){if(!list.length)return '<div class="empty">'+tr('Nenhum projeto ainda :(')+'</div>';return '<div class="grid">'+list.map(function(w){return card(w,W.indexOf(w))}).join('')+'</div>'}
function reviews(){return '<div class="sec"><h2>'+tr('O que dizem os clientes')+'</h2><small>'+tr('// últimos feedbacks')+'</small></div><div class="rev">'+REV.map(function(r){return '<div class="r"><q>“'+(L()&&r[3]?r[3]:r[0])+'”</q><div><span>— '+r[2]+'</span><b>'+r[1]+'</b></div></div>'}).join('')+'</div>'}

function contact(){return '<div class="sec" id="contato" style="margin-top:56px"><h2>'+tr('Contato')+'</h2><small>'+tr('// vamos trabalhar juntos?')+'</small></div><div class="contact" style="margin-top:0"><div class="ct"><small>E-mail</small><b>'+ME.email+'</b><div><a class="btn p" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to='+ME.email+'">'+tr('Enviar e-mail')+'</a><button class="btn" data-copy="'+ME.email+'">'+tr('Copiar')+'</button></div></div><div class="ct"><small>Discord</small><b>'+ME.discord+'</b><div><button class="btn" data-copy="'+ME.discord+'">'+tr('Copiar usuário')+'</button>'+(ME.discordServer?'<a class="btn p" target="_blank" rel="noopener" href="'+ME.discordServer+'">'+tr('Entrar no servidor')+'</a>':'')+'</div></div>'+(ME.twitter?'<div class="ct"><small>X / Twitter</small><b>@'+ME.twitter+'</b><div><a class="btn p" target="_blank" rel="noopener" href="https://x.com/'+ME.twitter+'">'+tr('Abrir perfil')+'</a><button class="btn" data-copy="@'+ME.twitter+'">'+tr('Copiar usuário')+'</button></div></div>':'')+'</div>'}
function codeLines(){return L()?['<span class="c">-- welcome</span>','<span class="k">local function</span> welcome()','  print(<span class="k">"Welcome to my portfolio, enjoy :)"</span>)','<span class="k">end</span>','','welcome()','<span class="c">--> Welcome to my portfolio, enjoy :)</span>']:['<span class="c">-- boas-vindas</span>','<span class="k">local function</span> boasVindas()','  print(<span class="k">"Seja bem-vindo ao meu portfólio, aproveite :)"</span>)','<span class="k">end</span>','','boasVindas()','<span class="c">--> Seja bem-vindo ao meu portfólio, aproveite :)</span>']}
function avatar(){var id=ME.robloxId;if(!id)return '';return '<a class="avatar" target="_blank" rel="noopener" href="https://www.roblox.com/users/'+id+'/profile" title="'+tr('Ver perfil no Roblox')+'"><div class="av-img"><img src="https://www.roblox.com/avatar-thumbnail/image?userId='+id+'&width=420&height=420&format=png" alt="'+(L()?'Roblox avatar of ':'Avatar Roblox de ')+ME.user+'" onload="this.style.opacity=1" onerror="avFail(this)"></div><span class="mono">'+ME.user+'</span></a>'}
function avFail(img){var hide=function(){var a=img.closest('.avatar');if(a)a.style.display='none'};if(img.dataset.fb)return hide();img.dataset.fb=1;fetch('https://thumbnails.roproxy.com/v1/users/avatar?userIds='+ME.robloxId+'&size=420x420&format=Png&isCircular=false').then(function(r){return r.json()}).then(function(d){var u=d.data&&d.data[0]&&d.data[0].imageUrl;if(u)img.src=u;else hide()}).catch(hide)}
function home(){
 var bio=(L()&&ME.en)?ME.en.bio:ME.bio,exp=(L()&&ME.en)?ME.en.exp:ME.exp,feat=W.filter(function(w){return w.f}),rec=W.slice().sort(function(a,b){return b.d>a.d?1:-1}).slice(0,4);
 return '<section class="hero"><div><div class="eyebrow"><i></i>'+tr('disponível para projetos')+'</div><h1>'+ME.nome+'<br><span>Roblox developer.</span></h1><p class="lead">'+bio+'</p><div class="cta"><button class="btn p" data-go="modelagem">'+tr('Ver trabalhos')+'</button><button class="btn" data-go="inicio" id="sob">'+tr('Sobre mim')+'</button></div></div>'
 +'<div class="code"><div class="h"><i></i><i></i><i></i><span style="margin-left:8px">'+(L()?'Greeting':'Saudacao')+'.server.lua</span></div><pre id="cd"></pre></div></section>'
 +'<div class="stats">'+ME.stats.map(function(s,i){return '<div class="stat"><b>'+s[0]+'</b><span>'+((L()&&ME.en&&ME.en.stats&&ME.en.stats[i])||s[1])+'</span></div>'}).join('')+'</div>'
 +'<div class="sec"><h2>'+tr('Em destaque')+'</h2><small>// '+feat.length+' '+tr('trabalhos')+'</small></div>'+grid(feat)
 +'<div class="sec"><h2>'+tr('Trabalhos recentes')+'</h2><small>'+tr('// ordenado por data')+'</small></div>'+grid(rec)
 +'<div class="about" id="about"><div class="box"><h3>'+tr('Sobre mim')+'</h3><div class="me">'+avatar()+'<div><p>'+bio+' '+tr('Gosto de unir código limpo e visual marcante, sempre pensando no desempenho em celulares e consoles.')+'</p><div class="tags" style="margin-top:14px">'+['Luau','Blender','Studio','Node.js','SQL','Java','React-Native'].map(function(t){return '<span class="tag">'+t+'</span>'}).join('')+'</div></div></div></div><div class="box"><h3>'+tr('Experiência')+'</h3><ul class="tl">'+exp.map(function(e){return '<li><em>'+e[0]+'</em><span>'+e[1]+'</span></li>'}).join('')+'</ul></div></div>'+reviews()+contact()}
function catView(id){var c=cat(id);return '<div class="pagehead"><div class="eyebrow">/'+id+'</div><h1>'+c[1]+'</h1><p class="lead">'+c[2]+'</p></div>'+grid(W.filter(function(w){return w.c===id}))}



var GRP=[['trabalhei','Jogos em que trabalhei','// projetos de clientes e equipes'],['meu','Jogos criados por mim','// projetos autorais']];
function gw(x){return {t:x.t,txt:x.txt,g:x,m:(function(){var l=(x.img?[{src:x.img}]:[]).concat(x.m||[]);return l.length?l:[{}]})()}}
function ginfo(x){var ok=x.url&&x.status!=='Privado',st={'Público':'pub','Acesso limitado':'lim','Privado':'prv'}[x.status]||'prv';return '<div class="info"><div class="tags" style="margin-bottom:10px"><span class="tag">'+x.platform+'</span><span class="st '+st+'"><i></i>'+stl(x.status)+'</span></div><h2>'+x.t+'</h2>'+(x.role?'<small class="role">'+x.role+'</small>':'')+'<p style="margin-top:8px">'+x.txt+'</p>'+(ok?'<a class="btn p" target="_blank" rel="noopener" href="'+x.url+'">'+tr('Abrir jogo ↗')+'</a>':'<span class="btn off">'+(x.status==='Privado'?tr('Jogo privado'):tr('Link em breve'))+'</span>')+'</div>'}
function gcard(x0){var x=lw(x0),im=media(gw(x),0,false),st={'Público':'pub','Acesso limitado':'lim','Privado':'prv'}[x.status]||'prv',ok=x.url&&x.status!=='Privado';
 return '<article class="game" data-g="'+G.indexOf(x0)+'"><div class="thumb">'+im+'<span class="badge">'+x.platform+'</span></div><div class="meta"><div class="gh"><h3>'+x.t+'</h3><span class="st '+st+'"><i></i>'+stl(x.status)+'</span></div>'+(x.role?'<small class="role">'+x.role+'</small>':'')+'<p>'+x.txt+'</p>'+(ok?'<a class="btn p" target="_blank" rel="noopener" href="'+x.url+'">'+tr('Abrir jogo ↗')+'</a>':'<span class="btn off">'+(x.status==='Privado'?tr('Jogo privado'):tr('Link em breve'))+'</span>')+'</div></article>'}
function gamesView(){return '<div class="pagehead"><div class="eyebrow">/'+(L()?'games':'jogos')+'</div><h1>'+tr('Jogos')+'</h1><p class="lead">'+tr('Jogos em que colaborei e jogos que criei do zero.')+'</p></div>'+GRP.map(function(p){var l=G.filter(function(x){return x.g===p[0]});return '<div class="sec"><h2>'+tr(p[1])+'</h2><small>'+tr(p[2])+'</small></div>'+(l.length?'<div class="grid games">'+l.map(gcard).join('')+'</div>':'<div class="empty">'+tr('Nenhum jogo ainda :(')+'</div>')}).join('')}

/* preços */
function nf(n){return n.toLocaleString(L()?'en-US':'pt-BR')}
function usdOf(p){return p.map(function(v,i){if(i>1||v==null)return v;var u=v*USD_RATE;return u>=50?Math.round(u/5)*5:Math.max(1,Math.round(u))})}
function pickP(x,k){var v=x[k];if(!L()||!v)return v;var u=x[k==='p'?'u':'uold'];return u||usdOf(v)}
function pr(p){var s=(L()?'$':'R$ ')+nf(p[0]);if(p[1]!=null)s+=(L()?' – ':' a ')+nf(p[1]);if(p[2])s+=p[2];return s}
function mid(p){return p[1]!=null?(p[0]+p[1])/2:p[0]}
function dscPct(p,o){return Math.round((1-mid(p)/mid(o))*100)}
function priceHtml(x){var P=pickP(x,'p'),O=x.old?pickP(x,'old'):null;if(!P)return '<b class="now">'+tr('Sob consulta')+'</b>';var pc=O?dscPct(P,O):0;return (O?'<s class="old">'+pr(O)+'</s>':'')+'<b class="now">'+pr(P)+'</b>'+(pc>0?'<span class="dsc">-'+pc+'%</span>':'')}
function noteBox(){return '<div class="note"><div><b>'+tr('Quer saber mais?')+'</b><p>'+tr('Para mais informações, entre em contato: os preços e os prazos podem variar de acordo com a demanda de cada projeto.')+'</p></div><button class="btn p" data-go="contato">'+tr('Falar comigo')+'</button></div>'}
var SF='todos';
function sw(x){return {t:x.t,txt:x.d,s:x,m:(x.m&&x.m.length)?x.m:[{}]}}
function cn(k){return cat(k)?cat(k)[1]:k}
function scard(x0,i){var x=lw(x0);return '<button class="item sale" data-s="'+i+'"><div class="thumb">'+media(sw(x),0,false)+'<span class="badge">'+cn(x.c)+'</span></div><div class="meta"><h3>'+x.t+'</h3><p>'+x.d+'</p><div class="sp">'+priceHtml(x)+'</div></div></button>'}
function sinfo(x){return '<div class="info"><div class="tags" style="margin-bottom:10px"><span class="tag">'+tr('À venda · ')+cn(x.c)+'</span></div><h2>'+x.t+'</h2><div class="sp lg">'+priceHtml(x)+'</div><p style="margin-top:12px">'+x.d+'</p>'+((x.tags&&x.tags.length)?'<div class="tags" style="margin-bottom:16px">'+x.tags.map(function(t){return '<span class="tag">'+tg(t)+'</span>'}).join('')+'</div>':'')+'<button class="btn p" data-go="contato">'+tr('Tenho interesse')+'</button></div>'}
function storeInner(){var cs=['todos'].concat(CATS.map(function(c){return c[0]})),
 chips=STORE.length?'<div class="chips">'+cs.map(function(k){return '<button class="chip'+(SF===k?' on':'')+'" data-f="'+k+'">'+(k==='todos'?tr('Todos'):cn(k))+'</button>'}).join('')+'</div>':'',
 l=STORE.map(function(x,i){return [x,i]}).filter(function(p){return SF==='todos'||p[0].c===SF});
 return chips+(l.length?'<div class="grid">'+l.map(function(p){return scard(p[0],p[1])}).join('')+'</div>':'<div class="empty">'+tr('Nenhum item à venda ainda :(')+'</div>')}
function precosView(){
 var cards=PRICES.map(function(c0){var c=lw(c0);return '<div class="box pc"><div class="pch"><h3>'+c.t+'</h3><span class="tag">'+c.h+'</span></div>'+c.tiers.map(function(t0){var t=lw(t0);return '<div class="tier"><div class="tn"><span class="tag">'+tr(t.n)+'</span><p>'+t.d+'</p></div><div class="tp">'+priceHtml(t)+'</div></div>'}).join('')+'</div>'}).join('');
 var extras=EXTRAS.map(function(g0){var g=lw(g0);return '<div class="box"><h3>'+g.t+'</h3>'+g.i.map(function(x){return '<div class="ex"><b>'+((L()&&x[2])||x[0])+'</b><p>'+((L()&&x[3])||x[1])+'</p></div>'}).join('')+'</div>'}).join('');
 return '<div class="pagehead"><div class="eyebrow">/'+(L()?'pricing':'precos')+'</div><h1>'+tr('Preços')+'</h1><p class="lead">'+tr('Valores de referência dos meus serviços e itens à venda, do trabalho simples ao grande.')+'</p></div>'+noteBox()+'<div class="note soft"><div><b>'+tr('Sobre prazos e escopo')+'</b><p>'+((L()&&typeof NOTA_EN!=='undefined')?NOTA_EN:NOTA)+'</p></div></div><div class="sec"><h2>'+tr('Serviços')+'</h2><small>'+tr('// por tamanho do trabalho')+'</small></div><div class="prices">'+cards+'</div><div class="sec"><h2>'+tr('À venda')+'</h2><small>'+tr('// packs e itens prontos')+'</small></div><div id="store">'+storeInner()+'</div><div class="sec"><h2>'+tr('Não incluso no valor base')+'</h2><small>'+tr('// cobrado à parte')+'</small></div><div class="prices">'+extras+'</div><p class="fine">'+((L()&&typeof RODAPE_EN!=='undefined')?RODAPE_EN:RODAPE)+'</p>'+noteBox()}

var cur='inicio';
function nav(){$('#nav').innerHTML=[['inicio','Início']].concat(CATS.map(function(c){return [c[0],cat(c[0])[1]]})).concat([['jogos','Jogos'],['precos','Preços'],['contato','Contato']]).map(function(t){return '<button data-go="'+t[0]+'" class="'+(t[0]===cur?'on':'')+'">'+tr(t[1])+'</button>'}).join('')}
function show(id,noHash){menu(false);closeM();if(id!=='inicio'&&id!=='jogos'&&id!=='precos'&&!cat(id))id='inicio';cur=id;nav();$('#main').innerHTML='<div class="view on">'+(id==='inicio'?home():id==='jogos'?gamesView():id==='precos'?precosView():catView(id))+'</div>';if(id==='inicio')type();window.scrollTo({top:0});if(!noHash)location.hash=id}
function menu(o){var n=$('#nav'),b=$('#burger');n.classList.toggle('open',o);b.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}
$('#burger').onclick=function(e){e.stopPropagation();menu(!$('#nav').classList.contains('open'))};
document.addEventListener('click',function(e){if(!e.target.closest('#nav'))menu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
var tm;function type(){clearTimeout(tm);var el=$('#cd'),full=codeLines().join('\n'),n=0;(function t(){if(!$('#cd'))return;n+=2;var s=full.slice(0,n),o=0,r='';el.innerHTML=full.slice(0,n).length?strip(n):'';if(n<full.length)tm=setTimeout(t,28)})()}
function strip(n){/* digita preservando spans */var out='',vis=0,i=0,h=codeLines().join('\n');while(i<h.length&&vis<n){if(h[i]==='<'){var j=h.indexOf('>',i);out+=h.slice(i,j+1);i=j+1}else{out+=h[i]==='&'?'&':h[i];vis++;i++}}return out.replace(/<(?!\/?span)/g,'&lt;')}
document.addEventListener('click',function(e){var g=e.target.closest('[data-go]');if(g){if(g.dataset.go==='contato'){show('inicio');setTimeout(function(){var a=$('#contato');a&&a.scrollIntoView({behavior:'smooth'})},80);return}if(g.id==='sob'){show('inicio');setTimeout(function(){var a=$('#about');a&&a.scrollIntoView({behavior:'smooth'})},80);return}show(g.dataset.go);return}var it=e.target.closest('.item');if(it&&!it.classList.contains('sale'))openM(+it.dataset.i);var sl=e.target.closest('.sale');if(sl)openS(+sl.dataset.s);var gm=e.target.closest('.game');if(gm&&!e.target.closest('a'))openG(+gm.dataset.g)});
window.addEventListener('hashchange',function(){var h=location.hash.slice(1)||'inicio';if(h!==cur)show(h,true)});

document.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var o=b.textContent;function ok(){b.textContent=tr('Copiado ✓');setTimeout(function(){b.textContent=o},1500)}try{navigator.clipboard.writeText(b.dataset.copy).then(ok,function(){})}catch(x){}});
document.addEventListener('click',function(e){var f=e.target.closest('[data-f]');if(!f)return;SF=f.dataset.f;var s=$('#store');if(s)s.innerHTML=storeInner()});
/* modal */
var W0,P=0;
function openS(i){W0=sw(lw(STORE[i]));P=0;$('#modal').classList.remove('nowm');renderM();$('#modal').classList.add('on');document.body.style.overflow='hidden'}
function openG(i){W0=gw(lw(G[i]));P=0;renderM();$('#modal').classList.add('on','nowm');document.body.style.overflow='hidden'}
function openM(i){W0=lw(W[i]);P=0;$('#modal').classList.remove('nowm');renderM();$('#modal').classList.add('on');document.body.style.overflow='hidden'}
function closeM(){$('#modal').classList.remove('on');document.body.style.overflow='';$('#sheet').innerHTML=''}
function renderM(){var w=W0,n=w.m.length;$('#sheet').innerHTML='<div class="stage"><button class="x" id="cx" aria-label="'+tr('Fechar')+'">✕</button>'+media(w,P,true)+(n>1?'<button class="nv l" id="pv">←</button><button class="nv r2" id="nx">→</button>':'')+'</div>'
 +(n>1?'<div class="thumbs">'+w.m.map(function(m,i){return '<button data-p="'+i+'" class="'+(i===P?'on':'')+'">'+tmb(w,i)+'</button>'}).join('')+'</div>':'')
 +(w.g?ginfo(w.g):w.s?sinfo(w.s):'<div class="info"><span class="tag">'+cat(w.c)[1]+' · '+w.d+'</span><h2>'+w.t+'</h2><p>'+w.txt+'</p><div class="tags">'+w.tags.map(function(t){return '<span class="tag">'+tg(t)+'</span>'}).join('')+'</div></div>')}
function step(d){P=(P+d+W0.m.length)%W0.m.length;renderM()}
$('#modal').addEventListener('click',function(e){var t=e.target;if(t.id==='modal'||t.id==='cx')closeM();else if(t.id==='pv')step(-1);else if(t.id==='nx')step(1);else{var b=t.closest('[data-p]');if(b){P=+b.dataset.p;renderM()}}});
document.addEventListener('keydown',function(e){if(!$('#modal').classList.contains('on'))return;if(e.key==='Escape')closeM();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
var sx=0;$('#modal').addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
$('#modal').addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>60&&W0.m.length>1)step(d<0?1:-1)});

/* idioma */
function applyLang(){document.documentElement.lang=L()?'en':'pt-BR';var b=$('#lang');if(b){b.textContent=L()?'PT':'EN';b.setAttribute('aria-label',L()?'Mudar para português':'Switch to English');b.title=L()?'Português (R$)':'English (US$)'}
 $('#theme').setAttribute('aria-label',tr('Alternar tema'));var f=$('#ft');if(f)f.innerHTML=L()?'© 2026 · made with Luau and coffee · <span style="color:var(--ac)">●</span> available for projects':'© 2026 · feito com Luau e café · <span style="color:var(--ac)">●</span> disponível para projetos';document.title=tr('Portfólio')+' · '+ME.nome}
function setLang(l){LANG=l;try{localStorage.setItem('lg',l)}catch(e){}applyLang();var y=window.scrollY;show(cur,true);window.scrollTo({top:y,behavior:'instant'})}
$('#lang').onclick=function(){setLang(L()?'pt':'en')};

/* avisa no console se alguma mídia não carregar (ex.: nome com maiúscula/minúscula errada) */
window.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName&&(t.tagName==='IMG'||t.tagName==='VIDEO')&&t.src&&t.src.indexOf('data:')!==0)console.warn('Mídia não encontrada:',t.getAttribute('src'))},true);

/* tema */
var root=document.documentElement;
function setTheme(t){root.setAttribute('data-theme',t);try{localStorage.setItem('th',t)}catch(e){}dotc()}
$('#theme').onclick=function(){setTheme(root.getAttribute('data-theme')==='light'?'dark':'light')};
var st='dark';try{st=localStorage.getItem('th')||'dark'}catch(e){}root.setAttribute('data-theme',st);

/* fundo: onda de pontilhados */
var cv=$('#bg'),cx=cv.getContext('2d'),DW,DH,GAP=28,mx=-999,my=-999,tx=-999,ty=-999,t0=0,rip=[],dc='255,255,255',still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function dotc(){dc=getComputedStyle(root).getPropertyValue('--dot').trim()}
function rs(){var r=devicePixelRatio||1;DW=innerWidth;DH=innerHeight;cv.width=DW*r;cv.height=DH*r;cx.setTransform(r,0,0,r,0,0)}
addEventListener('resize',rs);
function mv(x,y){tx=x;ty=y;if(!t0||performance.now()-t0>140){rip.push({x:x,y:y,t:performance.now()});if(rip.length>6)rip.shift();t0=performance.now()}}
addEventListener('mousemove',function(e){mv(e.clientX,e.clientY)});
addEventListener('touchmove',function(e){mv(e.touches[0].clientX,e.touches[0].clientY)},{passive:true});
addEventListener('click',function(e){rip.push({x:e.clientX,y:e.clientY,t:performance.now()-200})});
function draw(now){cx.clearRect(0,0,DW,DH);mx+=(tx-mx)*.12;my+=(ty-my)*.12;
 rip=rip.filter(function(r){return now-r.t<2200});
 for(var y=GAP/2;y<DH;y+=GAP)for(var x=GAP/2;x<DW;x+=GAP){
  var dx=x-mx,dy=y-my,d=Math.sqrt(dx*dx+dy*dy),g=Math.max(0,1-d/190),a=.08+g*.2,r=1+g*1.1,ox=0,oy=0;
  for(var k=0;k<rip.length;k++){var q=rip[k],age=(now-q.t)/1000,rx=x-q.x,ry=y-q.y,rd=Math.sqrt(rx*rx+ry*ry),front=age*260,w=Math.exp(-Math.pow((rd-front)/55,2))*Math.exp(-age*1.3);if(w>.01){r+=w*1.5;a+=w*.16;ox+=rx/(rd||1)*w*5;oy+=ry/(rd||1)*w*5}}
  cx.fillStyle='rgba('+dc+','+Math.min(a,.42)+')';cx.beginPath();cx.arc(x+ox,y+oy,r,0,6.283);cx.fill()}
 if(!still)requestAnimationFrame(draw)}
rs();dotc();requestAnimationFrame(draw);

applyLang();
show((location.hash.slice(1)||'inicio'),true);