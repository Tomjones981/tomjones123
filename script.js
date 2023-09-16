var selectedRow = null;

function onFormSubmit(e){

    event.preventDefault();

    var formData = readFormData();

    if(selectedRow === null){

        insertNewRecord(formData);

    }else{

        updateRecord(formData)

    }

    resetForm();

    }

// Read operation using this function

function readFormData(){

    var formData = {};
   
    formData["firstName"] = document.getElementById("firstName").value;

    formData["lastName"] = document.getElementById("lastName").value;

    formData["section"] = document.getElementById("section").value;

    formData["sCHOOL"] = document.getElementById("sCHOOL").value;

    return formData;

}



// Create operation

function insertNewRecord(data){
    
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);

        cell1.innerHTML = data.firstName;

    var cell2 = newRow.insertCell(1);

        cell2.innerHTML = data.lastName;

    var cell3 = newRow.insertCell(2);

        cell3.innerHTML = data.section;

    var cell4 = newRow.insertCell(3);

        cell4.innerHTML = data.sCHOOL;

    var cell5 = newRow.insertCell(4);

        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Update</a>

                        <a href="#" onClick='onDelete(this)'>Delete</a>`;

}



// To Reset the data of fill input

function resetForm(){

    document.getElementById('firstName').value = '';

    document.getElementById('lastName').value = '';

    document.getElementById('section').value = '';

    document.getElementById('sCHOOL').value = '';

    selectedRow = null;

}



// For Edit operation

function onEdit(td){

    selectedRow = td.parentElement.parentElement;

    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;

    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;

    document.getElementById('section').value = selectedRow.cells[2].innerHTML;

    document.getElementById('sCHOOL').value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.firstName;

    selectedRow.cells[1].innerHTML = formData.lastName;

    selectedRow.cells[2].innerHTML = formData.section;

    selectedRow.cells[3].innerHTML = formData.sCHOOL;

}

function onDelete(td){

    if(confirm('Are you sure you want to delete this record?')){

        row = td.parentElement.parentElement;

        document.getElementById('employeeList').deleteRow(row.rowIndex);

        resetForm();

    }    

}