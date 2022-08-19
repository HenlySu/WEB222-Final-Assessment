var form = document.querySelector('.contact-form');

var hiring = document.getElementById('hiring');
var comment = document.getElementById('comment');
var question = document.getElementById('question');

form.onsubmit = function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        return false;
    }
    else {
        return true;
    }
}
question.onchange = function() {
    if (question.checked) {
        document.querySelector('.hourly').classList.add('hidden');
    }
}
comment.onchange = function() {
    if (comment.checked) {
        document.querySelector('.hourly').classList.add('hidden');
    }
}
hiring.onchange = function() {
    if (hiring.checked) {
        document.querySelector('.hourly').classList.remove('hidden');
    }
}