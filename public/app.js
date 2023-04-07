const sub = document.querySelector("#sub");
const submitTeacher = document.querySelector("#submitTeacher");
const customers = document.querySelector("#customers");

const nameStu = document.querySelector(".nameStu");
const birthDate = document.querySelector(".birthDate");
const subb = document.querySelector("#subb");
const Update = document.querySelector("#Update");


sub.addEventListener('click', (e) => {
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
        iEdit.addEventListener('click', () => {
            nameStu.value = td1.textContent;
            birthDate.value = td2.textContent;
            subb.value = td3.textContent;

            Update.style.display = 'block';
            sub.style.display = 'none';

            Update.addEventListener("click", () => {
                fetch(`/student`, {
                    method: "put",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: nameStu.value,
                        birthdate: birthDate.value,
                        subject: subb.value,
                        id: ele.id
                    }),
                }).then(window.location.reload());
            });
        });


    });
}


