/* RVNOISE fitur tambahan: chat, grup, stiker, game match, reels, sorotan, pengaturan, komentar berbalas, live suara, keamanan */
import {getCountFromServer,doc,getDoc,setDoc,updateDoc,deleteDoc,addDoc,collection,query,where,orderBy,limit,onSnapshot,getDocs,serverTimestamp,writeBatch,increment,arrayUnion,arrayRemove} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";
import {EmailAuthProvider,GoogleAuthProvider,reauthenticateWithCredential,reauthenticateWithPopup,deleteUser,sendPasswordResetEmail,sendEmailVerification} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

export function install(X){
const {S,db,auth,$,$$,esc,fmt,ago,toast,errMsg,shrink,shrinkSq,cutout,sheet,closeSheet,back,ic,I,av,nameOf,getUser,go,SK,BLUE,isBlue,kfmt,nv,pushNotif,card,hydrate,ACT,ADM,OFFICIAL_UID,mkind,qd,purgeUser,CLOUD,getCat,catIcon,TIER}=X;
const views={},A={};
const sv=p=>`<svg viewBox="0 0 24 24">${p}</svg>`;
const addI=(k,p)=>{if(!I[k])I[k]=sv(p)};
addI('users','<circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16 5.5a3 3 0 0 1 0 5.6M17.5 14c2 .5 3.5 2.2 3.5 5"/>');
addI('game','<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M8 10.5v4M6 12.5h4"/><circle cx="15.5" cy="11.5" r=".6"/><circle cx="17.5" cy="13.5" r=".6"/>');
addI('micoff','<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M4 4l16 16"/>');
addI('play','<path d="M7 4l13 8-13 8z"/>');
addI('pin','<path d="M9 3h6l-1 6 3 3v1.5H7V12l3-3z"/><path d="M12 14v7"/>');
addI('flag','<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>');
addI('trash','<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>');
addI('reply','<path d="M9 7 4 12l5 5"/><path d="M4 12h9a7 7 0 0 1 7 7"/>');
addI('vol','<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>');
addI('mute','<path d="M4 9v6h4l5 4V5L8 9z"/><path d="m17 9 4 6M21 9l-4 6"/>');
addI('sticker','<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2z"/><path d="M14 20v-4a2 2 0 0 1 2-2h4"/><circle cx="9" cy="10" r=".8"/><circle cx="14" cy="10" r=".8"/>');
addI('palette','<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2.2-.6-1.4.2-2.8 1.8-2.8H18a3 3 0 0 0 3-3C21 6.5 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15.5" cy="7.5" r="1"/>');
addI('shield','<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/>');
addI('lock','<rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>');
addI('mail','<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 8 6 8-6"/>');
addI('refresh','<path d="M20 11a8 8 0 0 0-14-4L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14 4l2-2"/><path d="M20 20v-5h-5"/>');
addI('upload','<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>');
addI('play','<path d="M8 5v14l11-7z"/>');
addI('gear','<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>');
addI('heart2','<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>');
addI('archive','<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4"/>');
addI('inbox','<path d="M4 13 6.5 5h11L20 13v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 13h4l1 2h6l1-2h4"/>');
addI('check2','<path d="m5 12.5 4.5 4.5L19 7.5"/>');

/* ---------- util ---------- */
const hm=t=>{const d=t?.toDate?t.toDate():new Date();return d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}).replace(':','.')};
const dayLbl=t=>{const d=t?.toDate?t.toDate():new Date(),n=new Date(),y=new Date(Date.now()-864e5),same=(a,b)=>a.toDateString()==b.toDateString();return same(d,n)?'Hari ini':same(d,y)?'Kemarin':d.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})};
const ms=t=>t?.toMillis?t.toMillis():Date.now();
const jbtn=(a,i,extra='')=>`<button class="ib" data-act="${a}" ${extra}>${I[i]}</button>`;
const toBlob=f=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)});

/* ---------- KEAMANAN: filter kata kasar otomatis ---------- */
const BAD_LONG=['kontol','memek','ngentot','bangsat','bajingan','jancok','jancuk','pepek','anjing','pelacur','bokep','ngewe','fuck','shit','bitch','asshole','pussy','nigger','nigga','whore','cunt','porn','goblok','tolol','kampret','brengsek','sialan','lonte','jablay','keparat','cabul','titit'];
const BAD_SHORT=['asu','tai','babi','coli','dick','slut','rape','anjg','bgst','kntl','mmk','pantek','perek','jembut','itil'];
const LEET={'0':'o','1':'i','3':'e','4':'a','5':'s','7':'t','@':'a','$':'s','!':'i','8':'b'};
const norm=s=>String(s||'').toLowerCase().replace(/[013457@$!8]/g,c=>LEET[c]||c).replace(/(.)\1{2,}/g,'$1$1');
const squash=s=>norm(s).replace(/[^a-z]/g,'').replace(/(.)\1+/g,'$1');
const reTok=new RegExp('(^|[^a-z])('+[...BAD_LONG,...BAD_SHORT].join('|')+')(?=$|[^a-z])','gi');
const isBad=s=>{if(!s)return false;const n=norm(s);reTok.lastIndex=0;if(reTok.test(n))return true;const q=squash(s);return BAD_LONG.some(w=>q.includes(w.replace(/(.)\1+/g,'$1')))};
const tokHit=s=>{const n=norm(s);reTok.lastIndex=0;return reTok.test(n)};
const mask=s=>{s=String(s||'');if(!isBad(s))return s;return s.replace(/[\p{L}\p{N}@$!]+/gu,w=>isBad(' '+w+' ')?'*'.repeat(Math.min(w.length,6)):w)};
function logMod(area,text){try{addDoc(collection(db,'modLog'),{uid:S.uid||'',area,sample:String(text).slice(0,80),at:serverTimestamp()}).catch(()=>{})}catch{}}
function guard(text,area,hard=false){if(!isBad(text))return true;logMod(area,text);toast(hard?'Kata tidak pantas terdeteksi. Ganti dulu ya.':'Pesan mengandung kata terlarang dan tidak dikirim');return false}
const safe=s=>fmt(mask(s));

/* ---------- CHAT ---------- */
async function loadPrefs(){try{const s=await getDocs(collection(db,'users',S.uid,'chatPrefs'));S.cpref=Object.fromEntries(s.docs.map(d=>[d.id,d.data()]))}catch{S.cpref=S.cpref||{}}}
const chatOther=c=>c.isGroup?null:c.members.find(x=>x!=S.uid);
views.chats=async function(){const t=S.tok,m=$('#main'),tab=S.ctab||'all';
m.innerHTML=`${back('home')}Pesan</h3><span class="sp"></span><button class="ib" data-act="gamehub" aria-label="Game">${I.game}</button><button class="ib" data-act="newgroup" aria-label="Grup baru">${I.users}</button><button class="btn sm" data-act="newchat">+ Baru</button></div><div class="seg" id="ctabs"></div><div id="cl2" class="card">${'<div class="chat-item"><div class="sk av"></div><div class="sk" style="height:14px;width:50%"></div></div>'.repeat(3)}</div>`;
if(!S.cpref)await loadPrefs();
const all=S.chats.filter(c=>c.lastAt||c.isGroup).sort((a,b)=>ms(b.lastAt||b.createdAt)-ms(a.lastAt||a.createdAt));
const arch=c=>!!S.cpref?.[c.id]?.archived,reqIn=c=>!c.isGroup&&c.req===true&&c.reqFrom&&c.reqFrom!=S.uid;
const lists={all:all.filter(c=>!arch(c)&&!reqIn(c)),req:all.filter(c=>!arch(c)&&reqIn(c)),arc:all.filter(arch)};
await Promise.all(all.flatMap(c=>c.isGroup?[]:[getUser(chatOther(c))]));if(t!==S.tok)return;
$('#ctabs').innerHTML=[['all','Semua',0],['req','Permintaan',lists.req.length],['arc','Arsip',0]].map(([k,l,n])=>`<button class="${tab==k?'on':''}" data-act="ctab" data-t="${k}">${l}${n?` <span class="pill b">${n}</span>`:''}</button>`).join('');
const L=lists[tab];$('#cl2').innerHTML=L.length?L.map(c=>{const g=c.isGroup,u=g?null:S.users[chatOther(c)],a=g?(c.photo?`<img class="av" src="${esc(c.photo)}" alt="">`:`<div class="av">${esc((c.name||'G')[0].toUpperCase())}</div>`):av(u);
return`<div class="chat-item" data-act="go" data-v="thread" data-a="${g?'g:'+c.id:u.uid}">${a}<div class="sp"><div>${g?`<span class="nm">${esc(c.name)}</span> <span class="pill b">${c.kind=='family'?'Family':'Grup'}</span>`:nameOf(u)}</div><div class="un">${c.lastFrom==S.uid?'Kamu: ':''}${esc(mask((c.last||'').slice(0,50)))}${!g&&c.req&&c.reqFrom==S.uid?' · menunggu diterima':''}</div></div><div style="text-align:right"><div class="un">${c.lastAt?hm(c.lastAt):''}</div><button class="ib" data-act="carch" data-id="${c.id}" aria-label="${tab=='arc'?'Keluarkan dari arsip':'Arsipkan'}">${tab=='arc'?I.inbox:I.archive}</button></div></div>`}).join(''):`<p class="mut c pad">${tab=='req'?'Tidak ada permintaan pesan.':tab=='arc'?'Arsip kosong.':'Belum ada percakapan. Tekan “+ Baru” atau buat grup.'}</p>`};
A.ctab=e=>{S.ctab=e.dataset.t;views.chats()};
A.carch=async e=>{const id=e.dataset.id,on=!S.cpref?.[id]?.archived;S.cpref=S.cpref||{};S.cpref[id]={archived:on};await setDoc(doc(db,'users',S.uid,'chatPrefs',id),{archived:on});toast(on?'Chat diarsipkan':'Dikeluarkan dari arsip');views.chats()};
A.newchat=async()=>{const n=(prompt('Username tujuan:')||'').trim().toLowerCase().replace('@','');if(!n)return;const s=await getDoc(doc(db,'usernames',n));if(!s.exists())return toast('Username tidak ditemukan');if(s.data().uid==S.uid)return toast('Itu kamu sendiri');go('thread',s.data().uid)};

