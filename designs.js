// Select color input
var color= document.getElementById('colorPicker');
// Select size input
let myForm= document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()

let submitForm= myForm.addEventListener("submit",function (e) {
    e.preventDefault();    
    console.log("input has been submitted!")
    height= document.getElementById('inputHeight').value;
    width= document.getElementById('inputWidth').value;
    makeGrid(height,width);
    console.log(height,width)
});


function makeGrid(height, width) {
    //removes any already existing cells 
    document.querySelectorAll('tr').forEach(element  => element.remove(element));
    
    let tableCanvas= document.getElementById('pixelCanvas');
    
        
    for (h=1; h<=height; h++){    
        let tableRow= document.createElement('tr');
        let row= tableCanvas.appendChild(tableRow);
        for (w=1; w<=width; w++){
            let widthColumn= document.createElement('td');
            row.appendChild(widthColumn);
            //add color on click
            widthColumn.addEventListener('click',function paint(){
                widthColumn.style.backgroundColor= color.value;
            })
            // returns to default color on doubleclick
            widthColumn.addEventListener('dblclick',function defaultColor(){
                widthColumn.style.backgroundColor= 'white';
            });
        }

    }

} 

