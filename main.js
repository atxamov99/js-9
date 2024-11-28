// let name = prompt(`Ismingizni kiriting`);
// let surname = prompt(`Familyangizni kiriting`);
// let age = prompt(`yoshingizni kiriting`);

// document.querySelector(`#name`).textContent = name;
// document.querySelector(`#surname`).textContent = surname;
// document.querySelector(`#age`).textContent = age;

// let resultElement = document.querySelector(`result`);

// Foydalanuvchi ma'lumotlarini so'rash
let name = prompt(`Ismingizni kiriting`);
let surname = prompt(`Familyangizni kiriting`);
let age = prompt(`Yoshingizni kiriting`);


document.querySelector(`#name`).textContent = name;
document.querySelector(`#surname`).textContent = surname;
document.querySelector(`#age`).textContent = age;


const choice = prompt("Ismingiz katta yoki kichikligini tanlang:\n1) Katta\n2) Kichik");

if (choice === "1") {
    
    document.querySelector(`#name`).textContent = name.toUpperCase();
    document.querySelector(`#surname`).textContent = surname.toUpperCase();
} else if (choice === "2") {
    
    document.querySelector(`#name`).textContent = name.toLowerCase();
    document.querySelector(`#surname`).textContent = surname.toLowerCase();
} else {
    
    alert("Xato! Faqat 1 yoki 2 ni tanlang.");
    
    
}