views.thread=async function(arg){const t=S.tok,isG=String(arg).startsWith('g:');let cid,o=null,g=null,cd=null;
if(isG){cid=arg.slice(2);const s=await getDoc(doc(db,'chats',cid)).catch(()=>null);if(!s||!s.exists()){toast('Grup tidak ditemukan');return go('chats')}g={id:cid,...s.data()};cd=g;await Promise.all(g.members.map(getUser))}
else{o=await getUser(arg);cid=[S.uid,arg].sort().join('_');const s=await getDoc(doc(db,'chats',cid)).catch(()=>null);cd=s&&s.exists()?{id:cid,...s.data()}:null}
if(t!==S.tok)return;S.cid=cid;S.rt=null;
const head=isG?`<span data-act="ginfo" data-id="${cid}">${g.photo?`<img class="av" src="${esc(g.photo)}" alt="">`:`<div class="av">${esc((g.name||'G')[0].toUpperCase())}</div>`}</span><div data-act="ginfo" data-id="${cid}"><span class="nm">${esc(g.name)}</span><div class="un">${g.members.length} anggota · ${g.kind=='family'?'Family':'Grup'}</div></div>`:`<span data-act="go" data-v="profile" data-a="${arg}">${av(o)}</span><div>${nameOf(o)}<div class="un">@${esc(o.username)}</div></div>`;
$('#main').innerHTML=`<div class="row pad glass" style="position:sticky;top:60px;z-index:10;border-radius:0 0 20px 20px"><button class="ib" data-act="go" data-v="chats">${I.back}</button>${head}<span class="sp"></span>${isG?'':`<button class="ib" data-act="carch" data-id="${cid}" aria-label="Arsipkan">${I.archive}</button>`}</div><div id="rq"></div><div class="msgs" id="ms"><p class="mut c">${cd?'Memuat…':'Belum ada pesan. Sapa duluan!'}</p></div>
<div class="compose glass"><label class="ib" style="margin:0;cursor:pointer">${ic('clip')}<input id="m_im" type="file" accept="image/*" hidden></label><button class="ib" data-act="stkopen" aria-label="Stiker">${I.sticker}</button><input id="m_in" placeholder="Tulis pesan…" maxlength="1000"><button class="btn sm" data-act="sendmsg" data-o="${arg}">${I.send.replace('<svg','<svg style="width:20px;height:20px;stroke:#fff"')}</button></div>`;
const showReq=()=>{const r=$('#rq');if(!r)return;r.innerHTML=cd&&!isG&&cd.req&&cd.reqFrom&&cd.reqFrom!=S.uid?`<div class="card pad" style="margin:8px 12px"><b>Permintaan pesan</b><p class="mut" style="margin:4px 0 10px">@${esc(o.username)} belum saling follow denganmu. Terima untuk membalas.</p><div class="row"><button class="btn sm" data-act="reqok">Terima</button><button class="btn sm soft" data-act="carch" data-id="${cid}">Abaikan</button></div></div>`:''};showReq();
S.rt={cid,isG,arg,cd,o,g,showReq,started:false};
const start=()=>{if(S.rt.started)return;S.rt.started=true;S.vu.push(onSnapshot(query(collection(db,'chats',cid,'messages'),orderBy('createdAt','asc'),limit(300)),async s=>{const l=$('#ms');if(!l)return;const ids=[...new Set(s.docs.map(d=>d.data().from))];await Promise.all(ids.map(getUser));let last='',h='';
s.docs.forEach(d=>{const x=d.data(),dl=dayLbl(x.createdAt);if(dl!==last){h+=`<div class="dsep"><span>${dl}</span></div>`;last=dl}const me=x.from==S.uid,sn=isG&&!me?`<div class="sn">${esc(S.users[x.from]?.displayName||S.users[x.from]?.username||'')}</div>`:'';
if(x.kind=='sticker'||x.kind=='gif')h+=`<div class="stk ${me?'me':'th'}">${sn}<img src="${esc(x.img)}" alt=""><span class="tm">${hm(x.createdAt)}</span></div>`;
else h+=`<div class="bub ${me?'me':'th'}">${sn}${x.img?`<img src="${esc(x.img)}" alt="">`:''}${esc(mask(x.text))}<span class="tm">${hm(x.createdAt)}</span></div>`});
l.innerHTML=h||'<p class="mut c">Belum ada pesan. Sapa duluan!</p>';requestAnimationFrame(()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:'auto'}))},e=>toast(errMsg(e))))};
S.rt.start=start;if(cd)start();
$('#m_in').addEventListener('keydown',e=>{if(e.key=='Enter')$('[data-act=sendmsg]').click()});
$('#m_im').addEventListener('change',async e=>{const f=e.target.files[0];if(f)sendAny({img:await shrink(f,700,.7)})})};
async function sendAny({text='',img='',kind=''}){const R=S.rt;if(!R)return;text=(text||'').trim();if(!text&&!img)return;if(text&&!guard(text,'chat'))return;
try{if(!R.isG&&!R.cd){const mutual=S.following.has(R.arg)&&await getDoc(doc(db,'follows',R.arg+'_'+S.uid)).then(d=>d.exists()).catch(()=>false);
if(R.o?.privacy?.dm=='mutual'&&!mutual)return toast('Pengguna ini hanya menerima pesan dari teman yang saling follow');
const data={members:[S.uid,R.arg].sort(),req:!mutual,reqFrom:S.uid};await setDoc(doc(db,'chats',R.cid),data);R.cd={id:R.cid,...data};R.start()}
const b=writeBatch(db);b.set(doc(collection(db,'chats',R.cid,'messages')),{from:S.uid,text,img,kind:kind||(img?'img':'text'),createdAt:serverTimestamp()});
const up={last:kind=='sticker'?'Stiker':kind=='gif'?'GIF':img?'Foto':text.slice(0,80),lastAt:serverTimestamp(),lastFrom:S.uid};if(R.cd?.req&&R.cd.reqFrom!=S.uid){up.req=false;R.cd.req=false;R.showReq()}
b.update(doc(db,'chats',R.cid),up);await b.commit()}catch(e){toast(errMsg(e))}}
A.sendmsg=()=>{const i=$('#m_in');const t=i.value;i.value='';sendAny({text:t})};
A.reqok=async()=>{const R=S.rt;if(!R)return;await updateDoc(doc(db,'chats',R.cid),{req:false});R.cd.req=false;R.showReq();toast('Permintaan diterima')};

/* ---------- STIKER & GIF ---------- */
async function loadStk(){try{const s=await getDocs(collection(db,'users',S.uid,'stickers'));S.stk=s.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>ms(b.at)-ms(a.at))}catch{S.stk=S.stk||[]}}
async function stkSheet(){if(!S.stk)await loadStk();const st=S.stk.filter(x=>x.kind!='gif'),gf=S.stk.filter(x=>x.kind=='gif');
const grid=l=>l.length?`<div class="stkgrid">${l.map(x=>`<div class="stkc"><button data-act="stksend" data-id="${x.id}"><img src="${esc(x.img)}" alt=""></button><button class="stkx" data-act="stkdel" data-id="${x.id}" aria-label="Hapus">${I.x}</button></div>`).join('')}</div>`:'<p class="mut">Belum ada.</p>';
sheet(`<h3>Stiker &amp; GIF</h3><div class="row" style="flex-wrap:wrap;margin:8px 0"><label class="btn sm soft" style="cursor:pointer">${I.plus.replace('<svg','<svg style="width:16px;height:16px"')} Buat stiker<input id="sk_f" type="file" accept="image/*" hidden></label><label class="btn sm soft" style="cursor:pointer">${I.plus.replace('<svg','<svg style="width:16px;height:16px"')} Tambah GIF<input id="gf_f" type="file" accept="image/gif" hidden></label></div><label class="row" style="gap:8px;margin:0 0 8px"><input id="sk_bg" type="checkbox" checked style="width:auto"> Hapus background polos otomatis</label><div class="sec"><i></i><h3>Stiker</h3></div>${grid(st)}<div class="sec"><i></i><h3>GIF</h3></div>${grid(gf)}<p class="mut">Stiker dipotong persegi. GIF maksimal 550 KB agar muat di database gratis.</p>`);
$('#sk_f').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const img=$('#sk_bg').checked?await cutout(f):await shrinkSq(f,256,.8);if(img.length>380000)throw Error('Gambar terlalu besar');const r=await addDoc(collection(db,'users',S.uid,'stickers'),{img,kind:'sticker',at:serverTimestamp()});S.stk.unshift({id:r.id,img,kind:'sticker'});toast('Stiker ditambahkan');stkSheet()}catch(x){toast(errMsg(x))}});
$('#gf_f').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;if(f.type!='image/gif')return toast('Pilih file .gif');if(f.size>550*1024)return toast('GIF maksimal 550 KB');try{const img=await toBlob(f);const r=await addDoc(collection(db,'users',S.uid,'stickers'),{img,kind:'gif',at:serverTimestamp()});S.stk.unshift({id:r.id,img,kind:'gif'});toast('GIF ditambahkan');stkSheet()}catch(x){toast(errMsg(x))}})}
A.stkopen=stkSheet;
A.stksend=e=>{const x=S.stk.find(y=>y.id==e.dataset.id);if(!x)return;closeSheet();sendAny({img:x.img,kind:x.kind})};
A.stkdel=async e=>{await deleteDoc(doc(db,'users',S.uid,'stickers',e.dataset.id)).catch(x=>toast(errMsg(x)));S.stk=S.stk.filter(y=>y.id!=e.dataset.id);stkSheet()};

/* ---------- GRUP & FAMILY ---------- */
A.newgroup=()=>{S.gnew={members:[],kind:'group'};const draw=()=>{const el=$('#gm_l');if(el)el.innerHTML=S.gnew.members.map(m=>`<span class="pill b" style="margin:2px">@${esc(m.username)} <button class="mut" data-act="gmrm" data-u="${m.uid}" style="padding:0 2px">${I.x.replace('<svg','<svg style="width:12px;height:12px"')}</button></span>`).join('')||'<span class="mut">Belum ada anggota</span>'};
sheet(`<h3>Buat grup / family</h3><div class="seg" style="margin:8px 0"><button class="on" data-act="gkind" data-k="group">Grup</button><button data-act="gkind" data-k="family">Family</button></div><label>Foto (opsional)</label><input id="g_ph" type="file" accept="image/*"><label>Nama</label><input id="g_nm" maxlength="40" placeholder="Nama grup"><label>Tambah anggota (username)</label><div class="row"><input id="g_us" placeholder="username"><button class="btn sm" data-act="gmadd">Tambah</button></div><div id="gm_l" style="margin-top:8px"></div><div style="height:12px"></div><button class="btn block" data-act="gcreate">Buat</button>`);draw();S.gdraw=draw};
A.gkind=e=>{S.gnew.kind=e.dataset.k;$$('[data-act=gkind]').forEach(b=>b.classList.toggle('on',b==e))};
A.gmadd=async()=>{const n=$('#g_us').value.trim().toLowerCase().replace('@','');if(!n)return;const s=await getDoc(doc(db,'usernames',n));if(!s.exists())return toast('Username tidak ditemukan');const uid=s.data().uid;if(uid==S.uid||S.gnew.members.some(m=>m.uid==uid))return toast('Sudah ada');const u=await getUser(uid);S.gnew.members.push({uid,username:u.username});$('#g_us').value='';S.gdraw()};
A.gmrm=e=>{S.gnew.members=S.gnew.members.filter(m=>m.uid!=e.dataset.u);S.gdraw()};
A.gcreate=async e=>{const nm=$('#g_nm').value.trim();if(!nm)return toast('Isi nama grup');if(!guard(nm,'group',true))return;e.disabled=true;try{const ph=$('#g_ph').files[0],photo=ph?await shrinkSq(ph,200,.8):'';const mem=[S.uid,...S.gnew.members.map(m=>m.uid)];
const r=await addDoc(collection(db,'chats'),{members:mem,isGroup:true,name:nm,photo,kind:S.gnew.kind,owner:S.uid,last:'Grup dibuat',lastAt:serverTimestamp(),lastFrom:S.uid,createdAt:serverTimestamp()});closeSheet();go('thread','g:'+r.id)}catch(x){toast(errMsg(x));e.disabled=false}};
A.ginfo=async e=>{const id=e.dataset.id,s=await getDoc(doc(db,'chats',id)).catch(()=>null);if(!s||!s.exists())return;const g={id,...s.data()},owner=g.owner==S.uid;await Promise.all(g.members.map(getUser));
sheet(`<h3>${esc(g.name)}</h3><p class="mut">${g.kind=='family'?'Family':'Grup'} · ${g.members.length} anggota</p>${owner?`<label>Ganti nama</label><div class="row"><input id="gi_nm" value="${esc(g.name)}" maxlength="40"><button class="btn sm" data-act="grename" data-id="${id}">Simpan</button></div><label>Tambah anggota</label><div class="row"><input id="gi_us" placeholder="username"><button class="btn sm" data-act="gadd" data-id="${id}">Tambah</button></div>`:''}<div style="margin-top:10px">${g.members.map(m=>{const u=S.users[m];return`<div class="chat-item" data-act="go" data-v="profile" data-a="${m}">${av(u)}<div class="sp">${nameOf(u)}<div class="un">@${esc(u.username)}${m==g.owner?' · pembuat':''}</div></div></div>`}).join('')}</div><div style="height:10px"></div><button class="btn soft block" data-act="gleave" data-id="${id}">Keluar dari grup</button>`)};
A.grename=async e=>{const n=$('#gi_nm').value.trim();if(!n||!guard(n,'group',true))return;await updateDoc(doc(db,'chats',e.dataset.id),{name:n}).catch(x=>toast(errMsg(x)));closeSheet();views.thread('g:'+e.dataset.id)};
A.gadd=async e=>{const n=$('#gi_us').value.trim().toLowerCase().replace('@','');const s=await getDoc(doc(db,'usernames',n));if(!s.exists())return toast('Username tidak ditemukan');await updateDoc(doc(db,'chats',e.dataset.id),{members:arrayUnion(s.data().uid)}).catch(x=>toast(errMsg(x)));toast('Anggota ditambahkan');A.ginfo({dataset:{id:e.dataset.id}})};
A.gleave=async e=>{if(!confirm('Keluar dari grup ini?'))return;const s=await getDoc(doc(db,'chats',e.dataset.id));await updateDoc(doc(db,'chats',e.dataset.id),{members:s.data().members.filter(m=>m!=S.uid)}).catch(x=>toast(errMsg(x)));closeSheet();go('chats')};

