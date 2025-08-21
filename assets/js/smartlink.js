const qs=new URLSearchParams(location.search);
const get=(k,d='')=>qs.get(k)||d;
const data={title:get('title','All Over Again'),subtitle:get('subtitle','Choose your platform'),cover:get('cover','/media/aoa_cover.jpg'),
hypeddit:get('hypeddit','https://hypeddit.com/2q33ey'),spotify:get('spotify',''),apple:get('apple',''),youtube:get('youtube',''),
soundcloud:get('soundcloud',''),deezer:get('deezer',''),tidal:get('tidal',''),bandcamp:get('bandcamp',''),audius:get('audius','')};
document.title=`${data.title} — Smartlink`;document.getElementById('title').textContent=data.title;
document.getElementById('subtitle').textContent=data.subtitle;document.getElementById('cover').src=data.cover;
const buttons=document.getElementById('buttons');const items=[['hypeddit','Pre‑Save / Smartlink'],['spotify','Play on Spotify'],['apple','Play on Apple Music'],['youtube','Watch on YouTube'],['soundcloud','Play on SoundCloud'],['deezer','Play on Deezer'],['tidal','Play on TIDAL'],['bandcamp','Buy on Bandcamp'],['audius','Play on Audius']];
items.forEach(([key,label])=>{const url=data[key];if(!url)return;const a=document.createElement('a');a.className='btn wide'+(key==='hypeddit'?' primary':'');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=label;buttons.appendChild(a);});
if(!buttons.children.length){const p=document.createElement('p');p.className='small';p.style.color='#bdbdbd';p.textContent='No platform links provided. Use /smartlink/builder.html to create your share URL.';buttons.appendChild(p);}