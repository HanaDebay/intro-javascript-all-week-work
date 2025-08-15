document.getElementById("dataForm").addEventListener("submit",function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const studentClass = document.getElementById("class").value;
    const marks = document.getElementById("marks").value;


    const tableBody = document.querySelector("#myTable tbody");
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = roll;
    newRow.insertCell(2).textContent = studentClass;
    newRow.insertCell(2).textContent = marks;
    document.getElementById("dataForm").reset();
});
//download using excel
//Finds the HTML element with the ID excelBtn the "Download Excel" button and listens for a "click" event.
document.getElementById("excelBtn").addEventListener("click", function(){
    //we are letting the export library which table to convert in to excel file
    let table = document.getElementById("myTable");
    //(XLSX) library’s helper function table_to_book to convert our HTML table into a workbook object
    let workbook = XLSX.utils.table_to_book(table, {sheet: "Student Report"})
    XLSX.writeFile(workbook, "StudentReport.xlsx");

});

//download using pdf
document.getElementById("pdfBtn").addEventListener("click", function(){
    //Extracts the jsPDF class from the window.jspdf object provided by the jsPDF library.
    const { jsPDF } = window.jspdf;
    //this creates a new pdf document object 
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("StudentReport", 14,10);

    // This automatically formats the HTML table into a clean, printable table inside the PDF.
    doc.autoTable({
        html: "#myTable",
        startY: 20,
        headStyles:{fillcolor:[0,54,290]},
        alternateRowStyles:{fillcolor:[240,240,240]},
        styles:{halign: 'center'}
    });
        doc.save("StudentReport.pdf");
});