/* ---------- GAME: RVNMATCH ---------- */
const MODES={pacar:['Cari Pacar','heart2'],besti:['Cari Besti','users'],relasi:['Cari Relationship','star']};
const HOB=[['gaming','🎮','Gaming'],['musik','🎵','Musik'],['film','🎬','Film'],['baca','📚','Baca buku'],['olahraga','⚽','Olahraga'],['seni','🎨','Seni'],['foto','📷','Fotografi'],['travel','✈️','Traveling'],['kuliner','🍜','Kuliner'],['hewan','🐱','Pecinta hewan'],['dance','💃','Dance'],['hiking','🏔️','Mendaki'],['karaoke','🎤','Karaoke'],['coding','💻','Coding'],['tanaman','🌱','Tanaman'],['kopi','☕','Ngopi'],['diy','🧶','DIY'],['band','🎸','Main musik'],['otomotif','🏍️','Otomotif'],['belanja','🛍️','Belanja'],['masak','🍳','Masak'],['anime','📺','Anime/K-drama'],['yoga','🧘','Yoga'],['nulis','✍️','Menulis']];
const VIBE=[['introvert','🌙','Introvert'],['ambivert','⚖️','Ambivert'],['ekstrovert','🔥','Ekstrovert']];
const WKND=[['rumah','🏠','Rebahan di rumah'],['campur','🌤️','Campur'],['keluar','🎉','Jalan-jalan']];
const LOVE=[['kata','💬','Kata-kata manis'],['waktu','⏳','Waktu bersama'],['hadiah','🎁','Hadiah'],['bantu','🤝','Perhatian & bantuan'],['sentuh','🤗','Sentuhan/peluk']];
const labelOf=(L,k)=>{const x=L.find(a=>a[0]==k);return x?x[1]+' '+x[2]:''};
const chipsG=(g,L,sel,multi)=>L.map(a=>`<button type="button" class="tch ${(multi?sel.has(a[0]):sel==a[0])?'on':''}" data-act="mmt" data-g="${g}" data-k="${a[0]}">${a[1]} ${a[2]}</button>`).join('');
A.mmt=e=>{const g=e.dataset.g,k=e.dataset.k,T=S.mmT;if(g=='hob'){if(T.hob.has(k))T.hob.delete(k);else{if(T.hob.size>=8)return toast('Maksimal 8 hobi');T.hob.add(k)}e.classList.toggle('on',T.hob.has(k))}else{T[g]=k;$$(`.tch[data-g="${g}"]`).forEach(b=>b.classList.toggle('on',b.dataset.k==k))}};
function mmForm(me){S.mmT={hob:new Set(me?.hobbies||[]),vibe:me?.vibe||'',wk:me?.weekend||'',ll:me?.love||''};S.mmode=me?.mode||'pacar';
$('#mt').innerHTML=`<div class="card pad"><h3>${me?'Ubah':'Bikin'} profil match</h3><p class="mut">Profilmu hanya tampil di RVNMATCH. Kamu bisa menghapusnya kapan saja.</p><label>Aku mencari</label><div class="seg" id="mm_s">${Object.entries(MODES).map(([k,v])=>`<button class="${S.mmode==k?'on':''}" data-act="mmode" data-k="${k}">${v[0].replace('Cari ','')}</button>`).join('')}</div>
<label>Pilih hobimu (maks 8)</label><div class="tchs">${chipsG('hob',HOB,S.mmT.hob,true)}</div>
<label>Kamu tipe yang mana?</label><div class="tchs">${chipsG('vibe',VIBE,S.mmT.vibe)}</div>
<label>Akhir pekan idealmu</label><div class="tchs">${chipsG('wk',WKND,S.mmT.wk)}</div>
<label>Bahasa cintamu</label><div class="tchs">${chipsG('ll',LOVE,S.mmT.ll)}</div>
<label>Umur (opsional)</label><input id="mm_ag" type="number" min="13" max="99" value="${me?.age||''}"><label>Tentang aku</label><textarea id="mm_ab" maxlength="160" placeholder="Sifat, vibes kamu…">${esc(me?.about||'')}</textarea><label>Yang kucari</label><textarea id="mm_lk" maxlength="160" placeholder="Tipe orang yang kamu cari…">${esc(me?.looking||'')}</textarea><div style="height:12px"></div><button class="btn block" data-act="mmsave">${me?'Simpan':'Mulai'}</button></div>`}
A.gamehub=()=>go('games');
A.matchopen=()=>{closeSheet();go('match')};
views.match=async function(){const t=S.tok;$('#main').innerHTML=`${back('games')}RVNMATCH</h3></div><div id="mt">${SK}</div>`;
const me=await getDoc(doc(db,'matchPool',S.uid)).then(d=>d.exists()?d.data():null).catch(()=>null);if(t!==S.tok)return;S.mm=me;
if(!me||S.mmEdit){mmForm(me);return}
S.mmode=S.mmode||me.mode;deck()};
A.mmode=e=>{S.mmode=e.dataset.k;$$('#mm_s button').forEach(b=>b.classList.toggle('on',b==e))};
A.mmsave=async e=>{const ab=$('#mm_ab').value.trim(),lk=$('#mm_lk').value.trim(),T=S.mmT;if(!ab)return toast('Isi tentang aku');if(!T.hob.size)return toast('Pilih minimal 1 hobi');if(!T.vibe)return toast('Pilih introvert / ekstrovert');if(!guard(ab+' '+lk,'match',true))return;const ag=Math.floor(+$('#mm_ag').value)||0;if(ag&&ag<13)return toast('Umur minimal 13 tahun');e.disabled=true;
try{await setDoc(doc(db,'matchPool',S.uid),{uid:S.uid,mode:S.mmode,age:ag,about:ab.slice(0,160),looking:lk.slice(0,160),hobbies:[...T.hob],vibe:T.vibe,weekend:T.wk,love:T.ll,at:serverTimestamp()});S.mmEdit=false;views.match()}catch(x){toast(errMsg(x));e.disabled=false}};
function compat(a,b){if(!a||!b)return 0;const h1=new Set(a.hobbies||[]),h2=new Set(b.hobbies||[]);const inter=[...h1].filter(x=>h2.has(x)).length,uni=new Set([...h1,...h2]).size||1;let sc=Math.round(inter/uni*45);
const v1=a.vibe,v2=b.vibe;if(v1&&v2)sc+=v1==v2?20:(v1=='ambivert'||v2=='ambivert')?15:8;if(a.weekend&&a.weekend==b.weekend)sc+=15;else if(a.weekend&&b.weekend&&(a.weekend=='campur'||b.weekend=='campur'))sc+=8;if(a.love&&a.love==b.love)sc+=20;else if(a.love&&b.love)sc+=6;return Math.min(99,Math.max(8,sc+(inter?0:0)+10))}
async function deck(){const t=S.tok,el=$('#mt');if(!el)return;const mode=S.mmode;
el.innerHTML=`<div class="seg">${Object.entries(MODES).map(([k,v])=>`<button class="${mode==k?'on':''}" data-act="mmtab" data-k="${k}">${v[0]}</button>`).join('')}</div><div id="mdk">${SK}</div><div class="row pad" style="justify-content:center"><button class="btn sm soft" data-act="mmedit">Ubah profil match</button><button class="btn sm soft" data-act="mmdel">Hapus profil match</button></div>`;
const [pool,sw]=await Promise.all([getDocs(query(collection(db,'matchPool'),limit(80))).catch(()=>null),getDocs(query(collection(db,'matchSwipes'),where('from','==',S.uid))).catch(()=>null)]);if(t!==S.tok)return;
const done=new Set((sw?sw.docs:[]).map(d=>d.data().to));const cands=(pool?pool.docs:[]).map(d=>d.data()).filter(x=>x.uid!=S.uid&&!done.has(x.uid)&&x.mode==mode);await Promise.all(cands.map(c=>getUser(c.uid)));if(t!==S.tok)return;
S.mdeck=cands.map(c=>({c,s:compat(S.mm,c)+Math.random()*6})).sort((x,y)=>y.s-x.s).map(x=>x.c);showCand()}
function showCand(){const el=$('#mdk');if(!el)return;const c=S.mdeck[0];if(!c){el.innerHTML=`<div class="card pad c mut">Belum ada kandidat di kategori ini. Coba lagi nanti atau ajak temanmu.</div>`;return}const u=S.users[c.uid];
el.innerHTML=`<div class="card pad c"><div style="display:flex;justify-content:center">${av(u,'xl')}</div><div style="font-size:20px;margin-top:8px">${nameOf(u)}${c.age?` <span class="mut">· ${c.age}</span>`:''}</div><div class="un">@${esc(u.username)}</div><div class="cmp">${ic('heart')} Kecocokan ${compat(S.mm,c)}%</div><div class="tchs ro" style="justify-content:center">${(c.vibe?[`<span class="tch on">${labelOf(VIBE,c.vibe)}</span>`]:[]).concat((c.hobbies||[]).map(h=>`<span class="tch">${labelOf(HOB,h)}</span>`)).join('')}</div>${c.weekend||c.love?`<div class="mut" style="font-size:12px;margin-top:6px">${[c.weekend?'Weekend: '+labelOf(WKND,c.weekend):'',c.love?'Love language: '+labelOf(LOVE,c.love):''].filter(Boolean).join(' · ')}</div>`:''}<p style="margin:12px 0 4px"><b>Tentang</b><br>${safe(c.about)}</p>${c.looking?`<p style="margin:8px 0"><b>Mencari</b><br>${safe(c.looking)}</p>`:''}<div class="row" style="justify-content:center;margin-top:12px"><button class="btn soft" data-act="mmskip" data-u="${c.uid}">Lewati</button><button class="btn pink" data-act="mmlike" data-u="${c.uid}">${I.heart2.replace('<svg','<svg style="width:18px;height:18px;stroke:#fff"')} Suka</button></div></div>`}
A.mmtab=e=>{S.mmode=e.dataset.k;deck()};
A.mmedit=()=>{S.mmEdit=true;views.match()};
A.mmdel=async()=>{if(!confirm('Hapus profil match?'))return;await deleteDoc(doc(db,'matchPool',S.uid)).catch(x=>toast(errMsg(x)));S.mm=null;views.match()};
async function swipe(uid,like){const c=S.mdeck.shift();try{await setDoc(doc(db,'matchSwipes',S.uid+'_'+uid),{from:S.uid,to:uid,like,mode:S.mmode,at:serverTimestamp()});
if(like){const r=await getDoc(doc(db,'matchSwipes',uid+'_'+S.uid)).catch(()=>null);if(r&&r.exists()&&r.data().like){const cid=[S.uid,uid].sort().join('_');const ex=await getDoc(doc(db,'chats',cid)).catch(()=>null);if(!ex||!ex.exists())await setDoc(doc(db,'chats',cid),{members:[S.uid,uid].sort(),req:false,last:'Kalian saling suka di RVNMATCH',lastAt:serverTimestamp(),lastFrom:S.uid});pushNotif(uid,'follow','cocok denganmu di RVNMATCH');
const u=await getUser(uid);sheet(`<div class="c"><h3>${ic('heart')} It's a Match!</h3><p>Kamu dan <b>@${esc(u.username)}</b> saling suka.</p><button class="btn block" data-act="go" data-v="thread" data-a="${uid}">Kirim pesan</button></div>`)}else pushNotif(uid,'follow','ada yang menyukaimu di RVNMATCH')}}catch(e){toast(errMsg(e))}showCand()}
A.mmlike=e=>swipe(e.dataset.u,true);A.mmskip=e=>swipe(e.dataset.u,false);

/* ---------- HUB GAME ---------- */
const GAMES=[['match','heart2','RVNMATCH','Cari pacar, besti, atau relationship. Pilih hobi, introvert/ekstrovert, dapat % kecocokan.'],['confess','comment','Dinding Kejujuran','Curhat dan rahasia anonim. Identitasmu tidak tampil.'],['wordle','star','Kata RVN','Tebak kata 5 huruf setiap hari, 6 kesempatan.'],['tod','game','Roda Truth or Dare','Putar roda, dapat kebenaran atau tantangan seru.'],['quiz','users','Kuis Kepribadian','Kamu tipe hewan apa? 6 pertanyaan singkat.'],['emoji','game','Tebak Emoji','Tebak arti rangkaian emoji, kumpulkan skor.']];
views.games=function(){$('#main').innerHTML=`${back('chats')}Mini Games</h3></div><div class="pad"><p class="mut" style="margin:0 0 10px">Pilih game untuk dimainkan bareng teman.</p>${GAMES.map(g=>`<button class="chat-item gcard" style="width:100%;text-align:left" data-act="go" data-v="${g[0]}"><span class="ic gi" style="width:48px;height:48px">${I[g[1]]||I.game}</span><div class="sp"><b>${g[2]}</b><div class="un">${g[3]}</div></div></button>`).join('')}</div>`};
const gtop=t=>`${back('games')}${t}</h3></div>`;
const shareTxt=t=>{try{navigator.share?navigator.share({text:t}).catch(()=>{}):navigator.clipboard.writeText(t).then(()=>toast('Disalin, tempel ke chat temanmu'))}catch{toast('Tidak bisa membagikan')}};
A.gshare=e=>shareTxt(e.dataset.t);

