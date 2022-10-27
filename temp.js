/*<!--This JavaScript Section Fuction Of Qr Code Generating Section Its When Click Submiting Fuction Collect form Data To Generate QR Code Data Details Based 
Its Only Available To Control Candidate QR Code Generating  */
function generateq() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var proof = document.getElementById('proof').value;

    console.log('Name: ' + name + " " + email + " " + phone + " " + proof);

    var url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Name:" +
    name + "%0a Email: " + email + " phone: " + phone + " Proof: " + proof;

    var ifr = `<iframe src="${url}" height="200" width="200"></iframe>`;

    document.getElementById('qrcode').innerHTML = ifr;
}

//This Section Disable in Right Click Button Its help To Dont Make A copy Of This Project and Unlike to showing Programing Implementing Details
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled');    
    }, false);


