window.onload = world;
function world(){
    let searchbtn = document.getElementById('lookup');
    let searchbtn2 = document.getElementById('citylookup');
    let msg = document.getElementById('result');
    searchbtn.addEventListener('click', function(element) {
        element.preventDefault();
        var myform = document.getElementById("country").value; 
        fetch("world.php"+"? country="+myform)
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('sumn nuh right')
            }
        })
        .then(data => {
            msg.innerHTML = data;
        })
        .catch(error => console.log('error: ' + error));

    });
    searchbtn2.addEventListener('click', function(element) {
        element.preventDefault();
        var myform = document.getElementById("country").value; 
        
        fetch("world.php"+"?country="+myform +"&context=cities")
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('sumn nuh right')
            }
        })
        .then(data => {
            msg.innerHTML = data;
        })
        .catch(error => console.log('error: ' + error));
           
    });

}