document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("applicationForm");
    var successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

       
        if (!validateForm()) {
            return;
        }

       
        var transcriptFile = document.getElementById("transcript").files[0];
        var photoFile = document.getElementById("photo").files[0];

        
        if (transcriptFile) {
            console.log("Transcript file uploaded:", transcriptFile.name);
        }
        if (photoFile) {
            console.log("Passport-sized photo uploaded:", photoFile.name);
        }

        
        submitForm();
    });

    
    function validateForm() {
       

      
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var fullName = firstName + " " + lastName;
        if (!fullName) {
            alert("Applicant's Name is required.");
            return false;
        }

        
        var programSubject = document.getElementById("Program/Subject").value;
        if (!programSubject) {
            alert("Program/Subject is required.");
            return false;
        }

      
        var semester = document.getElementById("semester").value;
        if (!semester) {
            alert("Semester is required.");
            return false;
        }

       
        var transport = document.getElementById("transport").value;
        if (!transport) {
            alert("Transport is required.");
            return false;
        }



        return true; 
    }

  
    function submitForm() {
       
        successMessage.style.display = "block";
    }
});
