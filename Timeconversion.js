function digitalClock(seconds) {// นาฬิกาดิจิตอล เก็บค่าด้วยวินาที
    let hours = Math.floor(seconds / 3600); //ให้ชั่วโมง = วินาที / 3600 (3600วินาที = 60นาที) ใช้ Math.floor เผื่อให้ปัดเศษลงให้เป็นจำนวนเต็ม
    seconds = seconds % 3600;//ทำการคำนวณค่าเศษที่เหลือจากการหาร.
    let minutes = Math.floor(seconds / 60); //ให้ นาที = วินาที / 60 (60วินาที = 1นาที) ใช้ Math.floor เผื่อให้ปัดเศษลงให้เป็นจำนวนเต็ม
    seconds = seconds % 60;//ทำการคำนวณค่าเศษที่เหลือจากการหาร.
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));