function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if ( elUsername.value.length < 5) {
        el.Msg.textContent = 'Username must be 5 character or more';
    } else {
        elMsg.textContent = '';
    }
}