document.addEventListener('DOMContentLoaded', function() {
    var myElement = document.getElementById('btn');
    
    if (myElement) {
        myElement.addEventListener('click', function() {
            window.print();
        });
    }
});

