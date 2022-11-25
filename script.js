var container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `
    <h1 id="title" class="text-center">DOM Manipulation with Forms</h1>
    <p id="description" class="text-center">Enter some text in the fields below, then press the "Submit" button to add the details
    to the below table.</p>
    
    <div class="card">
        <div class="card-body">
            <form id="form" class="mb-4 row" novalidate>
                <h1 class="form-header">Food Choice Form</h1>
                <div class="mb-3 row">
                    <div class="col-md-6 form-group">
                        <label for="first-name" class="mb-2">First Name</label>
                        <input id="first-name" class="form-control" name="firstName" type="text" required placeholder="Enter First Name" required>
                        <div class="invalid-feedback">Please Enter First Name</div>
                    </div>

                    <div class="col-md-6 form-group">
                        <label for="last-name" class="mb-2 form-check-label">Last Name</label>
                        <input id="last-name" class="form-control" name="lastName" type="text" placeholder="Enter Last Name" required>
                        <div class="invalid-feedback">Please Enter Second Name</div>
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="col form-group">
                        <label for="address" class="mb-2">Address</label>
                        <textarea id="address" class="form-control" name="address" type="text" placeholder="Enter Address"></textarea>
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="col-md-4 form-group">
                        <label for="city" class="mb-2">City</label>
                        <input id="city" class="form-control" type="text" placeholder="Enter City Name">
                    </div>

                    <div class="col-md-3 form-group">
                        <label for="state" class="mb-2">State</label>
                        <input id="state" class="form-control" name="state" type="text" placeholder="Enter State Name">
                    </div>

                    <div class="col-md-3 form-group">
                        <label for="country" class="mb-2">Country</label>
                        <input id="country" class="form-control" name="country" type="text" placeholder="Enter Country Name">
                    </div>

                    <div class="col-md-2 form-group">
                        <label for="pincode" class="mb-2">Pincode</label>
                        <input id="pincode" class="form-control" name="pincode" type="text" placeholder="Enter Pincode" required>
                        <div class="invalid-feedback">Please Enter valid Pincode</div>
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="col-md-7">
                        <label class="mb-2">Choice of Food</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="dairy" name="foodChoice" id="dairy">
                            <label class="form-check-label" for="dairy">Dairy</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="fruit" name="foodChoice" id="fruit">
                            <label class="form-check-label" for="fruit">Fruit</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="grains" name="foodChoice" id="grains">
                            <label class="form-check-label" for="grains">Grains</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="foodChoice" value="vegetables" id="vegetables">
                            <label class="form-check-label" for="vegetables">Vegetables</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="foodChoice" value="protein" id="protein">
                            <label class="form-check-label" for="protein">Protein Foods</label>
                        </div>
                        <div id="checkboxOptions" class="invalid-checkbox">Please Select atleast two options</div>
                    </div>

                    <div class="col-md-5">
                        <label class="mb-2">Gender</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" value="Male" id="male">
                            <label class="form-check-label" for="male">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" value="Female" id="female">
                            <label class="form-check-label" for="gender">Female</label>
                        </div>
                    </div>

                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" id="resetBtn" type="reset" onclick=reset()>Reset</button>
                    <button class="btn btn-primary" id="submit" type="button" onclick=formSubmit(event)>Submit</button>
                </div>

            </form>  
        </div>
    </div>

    <h1>Survey Data</h1>
    <h6 id="tableDescription">Please submit an entry to get the table data.</h6>
    <div class="table-responsive-lg" id="tableContainer">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Food</th>
                    <th>Address</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Pincode</th>
                </tr>
            </thead>
            <tbody id="surveyEntries">

            </tbody>
        </table>
    </div>

    <!--Invalid Toast-->
    <div class="toast-container position-fixed top-50 end-0" style="z-index: 11">
      <div id="invalidToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Oops :-(</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body bg-danger text-white">
          Please fill the required fields.
        </div>
      </div>
    </div>


    <!--Valid Toast-->
    <div class="toast-container position-fixed top-50 end-0" style="z-index: 11">
      <div id="validToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Hurray :-)</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body bg-success text-white">
          Your opinion is recorded successfully.
        </div>
      </div>
    </div>
`;


// Add Created DOM to HTML
document.body.append(container);

function formSubmit() {
    // Target Form Element
    const foodChoiceForm = document.getElementById("form");

    // Activate Bootstrap Validations
    foodChoiceForm.classList.add("was-validated");

    // Create Bootstrap Toast Trigger
    var invalidElement = document.getElementById("invalidToast");
    var invalidToast = new bootstrap.Toast(invalidElement, {
        delay: 3000
    });

    // Get Survey Form Input Data    
    const formData = new FormData (foodChoiceForm);
    const formDataObj = Object.fromEntries(formData.entries()); 
    formDataObj.foodChoice = formData.getAll('foodChoice'); // Get all values of Checkbox Inputs

    // Check for invalid form Values
    if(formData.getAll('foodChoice').length < 2) {
        document.getElementById("checkboxOptions").style.display = "block";
        invalidToast.show(); // Activate Invalid Toast (Error Message)
        return;
    }

    else if(!foodChoiceForm.checkValidity()){
        document.getElementById("checkboxOptions").style.display = "none";
        invalidToast.show(); // Activate Invalid Toast (Error Message)
        return;
    }

    // Success Scenario
    else {
        document.getElementById("tableContainer").style.display = "block";
    
        addData(formDataObj); // Add Form data to Table
        var validElement = document.getElementById("validToast");
        var validToast = new bootstrap.Toast(validElement, {
            delay: 3000
        });
        validToast.show(); // Activate Valid Toast (Success Message)
        foodChoiceForm.reset(); // Reset Form
        foodChoiceForm.classList.remove("was-validated"); // Remove Bootstrap Validation CSS
        document.getElementById("checkboxOptions").style.display = "none"; // Remove Checkbox Validation
        document.getElementById("tableContainer").scrollIntoView(); // Move to Table
    }
};

var surveyEntries = document.getElementById("surveyEntries");

// Function for adding Survey Form Data to Table
const addData = ((dataObj) =>{
    let foodChoicesData= "";
    dataObj.foodChoice.forEach((value)=>{
        value = value.charAt(0).toUpperCase() + value.slice(1);
        foodChoicesData += value + " ";
    });

    surveyEntries.innerHTML +=`
    <tr>
        <td>${dataObj.firstName}</td>
        <td>${dataObj.lastName}</td>
        <td>${dataObj.gender == (null || undefined) ? "N/A" : dataObj.gender}</td>
        <td>${foodChoicesData == "" ? "N/A" : foodChoicesData}</td>
        <td>${dataObj.address}</td>
        <td>${dataObj.state}</td>
        <td>${dataObj.country}</td>
        <td>${dataObj.pincode}</td>
    </tr>`;
});
