// form management logic
const form = document.getElementById('form');

//id element
const idCardEle = document.getElementById('cardPreview');

//function to generate id card
function generateIdCard(stName, stDob, stEmail, stPhone, stImg){
    let idCard = document.createElement('div');
    idCard.setAttribute('class', 'idCard');

    //company logo
    let logo = document.createElement('img');
    logo.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YoOeqcN-R0jjNZ07yJ-Cq2n0CmmYtOvPKU-KIaWWn9H696oe-Ohmt3nrd4vI89kILVE&usqp=CAU');
    logo.setAttribute('class', 'logo')

    //company name
    let companyName = document.createElement('h2');
    companyName.textContent = 'Gomycode Lagos';
    companyName.setAttribute('class', 'companyname');

    //student Image
    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', stImg);
    studentImg.setAttribute('class', 'studentImg');

    //student name
    let studentName = document.createElement('p');
    studentName.textContent = "Name: " + stName;

    //student dob
    let studentDob = document.createElement('p');
    studentDob.textContent = stDob;

    //student email
    let studentEmail = document.createElement('p');
    studentEmail.textContent = stEmail;

    //student email
    let studentPhone = document.createElement('p');
    studentPhone.textContent = stPhone;

    //student email
    let expiryDate = document.createElement('p');
    expiryDate.textContent = 'Expiry Date: 2024';
    expiryDate.setAttribute('class', 'expiryDate')



    //add element to idcard
    idCard.appendChild(logo);
    idCard.appendChild(companyName);
    idCard.appendChild(studentImg);
    idCard.appendChild(studentName);
    idCard.appendChild(studentDob);
    idCard.appendChild(studentEmail);
    idCard.appendChild(studentPhone);
    idCard.appendChild(expiryDate);

    //add card to idcardele container
    idCardEle.appendChild(idCard);
}

// form handler
function formHandler(e) {
    e.preventDefault();

    //get input value
    const fullName = form.fullName.value;
    const dob = form.dob.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const profileImg = form.imgUrl.value;
    const about = form.about.value;

    generateIdCard(fullName, dob, email, phone, profileImg)


}


form.addEventListener('submit', formHandler)