/* Dinding Kejujuran (anonim; identitas hanya terbaca admin) */
views.confess=async function(){const t=S.tok;$('#main').innerHTML=`${gtop('Dinding Kejujuran')}<div class="pad"><div class="card pad"><textarea id="cf_t" maxlength="300" placeholder="Tulis curhat atau rahasiamu. Tampil anonim."></textarea><div style="height:8px"></div><button class="btn block" data-act="cfpost">Kirim anonim</button><p class="mut" style="font-size:12px;margin:8px 0 0">Kata kasar otomatis diblokir. Staf dapat menghapus konten yang melanggar.</p></div><div id="cf_l">${SK}</div></div>`;
let ds=[];try{const s=await getDocs(query(collection(db,'confess'),orderBy('at','desc'),limit(40)));ds=s.docs.map(d=>({id:d.id,...d.data()}))}catch(e){toast(errMsg(e))}if(t!==S.tok)return;
$('#cf_l').innerHTML=ds.length?ds.map(c=>`<div class="card pad" style="margin-top:10px"><div style="white-space:pre-wrap">${safe(c.text)}</div><div class="mut" style="font-size:12px;margin-top:6px;display:flex;justify-content:space-between"><span>Anonim · ${ago(c.at)}</span>${S.isAdmin?`<button class="btn sm soft" data-act="cfdel" data-id="${c.id}">Hapus</button>`:''}</div></div>`).join(''):'<div class="card pad c mut" style="margin-top:10px">Belum ada yang curhat. Jadilah yang pertama.</div>'};
A.cfpost=async e=>{const tx=$('#cf_t').value.trim();if(tx.length<3)return toast('Tulis dulu isinya');if(!guard(tx,'confess'))return;const last=+(localStorage.getItem('rvn_cf')||0);if(Date.now()-last<30000)return toast('Tunggu sebentar sebelum kirim lagi');e.disabled=true;
try{const r=doc(collection(db,'confess')),b=writeBatch(db);b.set(r,{text:tx,at:serverTimestamp()});b.set(doc(db,'confessMeta',r.id),{uid:S.uid,at:serverTimestamp()});await b.commit();try{localStorage.setItem('rvn_cf',Date.now())}catch{}toast('Terkirim anonim');views.confess()}catch(x){toast(errMsg(x));e.disabled=false}};
A.cfdel=async e=>{if(!confirm('Hapus curhat ini?'))return;await deleteDoc(doc(db,'confess',e.dataset.id)).catch(x=>toast(errMsg(x)));views.confess()};

