/* แก้ข้อมูลทริปในไฟล์นี้: lat = ละติจูด, lng = ลองจิจูด (เลขทศนิยม) */
const TRIP = {
  brand: "TRAVEL NOTES",
  label: "YOUR NEXT ADVENTURE",
  title: "A little trip, a lot of memories.",
  description: "รวมแผนการเดินทาง สถานที่ และช่วงเวลาดี ๆ ไว้ในที่เดียว",
  dates: "ระบุวันที่เดินทาง",
  duration: "ระบุจำนวนวัน",
  region: "ระบุจังหวัด / ประเทศ",
  days: [
    {id:1,date:"Day 01 · ระบุวันที่",title:"วันแรก — เริ่มต้นการเดินทาง",summary:"ใส่รายละเอียดภาพรวมของวันนี้",places:[
      {time:"09:00",name:"ร้านวันดาข้าวแกง",type:"ร้านอาหาร",lat:18.775548,lng:100.7774808,address:"",mapsUrl:""},
      {time:"12:00",name:"ร้านอาหารตัวอย่าง",type:"อาหาร",description:"แวะรับประทานอาหารกลางวัน",lat:13.7465,lng:100.5340,address:"กรุงเทพมหานคร",mapsUrl:""},
      {time:"14:00",name:"ที่พักตัวอย่าง",type:"ที่พัก",description:"เช็กอินและพักผ่อน",lat:13.7308,lng:100.5418,address:"กรุงเทพมหานคร",mapsUrl:""}
    ]},
    {id:2,date:"Day 02 · ระบุวันที่",title:"วันที่สอง — ออกไปสำรวจ",summary:"ใส่รายละเอียดภาพรวมของวันนี้",places:[
      {time:"08:30",name:"สถานที่ตัวอย่าง 2",type:"จุดท่องเที่ยว",description:"ใส่รายละเอียดหรือกิจกรรม",lat:13.7279,lng:100.5241,address:"กรุงเทพมหานคร",mapsUrl:""},
      {time:"11:30",name:"คาเฟ่ตัวอย่าง",type:"คาเฟ่",description:"พักดื่มกาแฟและถ่ายรูป",lat:13.7203,lng:100.5230,address:"กรุงเทพมหานคร",mapsUrl:""}
    ]}
  ]
};
