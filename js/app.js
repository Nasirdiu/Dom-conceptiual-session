
// submit button 
const submitButton = document.getElementById("detail-submit-btn");

submitButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  console.log("hello input", buyerDetails);

  document.getElementById("buyer-info").innerText = buyerDetails.value;

  buyerDetails.value='';
});