/* Kata RVN (Wordle harian) */
const WL='cinta bunga kapal hujan malam rumah tidur makan minum bulan jalan pulau sayap tanah angin darah lidah kunci batik sabun gelas pagar kebun kursi lampu kelas tulis dosen murid ujian nilai juara musik gitar drama mimpi senja fajar surya hutan danau pasir bukit kabut salju petir bakso tempe gulai nasib harta perak sutra pintu lantai dapur kamar teman kawan kakak nenek kakek paman balon mobil motor becak rakit jarak waktu jumat tahun detik menit sapi kuda kerbau tikus semut ikan rindu sedih marah ramah sabar jujur cerah gelap hangat dingin pedas manis asam pahit segar lezat cantik tampan imut lucu gemas bahagia santai libur pesta kado hadiah pelukan'.split(' ').filter(w=>/^[a-z]{5}$/.test(w));
const KB=['qwertyuiop','asdfghjkl','⏎zxcvbnm⌫'];
function wDay(){const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)}
function wEval(g,w){const r=Array(5).fill('x'),c={};for(let i=0;i<5;i++)if(g[i]==w[i])r[i]='g';else c[w[i]]=(c[w[i]]||0)+1;for(let i=0;i<5;i++)if(r[i]!='g'&&c[g[i]]>0){r[i]='y';c[g[i]]--}return r}
views.wordle=function(){const k=wDay(),w=WL[(k*7+3)%WL.length];let rows=[];try{rows=JSON.parse(localStorage.getItem('rvn_wd_'+k)||'[]')}catch{}S.wd={k,w,rows,cur:''};
$('#main').innerHTML=`${gtop('Kata RVN')}<div class="pad c"><p class="mut" style="margin:0 0 8px">Tebak kata 5 huruf bahasa Indonesia. Hijau = tepat, kuning = ada tapi salah posisi.</p><div id="wg"></div><div id="wk"></div><div id="wm" style="margin-top:10px"></div></div>`;wDraw();
const kd=e=>{if(!document.getElementById('wg'))return;if(e.key=='Enter')wKey('⏎');else if(e.key=='Backspace')wKey('⌫');else if(/^[a-z]$/i.test(e.key)&&!e.ctrlKey&&!e.metaKey&&document.activeElement.tagName!='INPUT'&&document.activeElement.tagName!='TEXTAREA')wKey(e.key.toLowerCase())};document.addEventListener('keydown',kd);S.vu.push(()=>document.removeEventListener('keydown',kd))};
function wState(){const W=S.wd,last=W.rows[W.rows.length-1];return last==W.w?'win':W.rows.length>=6?'lose':'play'}
function wDraw(){const W=S.wd,st=wState(),ev=W.rows.map(g=>wEval(g,W.w));let h='';for(let i=0;i<6;i++){const g=i<W.rows.length?W.rows[i]:i==W.rows.length&&st=='play'?W.cur:'';h+='<div class="wr">'+[0,1,2,3,4].map(j=>`<span class="wc ${i<W.rows.length?ev[i][j]:''}">${(g[j]||'').toUpperCase()}</span>`).join('')+'</div>'}$('#wg').innerHTML=h;
const best={};W.rows.forEach((g,i)=>[...g].forEach((ch,j)=>{const v=ev[i][j];if(v=='g'||(v=='y'&&best[ch]!='g')||!best[ch])best[ch]=v}));
$('#wk').innerHTML=KB.map(r=>`<div class="wkr">${[...r].map(ch=>`<button class="wkey ${best[ch]||''}" data-act="wkey" data-k="${ch}">${ch=='⏎'?'OK':ch=='⌫'?'⌫':ch.toUpperCase()}</button>`).join('')}</div>`).join('');
$('#wm').innerHTML=st=='win'?`<b>Benar! 🎉</b> Kamu menebak dalam ${W.rows.length} percobaan.<br><button class="btn sm" data-act="gshare" data-t="${esc(`Kata RVN #${W.k%1000} ${W.rows.length}/6\n`+ev.map(r=>r.map(x=>x=='g'?'🟩':x=='y'?'🟨':'⬛').join('')).join('\n')+'\nMain di RVNOISE')}">Bagikan hasil</button>`:st=='lose'?`Yah, kata hari ini: <b>${W.w.toUpperCase()}</b>. Coba lagi besok!`:''}
function wKey(k){const W=S.wd;if(!W||wState()!='play')return;if(k=='⌫')W.cur=W.cur.slice(0,-1);else if(k=='⏎'){if(W.cur.length<5)return toast('Harus 5 huruf');W.rows.push(W.cur);W.cur='';try{localStorage.setItem('rvn_wd_'+W.k,JSON.stringify(W.rows))}catch{}}else if(W.cur.length<5)W.cur+=k;wDraw()}
A.wkey=e=>wKey(e.dataset.k);

/* Roda Truth or Dare */
const TRUTH=['Siapa orang terakhir yang kamu stalk di media sosial?','Apa hal paling memalukan yang pernah terjadi padamu di sekolah?','Lagu apa yang diam-diam kamu suka tapi malu mengakuinya?','Kapan terakhir kali kamu menangis dan kenapa?','Kalau bisa tukar hidup sehari dengan seseorang, siapa?','Apa kebohongan kecil yang paling sering kamu bilang?','Siapa crush pertamamu?','Apa kebiasaan anehmu yang tidak diketahui banyak orang?','Pesan apa yang ingin kamu kirim ke dirimu 5 tahun lalu?','Apa ketakutan terbesarmu?','Aplikasi apa yang paling lama kamu buka tiap hari?','Hal apa yang bikin kamu ilfeel dengan cepat?'];
const DARE=['Kirim emoji 🐸 ke 3 chat teratasmu.','Ganti foto profil jadi foto lucu selama 1 jam.','Nyanyikan satu bait lagu favoritmu lewat voice note.','Tulis pantun untuk orang di sebelahmu.','Tirukan suara hewan pilihan temanmu.','Pakai emoji saja untuk bicara selama 3 menit.','Kirim selfie dengan ekspresi paling jelek.','Ceritakan lelucon, kalau tidak ada yang tertawa, ulangi.','Joget 15 detik tanpa musik.','Puji tiga orang secara tulus hari ini.','Tulis status "Aku cinta RVNOISE" di profilmu.','Telepon temanmu dan bilang "halo, ini ayam goreng".'];
views.tod=function(){$('#main').innerHTML=`${gtop('Roda Truth or Dare')}<div class="pad c"><div id="wheel" class="wheel"><span>🎡</span></div><div class="row" style="justify-content:center;margin:12px 0"><button class="btn" data-act="todgo" data-k="t">Truth</button><button class="btn pink" data-act="todgo" data-k="d">Dare</button><button class="btn soft" data-act="todgo" data-k="r">Acak</button></div><div id="todr" class="card pad" style="min-height:90px;display:grid;place-items:center"><span class="mut">Pilih Truth, Dare, atau Acak.</span></div></div>`};
A.todgo=e=>{let k=e.dataset.k;if(k=='r')k=Math.random()<.5?'t':'d';const w=$('#wheel');w.style.transition='transform 1.4s cubic-bezier(.2,.8,.2,1)';w.style.transform=`rotate(${(+w.dataset.r||0)+720+Math.floor(Math.random()*360)}deg)`;w.dataset.r=(+w.dataset.r||0)+1080;const L=k=='t'?TRUTH:DARE;const x=L[Math.floor(Math.random()*L.length)];
$('#todr').innerHTML='<span class="mut">Memutar…</span>';setTimeout(()=>{const r=$('#todr');if(r)r.innerHTML=`<div><div class="pill ${k=='t'?'b':''}">${k=='t'?'TRUTH':'DARE'}</div><p style="font-size:18px;margin:10px 0 0">${esc(x)}</p></div>`},1400)};

/* Kuis Kepribadian */
const QZ=[['Akhir pekan paling enak?',['Rebahan sambil nonton','Jalan-jalan ke tempat baru','Kumpul bareng banyak teman','Ngerjain hobi sendirian']],['Kalau ada masalah, kamu...',['Mikir lama dulu','Langsung cari solusi','Curhat ke teman','Tidur dulu, besok baru dipikir']],['Pilih makanan:',['Camilan manis','Makanan pedas','Makan bareng rame-rame','Kopi dan roti']],['Chat favoritmu:',['Balasnya santai','Cepat dan singkat','Panjang dan penuh emoji','Voice note']],['Warna favorit:',['Biru langit','Merah','Kuning','Ungu']],['Liburan impian:',['Penginapan sepi di gunung','Petualangan ekstrem','Pesta di pantai','Museum & kafe estetik']]];
const QR=[['🐱','Kucing Santai','Tenang, mandiri, dan punya dunia sendiri. Orang nyaman di dekatmu karena kamu tidak memaksa.'],['🦊','Rubah Cerdik','Cepat tanggap, penuh ide, dan jago mencari jalan keluar. Kamu suka tantangan.'],['🐶','Anjing Setia','Hangat, ramah, dan jadi pusat keceriaan. Sahabat setia yang selalu ada.'],['🐰','Kelinci Kreatif','Lembut, imajinatif, dan penuh rasa seni. Kamu melihat keindahan di hal kecil.']];
views.quiz=function(){S.qz={i:0,a:[0,0,0,0]};qzShow()};
function qzShow(){const q=S.qz,i=q.i;if(i>=QZ.length){const m=q.a.indexOf(Math.max(...q.a)),r=QR[m];$('#main').innerHTML=`${gtop('Kuis Kepribadian')}<div class="pad c"><div class="card pad"><div style="font-size:64px">${r[0]}</div><h2>${r[1]}</h2><p>${r[2]}</p><div class="row" style="justify-content:center"><button class="btn" data-act="gshare" data-t="${esc(`Aku ${r[1]} ${r[0]} di Kuis Kepribadian RVNOISE! Kamu tipe hewan apa?`)}">Bagikan</button><button class="btn soft" data-act="go" data-v="quiz">Ulangi</button></div></div></div>`;return}
$('#main').innerHTML=`${gtop('Kuis Kepribadian')}<div class="pad"><div class="mut">Pertanyaan ${i+1} dari ${QZ.length}</div><div class="prog" style="margin:8px 0"><i style="width:${i/QZ.length*100}%"></i></div><div class="card pad"><h3 style="margin-top:0">${QZ[i][0]}</h3>${QZ[i][1].map((o,j)=>`<button class="btn soft block" style="margin-top:8px;text-align:left" data-act="qzans" data-j="${j}">${esc(o)}</button>`).join('')}</div></div>`}
A.qzans=e=>{S.qz.a[+e.dataset.j]++;S.qz.i++;qzShow()};

/* Tebak Emoji */
const EM=[['🏫📚✏️',['sekolah']],['🎂🎈🎉',['ulang tahun','ultah']],['✈️🏝️',['liburan','piknik','pantai']],['🎤🎶',['karaoke']],['⚽🥅',['gol','sepak bola']],['🍳🥓',['sarapan']],['💍👰',['nikah','pernikahan','menikah']],['🎓👨‍🎓',['wisuda']],['🌋🌏',['gunung berapi','vulkan']],['📷🤳',['selfie','swafoto']],['🍉☀️',['semangka']],['🌧️☔',['hujan']],['🌙😴',['tidur','malam']],['🎮👾',['game','gaming']],['🍕🧀',['pizza']],['🐒🍌',['monyet','pisang']],['🚗⛽',['mobil','bensin']],['💻⌨️',['laptop','komputer','coding']],['🎬🍿',['film','bioskop','nonton']],['❤️💌',['surat cinta','cinta','love letter']]];
views.emoji=function(){S.em={q:[...EM].sort(()=>Math.random()-.5).slice(0,8),i:0,s:0};emShow()};
function emShow(msg){const E=S.em;if(E.i>=E.q.length){$('#main').innerHTML=`${gtop('Tebak Emoji')}<div class="pad c"><div class="card pad"><div style="font-size:48px">🏆</div><h2>Skor ${E.s} / ${E.q.length}</h2><div class="row" style="justify-content:center"><button class="btn" data-act="gshare" data-t="${esc(`Skor Tebak Emoji RVNOISE: ${E.s}/${E.q.length}. Berani coba?`)}">Bagikan</button><button class="btn soft" data-act="go" data-v="emoji">Main lagi</button></div></div></div>`;return}
$('#main').innerHTML=`${gtop('Tebak Emoji')}<div class="pad c"><div class="mut">Soal ${E.i+1} / ${E.q.length} · Skor ${E.s}</div><div class="card pad"><div style="font-size:54px;letter-spacing:6px">${E.q[E.i][0]}</div><input id="em_a" placeholder="Ketik jawabanmu" autocomplete="off" style="margin-top:12px;text-align:center"><div class="mut" style="min-height:20px;margin:6px 0">${msg||''}</div><div class="row" style="justify-content:center"><button class="btn" data-act="emok">Jawab</button><button class="btn soft" data-act="emskip">Lewati</button></div></div></div>`;$('#em_a')?.addEventListener('keydown',ev=>{if(ev.key=='Enter')A.emok()})}
A.emok=()=>{const E=S.em,a=($('#em_a').value||'').trim().toLowerCase();if(!a)return;if(E.q[E.i][1].some(x=>a.includes(x))){E.s++;E.i++;toast('Benar! 🎉');emShow()}else emShow('Belum tepat, coba lagi. Petunjuk: '+E.q[E.i][1][0][0].toUpperCase()+'…')};
A.emskip=()=>{S.em.i++;emShow()};

/* ---------- REELS ---------- */
const poster=u=>/res\.cloudinary\.com/.test(u||'')?u.replace('/upload/','/upload/so_0,w_480,f_jpg,q_auto/').replace(/\.\w+$/,'.jpg'):'';
const direct=u=>/^https?:\/\/.+\.(mp4|webm|mov)(\?.*)?$/i.test(u||'')||/res\.cloudinary\.com/.test(u||'');
views.reels=async function(){const t=S.tok,m=$('#main');S.reelMuted=S.reelMuted!==false;S.rtab=S.rtab||'fy';
m.innerHTML=`<div class="rtop"><button class="rb" data-act="go" data-v="home" aria-label="Kembali">${I.back||'‹'}</button><div class="rtabs"><button data-act="rtab" data-k="fol" class="${S.rtab=='fol'?'on':''}">Mengikuti</button><button data-act="rtab" data-k="fy" class="${S.rtab=='fy'?'on':''}">Untuk Kamu</button></div><button class="rb" data-act="reelup" aria-label="Unggah video">${I.plus}</button></div><div id="rl" class="rvw"><div class="reel"><div class="sk" style="height:100%"></div></div></div>`;
if(!S.rall){try{const s=await getDocs(query(collection(db,'posts'),where('type','==','reel'),limit(40)));S.rall=s.docs.map(d=>({id:d.id,...d.data()}))}catch(e){S.rall=[];toast(errMsg(e))}
const seen=seenP();S.rall=S.rall.map(p=>({p,s:Math.exp(-(Date.now()-ms(p.createdAt))/864e5/3)*2+(seen.has('r'+p.id)?0:1)+Math.random()*1.2})).sort((a,b)=>b.s-a.s).map(x=>x.p);
await Promise.all(S.rall.map(p=>getUser(p.uid)));S.rall.forEach(p=>S.pc[p.id]=p);S.posts=[...(S.posts||[]).filter(x=>!S.rall.some(p=>p.id==x.id)),...S.rall]}
if(t!==S.tok)return;drawReels()};
A.rtab=e=>{S.rtab=e.dataset.k;$$('.rtabs button').forEach(b=>b.classList.toggle('on',b==e));drawReels()};
function drawReels(){const rl=$('#rl');if(!rl)return;S.vu.forEach(f=>{try{f.__reel&&f()}catch{}});
let ps=S.rall||[];if(S.rtab=='fol')ps=ps.filter(p=>S.following.has(p.uid)||p.uid==S.uid);
rl.innerHTML=ps.length?ps.map(p=>{const u=S.users[p.uid],lk=!!S.liked[p.id],sv=!!S.saved[p.id],self=p.uid==S.uid,fo=S.following.has(p.uid);
return`<div class="reel" data-rid="${p.id}">${direct(p.video)?`<video src="${esc(p.video)}" poster="${esc(poster(p.video))}" playsinline loop ${S.reelMuted?'muted':''} preload="metadata" data-act="rtap"></video>`:X.embed(p.video)}<div class="rpause">${I.play||'▶'}</div>
<div class="rrail"><div class="rav" data-act="go" data-v="profile" data-a="${p.uid}">${av(u)}${self||fo?'':`<button class="rplus" data-act="rfollow" data-id="${p.uid}" aria-label="Ikuti">+</button>`}</div>
<button class="lk ${lk?'on':''}" data-act="like" data-id="${p.id}">${I.heart}<span>${p.likeCount||0}</span></button><button data-act="cmt" data-id="${p.id}">${I.comment}<span>${p.commentCount||0}</span></button><button class="sv ${sv?'on':''}" data-act="save" data-id="${p.id}">${I.save}<span>Simpan</span></button><button data-act="share" data-id="${p.id}">${I.send}<span>Bagikan</span></button><button data-act="rmore" data-id="${p.id}" data-u="${p.uid}" aria-label="Lainnya">${I.more||'⋯'}</button></div>
<div class="cap"><div class="row" data-act="go" data-v="profile" data-a="${p.uid}"><b>${nameOf(u)}</b>${isBlue(u)?BLUE:''}</div><div class="un" style="color:#ffffffcc">@${esc(u.username)}</div><div style="margin-top:6px">${safe(p.text)}</div><div class="rvc" data-vc="${p.id}" style="margin-top:6px;opacity:.8;font-size:12px">&nbsp;</div></div><div class="rmute" data-act="rmute">${S.reelMuted?I.mute:I.vol}</div></div>`}).join(''):`<div class="rempty">${S.rtab=='fol'?'Belum ada reels dari orang yang kamu ikuti.<br>Ikuti kreator di tab Untuk Kamu.':'Belum ada reels. Ketuk + di atas untuk jadi yang pertama.'}</div>`;
const vc={};const io=new IntersectionObserver(es=>es.forEach(en=>{const r=en.target,v=$('video',r);if(en.isIntersecting&&en.intersectionRatio>.6){const id=r.dataset.rid;if(v){v.muted=S.reelMuted;v.play().catch(()=>{if(!v.muted){v.muted=true;S.reelMuted=true;$$('.rmute').forEach(b=>b.innerHTML=I.mute);v.play().catch(()=>{})}})}markP('r'+id);countView(id,r)}else if(v)v.pause()}),{root:rl,threshold:[.6]});
$$('.reel',rl).forEach(r=>{io.observe(r);const v=$('video',r);v&&v.addEventListener('loadedmetadata',()=>v.classList.toggle('land',v.videoWidth>v.videoHeight))});
const off=()=>{io.disconnect();$$('video',rl).forEach(v=>v.pause())};off.__reel=1;S.vu.push(off);if(!S.rv)S.rv={}}
async function countView(id,r){const el=$('[data-vc]',r);S.rv=S.rv||{};if(S.rv[id]==null){try{const c=await getCountFromServer(collection(db,'posts',id,'rviews'));S.rv[id]=c.data().count}catch{S.rv[id]=0}}
if(!S.rseen)S.rseen=new Set();if(!S.rseen.has(id)){S.rseen.add(id);try{const ref=doc(db,'posts',id,'rviews',S.uid),ex=await getDoc(ref).catch(()=>null);if(!ex||!ex.exists()){await setDoc(ref,{at:serverTimestamp()});S.rv[id]++}}catch{}}
if(el)el.textContent=kfmt(S.rv[id])+' tayangan'}
A.rfollow=async e=>{const id=e.dataset.id;if(S.following.has(id))return;await ACT.follow({dataset:{id},textContent:'',classList:{toggle(){}}});$$(`.rplus[data-id="${id}"]`).forEach(b=>b.remove())};
A.rmore=e=>{const id=e.dataset.id,u=e.dataset.u,own=u==S.uid||S.isAdmin;sheet(`<h3>Lainnya</h3><button class="chat-item" style="width:100%;text-align:left;background:none" data-act="gift" data-to="${u}">${ic('gift')}<div class="sp"><b>Kirim hadiah</b></div></button>${own?`<button class="chat-item" style="width:100%;text-align:left;background:none" data-act="delpost" data-id="${id}">${ic('trash')}<div class="sp"><b>Hapus reels</b></div></button>`:`<button class="chat-item" style="width:100%;text-align:left;background:none" data-act="report" data-t="post" data-id="${id}" data-u="${u}">${ic('flag')}<div class="sp"><b>Laporkan</b></div></button>`}`)};
A.rtap=e=>{const r=e.closest('.reel');if(e.paused){e.play().catch(()=>{});r?.classList.remove('paused')}else{e.pause();r?.classList.add('paused')}if(S.reelMuted){S.reelMuted=false;e.muted=false;$$('.rmute').forEach(b=>b.innerHTML=I.vol)}};
A.rmute=()=>{S.reelMuted=!S.reelMuted;$$('#rl video').forEach(v=>v.muted=S.reelMuted);$$('.rmute').forEach(b=>b.innerHTML=S.reelMuted?I.mute:I.vol)};
A.reelup=()=>{const ok=CLOUD&&CLOUD.cloud&&CLOUD.preset;
sheet(`<h3>Unggah video</h3>${ok?`<label>Pilih video (maks 100 MB)</label><input id="rv_f" type="file" accept="video/*"><label>Caption</label><textarea id="rv_tx" maxlength="300" placeholder="Tulis caption…"></textarea><div id="rv_p" class="prog" hidden style="margin:10px 0"><i style="width:0%"></i></div><div id="rv_s" class="mut"></div><div style="height:10px"></div><button class="btn block" data-act="reelsave">Unggah &amp; posting</button>`:`<div class="card pad" style="margin:8px 0"><b>Penyimpanan video belum disambungkan</b><p class="mut">Admin perlu mengisi <code>CLOUDINARY</code> di app.js (nama cloud dan upload preset). Langkahnya ada di README.</p></div><label>Sementara: tempel link video (.mp4 atau YouTube)</label><input id="rv_u" placeholder="https://…/video.mp4"><label>Caption</label><textarea id="rv_tx" maxlength="300"></textarea><div style="height:10px"></div><button class="btn block" data-act="reelsave">Posting</button>`}`)};
function upCloud(file,onP){return new Promise((res,rej)=>{const fd=new FormData();fd.append('file',file);fd.append('upload_preset',CLOUD.preset);fd.append('folder','rvnoise');const x=new XMLHttpRequest();x.open('POST',`https://api.cloudinary.com/v1_1/${CLOUD.cloud}/video/upload`);x.upload.onprogress=e=>e.lengthComputable&&onP(e.loaded/e.total);x.onload=()=>{try{const j=JSON.parse(x.responseText);if(x.status>=200&&x.status<300&&j.secure_url)res(j.secure_url);else rej(Error(j.error?.message||'Upload gagal'))}catch{rej(Error('Upload gagal'))}};x.onerror=()=>rej(Error('Koneksi terputus saat upload'));x.send(fd)})}
A.reelsave=async e=>{const text=($('#rv_tx')?.value||'').trim();if(text&&!guard(text,'reel'))return;e.disabled=true;
try{let url='';const ok=CLOUD&&CLOUD.cloud&&CLOUD.preset;
if(ok){const f=$('#rv_f').files[0];if(!f)throw Error('Pilih video dulu');if(!/^video\//.test(f.type))throw Error('File harus berupa video');if(f.size>100*1024*1024)throw Error('Ukuran video maksimal 100 MB');
$('#rv_p').hidden=false;url=await upCloud(f,p=>{$('#rv_p i').style.width=Math.round(p*100)+'%';$('#rv_s').textContent='Mengunggah '+Math.round(p*100)+'%'})}
else{url=($('#rv_u').value||'').trim();if(!X.embed(url))throw Error('Link harus .mp4 atau YouTube')}
await setDoc(doc(collection(db,'posts')),{uid:S.uid,type:'reel',text,images:[],music:'',video:url,repostOf:'',likeCount:0,commentCount:0,createdAt:serverTimestamp()});closeSheet();toast('Reels terposting');if(S.view=='reels'){S.rall=null;views.reels()}}catch(x){toast(errMsg(x));e.disabled=false}};

/* ---------- FEED: urutan acak-berbobot, tandai sudah dilihat ---------- */
function seenP(){try{return new Set(JSON.parse(localStorage.getItem('rvn_seenp')||'[]'))}catch{return new Set()}}
function markP(id){try{const s=seenP();if(s.has(id))return;s.add(id);localStorage.setItem('rvn_seenp',JSON.stringify([...s].slice(-500)))}catch{}}
function rankFeed(ps){const seen=seenP(),now=Date.now();return ps.map(p=>({p,s:Math.exp(-(now-ms(p.createdAt))/36e5/18)*3+(seen.has(p.id)?0:1.6)+Math.random()*1.4+Math.min(2,(p.likeCount||0)/20)+(p.uid==S.uid?.3:0)})).sort((a,b)=>b.s-a.s).map(x=>x.p)}
function watchSeen(root){if(!('IntersectionObserver'in window))return;const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&en.intersectionRatio>.5){markP(en.target.dataset.pid);io.unobserve(en.target)}}),{threshold:[.5]});$$('.card[data-pid]',root).forEach(c=>io.observe(c));S.vu.push(()=>io.disconnect())}

