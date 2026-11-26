(()=>{
const $=id=>document.getElementById(id), esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const all=TRIP.days.flatMap(d=>d.places.map((p,i)=>({...p,dayId:d.id,date:d.date,index:i})));
$("maptitle").textContent=TRIP.title;$("mapsub").textContent=TRIP.region+" · "+TRIP.dates;$("count").textContent=all.length;
const filter=$("filter"),params=new URLSearchParams(location.search);TRIP.days.forEach(d=>{const o=document.createElement("option");o.value=d.id;o.textContent="Day "+d.id;filter.appendChild(o)});if(params.has("day"))filter.value=params.get("day");
const map=L.map("map").setView([13.7563,100.5018],11);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
const markers=new Map(),routes=[];const pin=n=>L.divIcon({className:"",html:`<div class="pin"><span>${n}</span></div>`,iconSize:[27,27],iconAnchor:[13,27]});
all.forEach((p,i)=>{if(!Number.isFinite(+p.lat)||!Number.isFinite(+p.lng))return;const m=L.marker([+p.lat,+p.lng],{icon:pin(i+1)}).addTo(map);const url=p.mapsUrl||`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;m.bindPopup(`<div class="popupname">${esc(p.name)}</div>${esc(p.date)} · ${esc(p.time)}<br>${esc(p.description||"")}<br><a href="${url}" target="_blank" rel="noopener">เปิด Google Maps ↗</a>`);markers.set(`${p.dayId}-${p.index}`,m)});
async function draw(){
routes.forEach(x=>map.removeLayer(x));routes.length=0;const ds=filter.value==="all"?TRIP.days:TRIP.days.filter(d=>String(d.id)===filter.value),bounds=[];
for(const d of ds){const pts=d.places.filter(p=>Number.isFinite(+p.lat)&&Number.isFinite(+p.lng)).map(p=>[+p.lat,+p.lng]);bounds.push(...pts);if(pts.length<2)continue;let ok=false;
try{const cs=pts.map(p=>p[1]+","+p[0]).join(";");const r=await fetch(`https://router.project-osrm.org/route/v1/driving/${cs}?overview=full&geometries=geojson`);const j=await r.json();if(r.ok&&j.routes?.[0]){routes.push(L.geoJSON(j.routes[0].geometry,{style:{color:"#d58b5b",weight:4,opacity:.85}}).addTo(map));ok=true}}catch(e){}
if(!ok)routes.push(L.polyline(pts,{color:"#d58b5b",weight:3,dashArray:"7 7"}).addTo(map));
}if(bounds.length)map.fitBounds(bounds,{padding:[40,40],maxZoom:14});
}
function list(){const v=all.filter(p=>filter.value==="all"||String(p.dayId)===filter.value);$("places").innerHTML=v.map(p=>`<div class="place" data-key="${p.dayId}-${p.index}"><span class="number">${all.indexOf(p)+1}</span><div><strong>${esc(p.name)}</strong><small>DAY ${p.dayId} · ${esc(p.time)} · ${esc(p.type)}</small><p>${esc(p.description||p.address||"")}</p></div></div>`).join("")||"<p>ยังไม่มีสถานที่</p>";document.querySelectorAll(".place").forEach(el=>el.addEventListener("click",()=>{const m=markers.get(el.dataset.key);if(m){map.setView(m.getLatLng(),15);m.openPopup()}document.querySelectorAll(".place").forEach(x=>x.classList.remove("selected"));el.classList.add("selected")}))}
filter.addEventListener("change",()=>{list();draw()});list();draw();
const i=params.get("place");if(i!==null){const m=markers.get(`${params.get("day")}-${i}`);if(m)setTimeout(()=>{map.setView(m.getLatLng(),15);m.openPopup()},500)}
})();