
const home = document.querySelector("#home");
const bg1 = document.querySelector("#bg-compo-1");
const bg2 = document.querySelector("#bg-compo-2");

home.addEventListener("mouseenter", () => {
    gsap.to(bg1, {
        scale: 1,
        opacity: 1
    })
    gsap.to(bg2, {
        scale: 1,
        opacity: 1
    })
})

home.addEventListener("mouseleave", () => {
    gsap.to(bg1, {
        scale: 0,
        opacity: 0
    })
    gsap.to(bg2, {
        scale: 0,
        opacity: 0
    })
})

home.addEventListener("mouseover", (coordinates) => {
    // console.log("x", coordinates.x);
    // console.log("y", coordinates.y);
    gsap.to(bg2, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/6,
        y: coordinates.y/6,
        ease: "back"
    })
    gsap.to(bg1, {
        scale: 1,
        opacity: 1,
        x: coordinates.x/3,
        y: coordinates.y/3,
        ease: "power3.out"
    })
})




document.getElementById('role').addEventListener('change', function() {
    var form = document.getElementById('myForm');
    var submitButton = document.getElementById('submitButton'); // Assuming 'submitButton' is the ID of your submit button
    
    // Remove any existing extra fields
    var extraFields = document.getElementsByClassName('extraField');
    while(extraFields[0]) {
        extraFields[0].parentNode.removeChild(extraFields[0]);
    }
    
    // Add extra fields based on selected option
    if (this.value == 'vendor') {
        var newField = document.createElement('input');
        newField.type = 'text';
        newField.name = 'contact';
        newField.placeholder = 'Enter your Phone no.'
        newField.className = 'extraField';
        newField.style.width = '200px';
        newField.style.height = '30px';
        newField.style.borderRadius = '5px';
        form.insertBefore(newField, submitButton); // Insert the new field before the submit button
    }
});