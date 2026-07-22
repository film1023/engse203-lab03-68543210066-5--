// ดึง Element ต่างๆ มารอไว้
const form = document.getElementById('requestForm');
const studentNameInput = document.getElementById('studentName');
const livePreview = document.getElementById('livePreview');
const requestList = document.getElementById('requestList');

// 1. ระบบ Live Preview (อัปเดตตัวอย่างข้อความทันทีที่ผู้ใช้พิมพ์)
studentNameInput.addEventListener('input', (e) => {
    // ใช้ textContent เพื่อความปลอดภัยในการป้อนข้อมูล
    livePreview.textContent = e.target.value || "พิมพ์ข้อความเพื่อดูตัวอย่าง...";
});

// 2. ระบบตรวจสอบฟอร์มตอนกด Submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // บล็อกการโหลดหน้าใหม่เพื่อประมวลผลด้วย JS

    const nameValue = studentNameInput.value.trim();
    const nameError = document.getElementById('nameError');

    // ตรวจสอบเงื่อนไข: ถ้าไม่ได้กรอกชื่อ
    if (nameValue === "") {
        nameError.textContent = "กรุณากรอกชื่อ-นามสกุลให้เรียบร้อย";
        return; // สั่งหยุดทำงานทันที ไม่รีเซ็ตฟอร์ม และไม่เพิ่มข้อมูลลงลิสต์
    }

    // ถ้าผ่านการตรวจสอบความถูกต้อง (Valid)
    nameError.textContent = ""; // ล้างคำเตือน Error
    
    // สร้างรายการใหม่เพิ่มเข้าไปใน List โดยใช้ textContent ป้องกันช่องโหว่ความปลอดภัย
    const li = document.createElement('li');
    li.textContent = `คำร้องจากคุณ: ${nameValue}`;
    requestList.appendChild(li);

    // แสดงแจ้งเตือนความสำเร็จ
    alert("ส่งคำร้องสำเร็จแล้ว!");

    // รีเซ็ตล้างค่าในฟอร์มและรีเซ็ตค่า Live Preview ให้กลับเป็นค่าเริ่มต้น
    form.reset();
    livePreview.textContent = "พิมพ์ข้อความเพื่อดูตัวอย่าง...";
});
