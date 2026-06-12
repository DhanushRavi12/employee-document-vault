fetch("https://htoqb5qddk.execute-api.ap-south-1.amazonaws.com/dev/files")
.then(response => response.json())
.then(data => {

    let table = document.getElementById("docTable");

    data.forEach(doc => {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = doc.document_id;
        row.insertCell(1).innerHTML = doc.employee_id;
        row.insertCell(2).innerHTML = doc.document_type;
    });

})
.catch(error => console.error(error));
