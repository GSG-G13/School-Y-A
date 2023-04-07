const teacherName = document.querySelector(".teacherName");
const teacherEmail = document.querySelector(".teacherEmail");
const teacherAdress = document.querySelector(".teacherAdress");
const subb = document.querySelector("#subb");
const Update = document.querySelector("#Update");

fetch("/teacher")
    .then(data => data.json())
    .then((data) => {
        console.log(data);
        showDataFomTeacher(data);
    });
const showDataFomTeacher = (data) => {
    data.forEach(ele => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const iDelete = document.createElement("i");
        iDelete.classList = 'fa fa-trash-alt';

        const iEdit = document.createElement("i");
        iEdit.classList = 'fa fa-edit';
        td1.textContent = ele.name;
        td2.textContent = ele.email;
        td3.textContent = ele.address;
        td4.textContent = ele.subject;
        td5.appendChild(iDelete);
        td5.appendChild(iEdit);



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5)
        customers.appendChild(tr);

        iDelete.addEventListener('click', (e) => {
            fetch(`/teacher/${ele.id}`, {
                method: "DELETE",
            }).then(window.location.reload());
        });
        iEdit.addEventListener('click', () => {
            teacherName.value = td1.textContent;
            teacherEmail.value = td2.textContent;
            teacherAdress.value = td3.textContent;
            subb.value = td4.textContent;

            Update.style.display = 'block';
            sub.style.display = 'none';
            Update.addEventListener("click", () => {
                fetch(`/teacher`, {
                    method: "put",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: teacherName.value,
                        email: teacherEmail.value,
                        address: teacherAdress.value,
                        subject: subb.value,
                        id: ele.id
                    }),
                }).then(window.location.reload());
            });
        });


    });
}
