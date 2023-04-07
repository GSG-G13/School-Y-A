const sub = document.querySelector("#sub");
const submitTeacher = document.querySelector("#submitTeacher");
const customers = document.querySelector("#customers");
const link = document.querySelector(".link");



sub.addEventListener('click', (e) => {
    // e.preventDefault()
    fetch("/student")
        .then(data => data.json())
        .then((data) => {
            showData(data);
        });
});


fetch("/student")
    .then(data => data.json())
    .then((data) => {
        showData(data);
    });



const showData = (data) => {
    data.forEach(ele => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        const iDelete = document.createElement("i");
        iDelete.classList = 'fa fa-trash-alt';

        const iEdit = document.createElement("i");
        iEdit.classList = 'fa fa-edit';


        td1.textContent = ele.name;
        td2.textContent = ele.birthdate;
        td3.textContent = ele.subject;
        td4.appendChild(iDelete);
        td4.appendChild(iEdit);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        customers.appendChild(tr);

        iDelete.addEventListener('click', (e) => {
            fetch(`/student/${ele.id}`, {
                method: "DELETE",
            }).then(window.location.reload());
        });

        
    });
}