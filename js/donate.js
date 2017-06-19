
function sendAll(form){
debugger;
  let moneyText = form.money.value;
  let cardText = form.cardNumber.value;
  let emailText = form.email.value;
  let nameText = form.name.value;
  let identityCardText = form.identityCard.value;
  let phoneText = form.phone.value;
  let donateRef = firebase.database().ref('donate');

  let dataBaseAllRef = donateRef.push();
  dataBaseAllRef.set({
    money:moneyText,
    card:cardText,
    email:emailText,
    name:nameText,
    identityCard:identityCardText,
    phone:phoneText
  }).then(()=>{
    //location.href="signIn.html"
    alert("感謝您的填寫")
  });
event.preventDefault();

}
