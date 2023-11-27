let form = document.getElementById("ageForm");

    form.addEventListener("input", function() {
        calculateAgeInDays();
    });

    function calculateAgeInDays() {
        let birthDate = new Date(document.getElementById("birthDate").value);
        let currentDate = new Date();

        
        let ageInMilliseconds = currentDate - birthDate;

        
        let ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);

        document.getElementById("ageInDaysResult").innerHTML = "Age in Days: " + ageInDays.toFixed(0);
    }
