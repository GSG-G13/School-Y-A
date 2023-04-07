const customers = document.querySelector("#customers");


const ShowAll = (data) => {
    data.forEach(ele => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td1.textContent = ele.name;
        td2.textContent = ele.birthdate;
        td3.textContent = ele.subject;
        td4.textContent = "Edit - DEl";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        customers.appendChild(tr);
    });
}
fetch("/student")
    .then(data => data.json())
    .then((data) => {
        console.log(data);
        ShowAll(data);
    });

