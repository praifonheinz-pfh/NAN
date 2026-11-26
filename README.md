# Travel Planner — GitHub Pages

เว็บไซต์ตัวอย่างพร้อมใช้งาน มี 2 หน้า: `index.html` (Itinerary) และ `map.html` (Map)

## แก้ข้อมูลทริป
แก้ไฟล์ `js/data.js` เป็นหลัก:
- `title`, `description`, `dates`, `duration`, `region` คือข้อมูลภาพรวม
- `days` คือวันเดินทางแต่ละวัน
- `places` คือจุดแวะ เรียงตามลำดับที่ต้องการ
- แต่ละสถานที่มี `time`, `name`, `type`, `description`, `lat`, `lng`, `address`, `mapsUrl`
- `lat` คือละติจูด และ `lng` คือลองจิจูด (พิกัดทศนิยม) เช่น `18.12345`, `100.12345`
- `mapsUrl` เว้นว่างได้ ระบบสร้างลิงก์ Google Maps จากพิกัดให้อัตโนมัติ

คัดลอก object ของสถานที่เพื่อเพิ่มจุดแวะ และคัดลอก object ใน `days` เพื่อเพิ่มวัน

## เผยแพร่บน GitHub Pages
1. สร้าง GitHub repository ใหม่ เช่น `my-travel-plan`
2. อัปโหลดทุกไฟล์และโฟลเดอร์ในชุดนี้ไว้ที่ root ของ repository
3. เปิด **Settings → Pages**
4. เลือก **Deploy from a branch** → branch `main` → folder `/(root)` → **Save**
5. รอเผยแพร่ แล้วแชร์ URL ที่ GitHub Pages แสดง เช่น `https://USERNAME.github.io/my-travel-plan/`

## หมายเหตุ
- แผนที่ใช้ Leaflet + OpenStreetMap ต้องเชื่อมต่ออินเทอร์เน็ต
- เส้นทางถนนเรียก OSRM public demo server; หากเรียกไม่สำเร็จจะแสดงเส้นประเชื่อมจุด ซึ่งไม่ใช่เส้นทางถนนจริง
- GitHub Pages เป็นเว็บไซต์สาธารณะ ผู้ที่มีลิงก์สามารถเข้าดูได้ และไม่มีระบบแก้ไขร่วมกันแบบเรียลไทม์
- ใช้ Live Server ใน VS Code เพื่อทดลองเปิดเว็บไซต์ก่อนเผยแพร่ได้
