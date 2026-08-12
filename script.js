let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;
    let attendance = document.getElementById("attendance").value;

    if (name == "" || roll == "" || course == "" || marks == "" || attendance == "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course,
        marks: marks,
        attendance: attendance
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("attendance").value = "";
}

function getGrade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function displayStudents() {
    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student, index) {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.course}</td>
                <td>${student.marks}</td>
                <td>${student.attendance}%</td>
                <td>${getGrade(student.marks)}</td>
                <td>
                    <button class="edit" onclick="editStudent(${index})">Edit</button>
                    <button class="delete" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;

        table.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("course").value = student.course;
    document.getElementById("marks").value = student.marks;
    document.getElementById("attendance").value = student.attendance;

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function searchStudent() {
    let search = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(function(row) {
        let text = row.innerText.toLowerCase();

        if (text.includes(search)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

displayStudents();
