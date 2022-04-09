$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


// enable mailto function in JS, using details from: https://stackoverflow.com/questions/61204930/html-form-submit-button-not-working-in-mobile-phones
window.addEventListener("load", function() {
  document.getElementById("mailtolink").addEventListener("click", function(e) {
    // e.preventDefault() // remove after testing
    let url = new URL(this.href);
    const name = document.querySelector("[name=yourName]").value.trim();
    const email = document.querySelector("[name=yourEmail]").value.trim();
    const message = document.querySelector("[name=yourMessage]").value.trim();
    const address = document.querySelector('[name=yourAddress]').value.trim();
    const postcode = document.querySelector('[name=yourPostcode]').value.trim();
    const phone = document.querySelector('[name=yourPhoneNumber]').value.trim();
    const project = document.querySelector('[name=yourProjectType]').value.trim();
    url.searchParams.set("from", email);
    url.searchParams.set("subject", project + "Message from " + (document.title || location.hostname))
    url.searchParams.set("body", name + "phone number", phone + "address", address + "postcode", postcode, "said " + message)
    this.href=url;
    console.log(url)
  })
});




