function showData(e) {
    e.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    console.log ('name');
    console.log ('email');
    console.log ('phone');
    console.log ('subject');
    console.log ('message');

    
    let emailReceiver = 'sherly.pisperi1604@gmail.com'
    let bodyEmail = `Hy, my name is ${name}. i am so excited with your portofolio.${subject}, ${message}`
    
    if (name == '') {
        return alert("name wajib diisi")
    } else if (email == '') {
        return alert("email wajib diisi")
    } else if (phone == '') {
        return alert("phone number wajib diisi")
    } else if (subject == '') {
        return alert("subject wajib diisi")
    } else if (message == '') {
        return alert("message wajib diisi")
    } else{
        window.open(`mailto:${emailReceiver}?subject=${subject}&body=${bodyEmail}`);
    }
    
}