(()=>{
const $=id=>document.getElementById(id), esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.title=TRIP.title+" | Itinerary";$("label").textContent=TRIP.label;$("title").innerHTML=esc(TRIP.title).replace(/,\s*/,",<br><em>").replace(/\.$/,".</em>");$("description").textContent=TRIP.description;$("dates").textContent="▣ "+TRIP.dates;$("duration").textContent="◷ "+TRIP.duration;$("region").textContent="⌖ "+TRIP.region;
let active=String(TRIP.days[0]?.id??1);
function render(){
$("tabs").innerHTML=TRIP.days.map(d=>`<button class="daytab ${String(d.id)===active?"active":""}" data-id="${esc(d.id)}">Day ${esc(d.id)} · ${esc(d.date.split("·").pop().trim())}</button>`).join("");
const d=TRIP.days.find(x=>String(x.id)===active)||TRIP.days[0];$("summary").textContent=d?.summary||"";
$("schedule").innerHTML=d?`<h3 class="daytitle">${esc(d.title)} <small>· ${d.places.length} STOPS</small></h3>`+d.places.map((p,i)=>{const url=p.mapsUrl||`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;return `<article class="stop"><div class="time">${esc(p.time)}</div><div><h3>${esc(p.name)}</h3><p>${esc(p.description||p.address||"")}</p><div class="stoplinks"><a href="${url}" target="_blank" rel="noopener">เปิด Google Maps ↗</a><a href="map.html?day=${d.id}&place=${i}">ดูบนแผนที่ ↗</a></div></div><span class="type">${esc(p.type)}</span></article>`}).join(""):"ยังไม่มีข้อมูล";
}
$("tabs").addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(b){active=b.dataset.id;render()}});render();
})();