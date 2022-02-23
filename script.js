function myFunction() {
    // Get the checkbox
    const checkBox = document.getElementById("myCheck");

    var price_basic = document.querySelector(".price_basic");

    var price_professional = document.querySelector(".price_professional");

    var price_master = document.querySelector(".price_master");

    // If the checkbox is checked, display the output text
    if (checkBox.checked === true){
        price_basic.innerHTML = "&dollar;199.99";

        price_professional.innerHTML = "&dollar;249.99";

        price_master.innerHTML = "&dollar;399.99";
    } else {
        price_basic.innerHTML = "&dollar;19.99";

        price_professional.innerHTML = "&dollar;24.99";

        price_master.innerHTML = "&dollar;39.99";
    }
}