/* ---------- KOMENTAR BERBALAS (postingan, tweet, carousel, story) ---------- */
function cmtSheet(kind,id,ownerUid){S.cm={kind,id,ownerUid,reply:null};const title=kind=='post'?'Komentar':'Komentar cerita';
sheet(`<h3>${title}</h3><div id="cl" style="min-height:120px;margin:10px 0"><div class="sk" style="height:40px"></div></div><div id="cm_rp"></div><div class="row"><input id="cm_in" placeholder="Tambah komentar…" maxlength="500"><button class="btn sm" data-act="sendcmt">Kirim</button></div>`);
const path=kind=='post'?['posts',id,'comments']:['stories',id,'replies'];$('#cm_in').addEventListener('keydown',e=>{if(e.key=='Enter')$('[data-act=sendcmt]').click()});
S.su=onSnapshot(query(collection(db,...path),orderBy('createdAt','asc'),limit(300)),async s=>{const cs=s.docs.map(d=>({id:d.id,...d.data()}));await Promise.all(cs.map(c=>getUser(c.uid)));const l=$('#cl');if(!l)return;
const top=cs.filter(c=>!c.parent),rep=p=>cs.filter(c=>c.parent==p);
const row=(c,sub)=>{const u=S.users[c.uid]||{};return`<div class="row" style="align-items:flex-start;margin:0 0 10px ${sub?36:0}px">${av(u)}<div class="sp"><div>${nameOf(u)} <span class="un">${ago(c.createdAt)}</span></div><div>${c.toUser?`<b class="tagx">@${esc(c.toUser)}</b> `:''}${safe(c.text)}</div><button class="un" style="background:none;padding:2px 0;font-weight:700" data-act="cmreply" data-p="${c.parent||c.id}" data-u="${esc(u.username||'')}" data-t="${c.uid}">Balas</button></div>${c.uid==S.uid||S.isAdmin||ownerUid==S.uid?`<button class="mut" data-act="delcmt" data-id="${c.id}">${ic('x')}</button>`:`<button class="mut" data-act="report" data-t="comment" data-id="${c.id}" data-u="${c.uid}" data-p="${id}">${I.flag}</button>`}</div>`};
l.innerHTML=top.length?top.map(c=>row(c,0)+rep(c.id).map(r=>row(r,1)).join('')).join(''):'<p class="mut c">Belum ada komentar. Jadilah yang pertama.</p>'})}
A.cmt=e=>{const p=S.posts?.find(x=>x.id==e.dataset.id)||S.pc[e.dataset.id];cmtSheet('post',e.dataset.id,p?.uid)};
A.scmts=()=>{const x=S.sv?.list[S.sv.i];if(!x)return;clearTimeout(S.stt);cmtSheet('story',x.id,x.uid)};
A.cmreply=e=>{S.cm.reply={parent:e.dataset.p,toUser:e.dataset.u,toUid:e.dataset.t};$('#cm_rp').innerHTML=`<div class="un" style="margin-bottom:6px">Membalas <b>@${esc(e.dataset.u)}</b> <button data-act="cmcancel" style="background:none">${I.x.replace('<svg','<svg style="width:12px;height:12px"')}</button></div>`;$('#cm_in').focus()};
A.cmcancel=()=>{S.cm.reply=null;$('#cm_rp').innerHTML=''};
A.sendcmt=async()=>{const C=S.cm,i=$('#cm_in');if(!C||!i)return;const t=i.value.trim();if(!t)return;if(!guard(t,'comment'))return;i.value='';const r=C.reply;
const data={uid:S.uid,text:mask(t),createdAt:serverTimestamp()};if(r){data.parent=r.parent;data.toUser=r.toUser}
try{const b=writeBatch(db),path=C.kind=='post'?['posts',C.id,'comments']:['stories',C.id,'replies'];b.set(doc(collection(db,...path)),data);if(C.kind=='post')b.update(doc(db,'posts',C.id),{commentCount:increment(1)});await b.commit();A.cmcancel();
if(r&&r.toUid!=S.uid)pushNotif(r.toUid,'comment','membalas komentarmu: '+t.slice(0,60));if(C.ownerUid&&C.ownerUid!=S.uid&&!(r&&r.toUid==C.ownerUid))pushNotif(C.ownerUid,C.kind=='post'?'comment':'story','mengomentari: '+t.slice(0,60))}catch(e){toast(errMsg(e))}};
A.delcmt=async e=>{const C=S.cm;if(!C)return;try{const b=writeBatch(db),path=C.kind=='post'?['posts',C.id,'comments']:['stories',C.id,'replies'];b.delete(doc(db,...path,e.dataset.id));if(C.kind=='post')b.update(doc(db,'posts',C.id),{commentCount:increment(-1)});await b.commit()}catch(x){toast(errMsg(x))}};



/* ---------- TEMA WARNA ---------- */
const PRESETS=[['Biru','#2b4a86'],['Pink','#c2417d'],['Ungu','#6d3fb0'],['Hijau','#1f7a55'],['Tosca','#0f7a8a'],['Oranye','#c2570c'],['Merah','#b42332'],['Hitam','#1f2937']];
function applyTheme(hex){const r=document.documentElement.style,K=['--navy','--steel','--pink','--pink2','--blue','--sky','--b1','--b2','--bs'];
if(!hex||!/^#[0-9a-f]{6}$/i.test(hex)){K.forEach(k=>r.removeProperty(k));return}
const [R,G,B]=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)),mix=w=>`rgb(${[R,G,B].map(v=>Math.round(v*(1-w)+255*w)).join(',')})`,dark=w=>`rgb(${[R,G,B].map(v=>Math.round(v*(1-w))).join(',')})`;
r.setProperty('--navy',hex);r.setProperty('--steel',mix(.45));r.setProperty('--sky',mix(.8));r.setProperty('--blue',mix(.92));r.setProperty('--pink',mix(.85));r.setProperty('--pink2',mix(.6));r.setProperty('--b1',mix(.2));r.setProperty('--b2',mix(.35));r.setProperty('--bs',dark(.3));
try{document.querySelector('meta[name=theme-color]')?.setAttribute('content',mix(.92))}catch{}}
try{applyTheme(localStorage.getItem('rvn_theme'))}catch{}

/* ---------- SOROTAN (HIGHLIGHT) & ARSIP STORY ---------- */
async function myStories(uid){const s=await getDocs(query(collection(db,'stories'),where('uid','==',uid))).catch(()=>null);return(s?s.docs:[]).map(d=>({id:d.id,...d.data()})).sort((a,b)=>ms(b.createdAt)-ms(a.createdAt))}
async function drawHighlights(uid,own){const el=$('#hls');if(!el)return;const s=await getDocs(collection(db,'users',uid,'highlights')).catch(()=>null);const hs=(s?s.docs:[]).map(d=>({id:d.id,...d.data()})).sort((a,b)=>ms(a.at)-ms(b.at));S.hl=Object.fromEntries(hs.map(h=>[h.id,h]));
if(!own&&!hs.length){el.innerHTML='';return}
el.innerHTML=`<div class="hs2">${own?`<button class="hl" data-act="hlnew"><span class="hring none">${I.plus}</span><span class="nm2">Sorotan</span></button><button class="hl" data-act="sarchive"><span class="hring none">${I.archive}</span><span class="nm2">Arsip</span></button>`:''}${hs.map(h=>`<button class="hl" data-act="hlopen" data-id="${h.id}"><span class="hring">${h.cover?`<img src="${esc(h.cover)}" alt="">`:I.film}</span><span class="nm2">${esc(h.title)}</span></button>`).join('')}</div>`}
async function openIds(ids){const ds=await Promise.all(ids.map(id=>getDoc(doc(db,'stories',id)).then(d=>d.exists()?{id,...d.data()}:null).catch(()=>null)));const l=ds.filter(Boolean);if(!l.length)return toast('Cerita sudah tidak tersedia');closeSheet();X.openStoryList(l)}
A.hlopen=e=>{const h=S.hl?.[e.dataset.id];if(h)openIds(h.sids||[])};
A.sarchive=async()=>{sheet(`<h3>Arsip cerita</h3><div id="sa">${SK}</div>`);const l=await myStories(S.uid);S.sarc=l;const el=$('#sa');if(!el)return;el.innerHTML=l.length?`<div class="stkgrid">${l.map((x,i)=>`<button class="stkc" data-act="saopen" data-i="${i}" style="aspect-ratio:9/16;padding:0"><img src="${esc(x.image)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px"><span class="un" style="position:absolute;left:6px;bottom:4px;color:#fff">${new Date(ms(x.createdAt)).toLocaleDateString('id-ID',{day:'numeric',month:'short'})}</span></button>`).join('')}</div>`:'<p class="mut c">Belum ada cerita.</p>'};
A.saopen=e=>{const l=S.sarc;closeSheet();S.sv={list:l.slice().reverse(),i:l.length-1-(+e.dataset.i)};X.renderStory()};
A.hlnew=async()=>{sheet(`<h3>Sorotan baru</h3><label>Nama sorotan</label><input id="hl_t" maxlength="20" placeholder="Mis. Liburan"><label>Cover (opsional)</label><input id="hl_c" type="file" accept="image/*"><label>Pilih cerita dari arsip</label><div id="hl_g">${SK}</div><div style="height:10px"></div><button class="btn block" data-act="hlsave">Simpan sorotan</button>`);const l=await myStories(S.uid);S.hsel=new Set();const el=$('#hl_g');if(!el)return;S.sarc=l;
el.innerHTML=l.length?`<div class="stkgrid">${l.map(x=>`<button class="stkc" data-act="hlpick" data-id="${x.id}" style="aspect-ratio:9/16;padding:0"><img src="${esc(x.image)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px"></button>`).join('')}</div>`:'<p class="mut">Belum ada cerita untuk disorot. Buat cerita dulu.</p>'};
A.hlpick=e=>{const id=e.dataset.id;S.hsel.has(id)?S.hsel.delete(id):S.hsel.add(id);e.classList.toggle('sel',S.hsel.has(id))};
A.hlsave=async e=>{const t=$('#hl_t').value.trim();if(!t)return toast('Isi nama sorotan');if(!S.hsel.size)return toast('Pilih minimal 1 cerita');if(!guard(t,'highlight',true))return;e.disabled=true;
try{const f=$('#hl_c').files[0],ids=[...S.hsel],cover=f?await shrinkSq(f,200,.8):(S.sarc.find(x=>x.id==ids[0])?.image?await coverFrom(S.sarc.find(x=>x.id==ids[0]).image):'');
await addDoc(collection(db,'users',S.uid,'highlights'),{title:t.slice(0,20),cover,sids:ids,at:serverTimestamp()});closeSheet();toast('Sorotan dibuat');drawHighlights(S.uid,true)}catch(x){toast(errMsg(x));e.disabled=false}};
const coverFrom=src=>new Promise(res=>{const i=new Image();i.onload=()=>{const m=Math.min(i.width,i.height),c=document.createElement('canvas');c.width=c.height=160;c.getContext('2d').drawImage(i,(i.width-m)/2,(i.height-m)/2,m,m,0,0,160,160);res(c.toDataURL('image/jpeg',.75))};i.onerror=()=>res('');i.src=src});
A.hldel=async e=>{if(confirm('Hapus sorotan ini?')){await deleteDoc(doc(db,'users',S.uid,'highlights',e.dataset.id)).catch(x=>toast(errMsg(x)));drawHighlights(S.uid,true)}};

