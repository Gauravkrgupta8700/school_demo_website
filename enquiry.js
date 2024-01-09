document.addEventListener('DOMContentLoaded', function() {
    let send = document.querySelector('input[type="submit"]');
    send.addEventListener('click', function(e) {
        e.preventDefault();
        let name = prompt('Enter your name');
        if (name) {
            send.value = 'Roll No. 1: ' + name;
        }
    });
});