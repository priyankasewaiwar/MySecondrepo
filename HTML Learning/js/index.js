/*document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var phone = document.getElementById("phone").value;
    var time = document.getElementById("time").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
console.log("Phone: " + phone);
    console.log("Time: " + time);

    alert(name+"!! your Call is booked on "+time);
  });
*/

document.getElementById("submit").addEventListener("click", (e)=>{
e.preventDefault();
document.querySelector('#myForm').style.background = "#ccc";
});

document.getElementById("submit").addEventListener("mouseover", (e)=>{
    e.preventDefault();
    document.querySelector('#myForm').style.background = "green";
    });

    document.getElementById("submit").addEventListener("mouseout", (e)=>{
        e.preventDefault();
        document.querySelector('#myForm').style.background = "yellow";
        });