/* ---------- PENGATURAN ---------- */
const REL=['','Single','Pacaran','Menikah','Rumit','Sedang mencari'];
const prow=(i,t,sub,act,ex='')=>`<button class="chat-item" style="width:100%;text-align:left;background:none" data-act="${act}" ${ex}><span class="ic gi" style="width:38px;height:38px">${I[i]||I.gear}</span><div class="sp"><b>${t}</b><div class="un">${sub||''}</div></div>${I.back.replace('<svg','<svg style="width:16px;height:16px;transform:rotate(180deg)"')}</button>`;
views.settings=async function(){const u=S.me,fu=auth.currentUser,prov=(fu?.providerData||[]).map(p=>p.providerId),hasG=prov.includes('google.com'),hasPw=prov.includes('password');
const created=fu?.metadata?.creationTime?new Date(fu.metadata.creationTime).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'}):'-';
$('#main').innerHTML=`${back('profile')}Pengaturan</h3></div><div class="pad" style="display:flex;flex-direction:column;gap:14px">
<div class="card pad row">${av(u,'xl')}<div class="sp"><b>${esc(u.displayName||u.username)}</b><div class="un">@${esc(u.username)}</div></div><button class="ib" data-act="editprof" aria-label="Edit profil">${I.edit||I.gear}</button></div>
<div class="sec"><i></i><h3>Akun &amp; keamanan</h3></div><div class="card">${prow('user','Google',hasG?'Terhubung':'Belum terhubung · masuk dengan Google memakai Gmail yang sama','noop')}${prow('lock','Kata sandi',hasPw?'Kirim tautan ubah sandi ke email':'Atur sandi lewat email','pwreset')}${prow('mail','Email',esc(fu?.email||'-')+(fu?.emailVerified?' · terverifikasi':' · belum diverifikasi (ketuk untuk kirim)'),fu?.emailVerified?'noop':'mailver')}</div>
<div class="sec"><i></i><h3>Tampilan</h3></div><div class="card pad"><div class="un" style="margin-bottom:8px">Warna aplikasi</div><div class="swr">${PRESETS.map(([n,h])=>`<button class="sw ${(u.theme||'#2b4a86').toLowerCase()==h?'on':''}" style="background:${h}" data-act="theme" data-c="${h}" aria-label="${n}"></button>`).join('')}</div><div class="row" style="margin-top:10px"><input id="th_hex" value="${esc(u.theme||'#2b4a86')}" maxlength="7" placeholder="#2b4a86"><button class="btn sm" data-act="themehex">Terapkan</button></div></div>
<div class="sec"><i></i><h3>Profil</h3></div><div class="card pad"><label>Status hubungan</label><select id="st_rel">${REL.map(r=>`<option value="${r}" ${u.relStatus==r?'selected':''}>${r||'Tidak ditampilkan'}</option>`).join('')}</select><label>Lagu favorit (link Spotify, tampil sebagai banner di profil)</label><input id="st_sp" value="${esc(u.spotify||'')}" placeholder="https://open.spotify.com/track/…"><label>Siapa yang boleh mengirim pesan</label><select id="st_dm"><option value="all" ${(u.privacy?.dm||'all')=='all'?'selected':''}>Semua orang (non-follow masuk Permintaan)</option><option value="mutual" ${u.privacy?.dm=='mutual'?'selected':''}>Hanya yang saling follow</option></select><div style="height:12px"></div><button class="btn block" data-act="savesettings">Simpan</button></div>
<div class="sec"><i></i><h3>Keuangan</h3></div><div class="card">${prow('card','RVNBANK',esc(u.accNo||'')+' · '+nv(u.balance),'go','data-v="bank"')}${prow('gift','Koleksi &amp; inventaris','Semua gift dan aset milikmu','go','data-v="inv"')}</div>
<div class="sec"><i></i><h3>Sosial</h3></div><div class="card">${prow('users','Pengikut','Orang yang mengikutimu','flist','data-id="'+S.uid+'" data-k="followers"')}${prow('user','Mengikuti','Orang yang kamu ikuti','flist','data-id="'+S.uid+'" data-k="following"')}${prow('archive','Arsip cerita','Semua ceritamu','sarchive')}${prow('game','RVNMATCH','Cari pacar, besti, relationship','matchopen')}</div>
<div class="sec"><i></i><h3>Info akun</h3></div><div class="card pad"><div class="row"><span class="mut sp">User ID</span><b>#${esc(S.uid.slice(0,8))}</b></div><div class="row"><span class="mut sp">Username</span><b>@${esc(u.username)}</b></div><div class="row"><span class="mut sp">Bergabung</span><b>${created}</b></div><div class="row"><span class="mut sp">Status</span><b>Aktif</b></div></div>
<div class="card pad" style="border:1px solid #e57373"><b style="color:#c62828">${I.flag.replace('<svg','<svg style="width:16px;height:16px"')} Hapus akun</b><p class="mut">Menghapus akun akan menghapus <b>permanen</b> postingan, cerita, komentar milikmu, koleksi, saldo, dan profil. Tindakan ini tidak bisa dibatalkan.</p><details><summary style="cursor:pointer;color:#c62828;font-weight:700">Buka form hapus akun</summary><label>Ketik username kamu (${esc(u.username)})</label><input id="da_un" autocomplete="off">${hasPw?'<label>Sandi</label><input id="da_pw" type="password" autocomplete="current-password">':'<p class="mut">Kamu akan diminta masuk ulang dengan Google.</p>'}<div style="height:10px"></div><button class="btn block" style="background:#c62828" data-act="delacc">Hapus akun saya selamanya</button></details></div>
<button class="btn soft block" data-act="logout">Keluar</button></div>`};
A.noop=()=>{};
A.settings=()=>go('settings');
A.pwreset=async()=>{const em=auth.currentUser?.email;if(!em)return;await sendPasswordResetEmail(auth,em);toast('Tautan ubah sandi dikirim ke '+em)};
A.mailver=async()=>{await sendEmailVerification(auth.currentUser);toast('Email verifikasi dikirim')};
async function saveTheme(hex){S.me.theme=hex;try{localStorage.setItem('rvn_theme',hex)}catch{}applyTheme(hex);try{await updateDoc(doc(db,'users',S.uid),{theme:hex})}catch(e){toast(errMsg(e))}}
A.theme=e=>{saveTheme(e.dataset.c);$$('.sw').forEach(b=>b.classList.toggle('on',b==e));const h=$('#th_hex');if(h)h.value=e.dataset.c};
A.themehex=()=>{const v=$('#th_hex').value.trim();if(!/^#[0-9a-f]{6}$/i.test(v))return toast('Format warna: #rrggbb');saveTheme(v.toLowerCase());toast('Warna diterapkan')};
A.savesettings=async e=>{const sp=$('#st_sp').value.trim();if(sp&&!mkind(sp))return toast('Lagu favorit hanya menerima link Spotify');e.disabled=true;try{await updateDoc(doc(db,'users',S.uid),{relStatus:$('#st_rel').value,spotify:sp,privacy:{dm:$('#st_dm').value}});delete S.users[S.uid];toast('Pengaturan disimpan')}catch(x){toast(errMsg(x))}e.disabled=false};
function spBanner(url){const k=mkind(url);if(!k)return'';return`<div class="emb sp" style="margin:10px 0"><iframe src="https://open.spotify.com/embed/${k.t}/${k.id}?theme=0" allow="encrypted-media" loading="lazy" style="height:152px;width:100%;border:0;border-radius:14px"></iframe></div>`}
async function selfPurge(uid){const u=(await getDoc(doc(db,'users',uid))).data()||{};const D=async ds=>{for(let i=0;i<ds.length;i+=400){const b=writeBatch(db);ds.slice(i,i+400).forEach(d=>b.delete(d.ref));await b.commit()}};
const ps=await qd(query(collection(db,'posts'),where('uid','==',uid)));for(const p of ps){await D(await qd(collection(db,'posts',p.id,'likes')));await D(await qd(collection(db,'posts',p.id,'comments')))}await D(ps);
const st=await qd(query(collection(db,'stories'),where('uid','==',uid)));for(const s of st)for(const k of ['views','likes','replies'])await D(await qd(collection(db,'stories',s.id,k)));await D(st);
await D(await qd(query(collection(db,'follows'),where('follower','==',uid))));await D(await qd(query(collection(db,'follows'),where('followee','==',uid))));
const pr=await qd(query(collection(db,'products'),where('sellerUid','==',uid)));for(const p of pr)await D(await qd(collection(db,'products',p.id,'secret')));await D(pr);
await D(await qd(query(collection(db,'tracks'),where('uid','==',uid))));await D(await qd(query(collection(db,'matchSwipes'),where('from','==',uid))));
for(const c of ['saved','inventory','assets','notifs','stickers','highlights','chatPrefs'])await D(await qd(collection(db,'users',uid,c)));
await deleteDoc(doc(db,'matchPool',uid)).catch(()=>{});await deleteDoc(doc(db,'lives',uid)).catch(()=>{});
const b=writeBatch(db);if(u.usernameLower)b.delete(doc(db,'usernames',u.usernameLower));if(u.accNo)b.delete(doc(db,'accounts',u.accNo));b.delete(doc(db,'users',uid));await b.commit()}
A.delacc=async e=>{const un=($('#da_un').value||'').trim().toLowerCase();if(un!==S.me.username)return toast('Ketik username kamu dengan benar');if(!confirm('Semua datamu akan dihapus permanen. Lanjutkan?'))return;e.disabled=true;
try{const u=auth.currentUser,hasPw=u.providerData.some(p=>p.providerId=='password');if(hasPw){const pw=$('#da_pw')?.value;if(!pw)throw Error('Isi sandi untuk konfirmasi');await reauthenticateWithCredential(u,EmailAuthProvider.credential(u.email,pw))}else await reauthenticateWithPopup(u,new GoogleAuthProvider());
if(S.live)X.endLive();await selfPurge(S.uid);await deleteUser(u);toast('Akun dihapus. Sampai jumpa!')}catch(x){toast(errMsg(x));e.disabled=false}};

/* ---------- LAPOR & SEMATKAN ---------- */
A.report=e=>{const d=e.dataset;sheet(`<h3>${I.flag.replace('<svg','<svg style="width:18px;height:18px"')} Laporkan</h3><p class="mut">Pilih alasan. Laporan ditinjau staf RVNOISE.</p>${['Kata kasar / pelecehan','Spam atau penipuan','Konten dewasa','Ujaran kebencian','Lainnya'].map(r=>`<button class="chat-item" style="width:100%;text-align:left;background:none" data-act="reportsend" data-r="${r}" data-t="${d.t}" data-id="${d.id}" data-u="${d.u||''}" data-p="${d.p||''}">${r}</button>`).join('')}`)};
A.reportsend=async e=>{const d=e.dataset;try{await addDoc(collection(db,'reports'),{by:S.uid,type:d.t,tid:d.id,owner:d.u,pid:d.p,reason:d.r,status:'open',at:serverTimestamp()});closeSheet();toast('Laporan terkirim. Terima kasih!')}catch(x){toast(errMsg(x))}};
A.pinpost=async e=>{try{await setDoc(doc(db,'config','pinned'),{pid:e.dataset.id,at:serverTimestamp()});toast('Postingan disematkan di semua beranda');if(S.view=='home')X.refreshFeed()}catch(x){toast(errMsg(x))}};
A.unpin=async()=>{try{await deleteDoc(doc(db,'config','pinned'));toast('Sematan dilepas');if(S.view=='home')X.refreshFeed()}catch(x){toast(errMsg(x))}};
async function pinnedCard(){try{const s=await getDoc(doc(db,'config','pinned'));if(!s.exists())return'';const p=await getDoc(doc(db,'posts',s.data().pid));if(!p.exists())return'';const pp={id:p.id,...p.data()};S.pc[pp.id]=pp;S.pinPid=pp.id;await getUser(pp.uid);return`<div class="pinned"><div class="pinlbl">${I.pin} Disematkan oleh RVNOISE${S.isAdmin?` <button class="un" style="background:none;font-weight:700" data-act="unpin">Lepas</button>`:''}</div>${card(pp)}</div>`}catch{return''}}

/* ---------- MODERASI (dashboard staf) ---------- */
async function adminMod(ad){const [rs,lg]=await Promise.all([qd(query(collection(db,'reports'),where('status','==','open'),limit(50))),qd(query(collection(db,'modLog'),orderBy('at','desc'),limit(30)))]);
const rl=rs.map(d=>({id:d.id,...d.data()}));await Promise.all([...rl.map(r=>getUser(r.owner||r.by)),...lg.map(d=>getUser(d.data().uid))]);
ad.innerHTML=`<div class="card pad"><b>Penjaga otomatis aktif</b><p class="mut">Filter kata kasar bekerja di aplikasi dan di aturan database untuk username, postingan, komentar, dan chat. Percobaan yang diblokir tercatat di bawah.</p></div>
<div class="sec"><i></i><h3>Laporan terbuka (${rl.length})</h3></div>${rl.length?rl.map(r=>`<div class="card pad"><div class="nm">${esc(r.type)} · ${esc(r.reason)}</div><div class="un">pelapor @${esc(S.users[r.by]?.username||'?')} · dilaporkan @${esc(S.users[r.owner]?.username||'?')}</div><div class="row" style="margin-top:8px;flex-wrap:wrap"><button class="btn sm" data-act="x_repdel" data-id="${r.id}">Hapus konten</button><button class="btn sm soft" data-act="x_repban" data-id="${r.id}" data-u="${r.owner}">Blokir pengguna</button><button class="btn sm soft" data-act="x_repok" data-id="${r.id}">Abaikan</button></div></div>`).join(''):'<p class="mut c pad">Tidak ada laporan.</p>'}
<div class="sec"><i></i><h3>Percobaan diblokir filter</h3></div>${lg.length?lg.map(d=>{const x=d.data(),u=S.users[x.uid]||{};return`<div class="card pad"><div class="un">@${esc(u.username||'?')} · ${esc(x.area)}</div><div>${esc(x.sample)}</div></div>`}).join(''):'<p class="mut c pad">Belum ada.</p>'}`;S.reps=Object.fromEntries(rl.map(r=>[r.id,r]))}
ADM.x_repdel=async e=>{const r=S.reps?.[e.dataset.id];if(!r)return;try{if(r.type=='post')await deleteDoc(doc(db,'posts',r.tid));else if(r.type=='comment'&&r.pid)await deleteDoc(doc(db,'posts',r.pid,'comments',r.tid));await updateDoc(doc(db,'reports',r.id),{status:'done'});toast('Konten dihapus');ADM.x_tab?.({dataset:{k:'mod'}})}catch(x){toast(errMsg(x))}};
ADM.x_repban=async e=>{if(!confirm('Blokir pengguna ini?'))return;try{await updateDoc(doc(db,'users',e.dataset.u),{banned:true});await updateDoc(doc(db,'reports',e.dataset.id),{status:'done'});toast('Pengguna diblokir');ADM.x_tab?.({dataset:{k:'mod'}})}catch(x){toast(errMsg(x))}};
ADM.x_repok=async e=>{await updateDoc(doc(db,'reports',e.dataset.id),{status:'done'}).catch(x=>toast(errMsg(x)));ADM.x_tab?.({dataset:{k:'mod'}})};

/* ---------- LIVE: suara & video lewat WebRTC (sinyal via Firestore) ---------- */
const ICE={iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun1.l.google.com:19302'},{urls:['turn:openrelay.metered.ca:80','turn:openrelay.metered.ca:443','turn:openrelay.metered.ca:443?transport=tcp'],username:'openrelayproject',credential:'openrelayproject'}]},MAXV=12;
function liveRTC(host,isHost,cl){
if(isHost){const pcs={};
(async()=>{try{const old=await qd(collection(db,'lives',host,'rtc'));for(const d of old)await deleteDoc(d.ref).catch(()=>{})}catch{}
cl.push(onSnapshot(collection(db,'lives',host,'rtc'),snap=>snap.docChanges().forEach(async ch=>{const d=ch.doc,x=d.data(),id=d.id;if(ch.type==='removed'){pcs[id]?.close();delete pcs[id];return}if(!x.offer||x.answer||pcs[id]||!S.live)return;if(Object.keys(pcs).length>=MAXV)return;
const pc=new RTCPeerConnection(ICE);pcs[id]=pc;S.live.getTracks().forEach(t=>pc.addTrack(t,S.live));pc.onicecandidate=e=>{e.candidate&&addDoc(collection(db,'lives',host,'rtc',id,'host'),e.candidate.toJSON()).catch(()=>{})};
try{await pc.setRemoteDescription(x.offer);const an=await pc.createAnswer();await pc.setLocalDescription(an);await updateDoc(d.ref,{answer:{type:an.type,sdp:an.sdp}});
cl.push(onSnapshot(collection(db,'lives',host,'rtc',id,'viewer'),s=>s.docChanges().forEach(c=>{c.type=='added'&&pc.addIceCandidate(c.doc.data()).catch(()=>{})})))}catch{}})),e=>toast(errMsg(e)))})();
cl.push(()=>Object.values(pcs).forEach(p=>p.close()));return}
const v=$('#lv'),st=$('#lstat'),say=t=>{const s=$('#lstat');if(s)s.innerHTML=t};
const start=()=>{const rid=S.uid+'_'+Date.now().toString(36),pc=new RTCPeerConnection(ICE),stream=new MediaStream();let done=false,ok=false;const q=[];
say('Menyambungkan siaran…');
pc.ontrack=e=>{stream.addTrack(e.track);if(v){v.srcObject=stream;v.muted=false;const sb=$('#lsnd');v.play().then(()=>{if(sb)sb.hidden=!!v.muted}).catch(()=>{v.muted=true;v.play().catch(()=>{});if(sb)sb.hidden=false})}};
const bad=()=>{if(!ok)say('Siaran belum tersambung. <button class="btn sm" data-act="lretry">Coba lagi</button>')};
pc.onconnectionstatechange=()=>{if(pc.connectionState=='connected'){ok=true;say('')}if(pc.connectionState=='failed'||pc.connectionState=='disconnected')bad()};
setTimeout(bad,15000);
pc.addTransceiver('video',{direction:'recvonly'});pc.addTransceiver('audio',{direction:'recvonly'});
pc.onicecandidate=e=>{e.candidate&&addDoc(collection(db,'lives',host,'rtc',rid,'viewer'),e.candidate.toJSON()).catch(()=>{})};
(async()=>{try{const off=await pc.createOffer();await pc.setLocalDescription(off);await setDoc(doc(db,'lives',host,'rtc',rid),{vid:S.uid,offer:{type:off.type,sdp:off.sdp},at:serverTimestamp()});
cl.push(onSnapshot(doc(db,'lives',host,'rtc',rid),async s=>{const x=s.data();if(x?.answer&&!done){done=true;await pc.setRemoteDescription(x.answer).catch(()=>{});q.splice(0).forEach(c=>pc.addIceCandidate(c).catch(()=>{}))}}));
cl.push(onSnapshot(collection(db,'lives',host,'rtc',rid,'host'),s=>s.docChanges().forEach(c=>{if(c.type!='added')return;if(done)pc.addIceCandidate(c.doc.data()).catch(()=>{});else q.push(c.doc.data())})))}catch(e){say('Gagal menyambung: '+esc(e.code=='permission-denied'?'rules belum diperbarui':(e.message||e)))}})();
S.lend=()=>{pc.close();deleteDoc(doc(db,'lives',host,'rtc',rid)).catch(()=>{})};cl.push(S.lend)};
S.lstart=()=>{try{S.lend&&S.lend()}catch{}start()};start()}
A.lretry=()=>S.lstart&&S.lstart();
A.lunmute=()=>{const v=$('#lv');if(!v)return;v.muted=false;v.play().catch(()=>{});const b=$('#lsnd');if(b)b.hidden=true};
A.lmic=e=>{const t=S.live?.getAudioTracks()[0];if(!t)return toast('Mikrofon tidak tersedia');t.enabled=!t.enabled;e.classList.toggle('off',!t.enabled);e.innerHTML=t.enabled?I.mic:I.micoff};
A.lcam=e=>{const t=S.live?.getVideoTracks()[0];if(!t)return toast('Kamera tidak tersedia');t.enabled=!t.enabled;e.classList.toggle('off',!t.enabled)};

/* ---------- deteksi rules usang ---------- */
async function rulesCheck(){try{await getDoc(doc(db,'config','pinned'));$('#rulesbn')?.remove()}catch(e){if(e.code!='permission-denied')return;if($('#rulesbn'))return;const d=document.createElement('div');d.id='rulesbn';d.innerHTML='<b>Rules Firestore belum diperbarui.</b> Buka Firebase Console &gt; Firestore &gt; Rules, tempel isi firestore.rules terbaru, lalu Publish. Setelah itu muat ulang aplikasi. <button data-act="rulesx">Tutup</button>';document.body.prepend(d)}}
A.rulesx=()=>$('#rulesbn')?.remove();

/* ---------- REFRESH: tarik ke bawah ---------- */
function initPTR(){let y0=0,pull=0,on=false;const ind=document.createElement('div');ind.id='ptr';ind.innerHTML=I.refresh;document.body.appendChild(ind);
document.addEventListener('touchstart',e=>{on=S.view=='home'&&window.scrollY<=0&&!document.querySelector('#sheet,#stv')&&e.touches.length==1&&!e.target.closest('.stories,.car,input,textarea');y0=e.touches[0].clientY;pull=0},{passive:true});
document.addEventListener('touchmove',e=>{if(!on)return;pull=e.touches[0].clientY-y0;if(pull>0){ind.style.transform=`translate(-50%,${Math.min(pull,110)-50}px) rotate(${pull*3}deg)`;ind.style.opacity=Math.min(1,pull/90)}},{passive:true});
document.addEventListener('touchend',()=>{if(!on)return;on=false;ind.style.opacity=0;ind.style.transform='translate(-50%,-60px)';if(pull>90)X.refreshFeed()},{passive:true})}
initPTR();
A.refresh=()=>{const b=$('[data-act=refresh]');b?.classList.add('spin');X.refreshFeed();setTimeout(()=>b?.classList.remove('spin'),800)};

/* ---------- username / nama ---------- */
function checkName(...vals){for(const v of vals)if(isBad(v)){logMod('nama',v);throw Error('Username atau nama mengandung kata tidak pantas')}}

return{views,ACT:A,isBad,mask,guard,safe,hm,applyTheme,drawHighlights,spBanner,rankFeed,watchSeen,pinnedCard,adminMod,liveRTC,rulesCheck,checkName,seenP,markP}}
