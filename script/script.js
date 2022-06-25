// for drag and drop area
const dragArea = document.getElementById("d-a");
let file;
const button = document.getElementById("browse");
const fileInput = document.getElementById("fileInput");
//when browse is clicked
button.onclick = () => {
    fileInput.click();
}
//When browse
fileInput.addEventListener("change", () => {
    file = fileInput.files[0];
    dragArea.classList.add('active');
    acceptAndDisplay();
});

// when file is inside the drag area
dragArea.addEventListener("dragover",(event) => {
    event.preventDefault();
    dragArea.classList.add('active');
});

//When file leaves the drag area
dragArea.addEventListener("dragleave",(event) => {
    event.preventDefault();
    dragArea.classList.remove('active');
});

//When the file is dropped in drag area
dragArea.addEventListener("drop",(event) => {
    event.preventDefault();
    file  = event.dataTransfer.files[0];//only first file is read
    acceptAndDisplay();
});



//to accept the input file and display
function acceptAndDisplay()
{
    let fileType = file.type;
    //valid extensions
    let fileExtensions = ['image/png','image/jpg', 'image/jpeg'];
    if(fileExtensions.includes(fileType))
    {
        let fileReader = new FileReader();   //this object helps in reading data from file
        fileReader.readAsDataURL(file); //read  data as binary
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src = "${fileURL}">`;
            dragArea.innerHTML = imgTag;
        };
    }
    else
    {
        alert("Wrong file type");
        dragArea.classList.remove('active');
    }
}
// drag and drop area js validation ends here ends here

//validate form
function validateform()
{
    var returnval = true;
    var val;

    //for input select category
    var categoryInput = document.getElementById('categoryInput');
    val = categoryInput.value;
    // console.log(val);
    if(val == "Select category")
    {
        // console.log("No value");
        setError('cat');
        returnval = false;
    }
    else
    {
        removeError('cat');
    }

    //for input select model
    var modelInput = document.getElementById('modelInput');
    val = modelInput.value;
    // console.log(val);
    if(val == "Select model")
    {
        setError('mod');
        returnval = false;
    }
    else
    {
        removeError('mod');
    }
    
    //for serial numner
    var snoInput = document.getElementById('snoInput');
    val = snoInput.value;
    if(val.length == 0)
    {
        setError('sno');
        returnval = false;
    }
    else
    {
        removeError('sno');
    }

    //for date of Invoice
    var dateInput = document.getElementById('dateInput');
    val=dateInput.value;
    if(val == "")
    {
        setError('doi');
        returnval = false;
    }
    else
    {
        removeError('doi');
    }

    //for file input
    val=fileInput.files.length;
    if(val == 0)
    {
        setError('fileinp');
        returnval = false;
    }
    else
    {
        removeError('fileinp');
    }

    return returnval;
}

//to display error
function setError(id)
{
    var element = document.getElementById(id);
    element.innerHTML=` <i class="fa fa-exclamation-circle fa-lg error" aria-hidden="true"  ></i> `;
}
//to remove error if input is re-entered
function removeError(id)
{
    var element = document.getElementById(id);
    element.innerHTML="";
}

// to navigate to home page
const cross = document.getElementById('cross');
const link = document.getElementById('navigate');

cross.onclick = () => {
    link.click();
    console.log("clicked");
}