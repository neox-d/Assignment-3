import { course_details, grades_details } from "./datasheet.js"

const button = document.getElementById('button');

const form = document.getElementById("cgpa");


console.log(course_details);

const l = Object.keys(course_details['courseDetails']).length;
console.log(l);

const arr  = [];

for (let i=0; i<l; i++) {
  arr[i] = course_details['courseDetails'][i].code
}

const grades = Object.keys(grades_details);

const m = Object.keys(grades_details).length;
console.log(m);
// for (let i=0; i<m; i++) {
//   grades[i] = Object.keys(grades_details);
// }


console.log(arr);

console.log(grades_details);

button.addEventListener("click", () => {
    // alert("You Clicked me!")
  const n = document.getElementById('coarse').value;
    for (let i = 0; i < n; i++) {
        const br = document.createElement("br");
        const newInput = document.createElement("select");
        newInput.id = `course${i+1}`;
        newInput.className = "courses";
        for (let i=0; i<l; i++) {
          const option = document.createElement("option");
          option.value = course_details['courseDetails'][i].credits;
          option.innerHTML = arr[i];
          newInput.appendChild(option);
        }
        const grade = document.createElement('select');
        grade.id = `grade${i+1}`;
        grade.className = 'grades';
        grade.placeholder = "Enter your Grade"
        for (let i=0; i<m; i++) {
          const option = document.createElement("option");
          option.value = grades_details[grades[i]];
          option.innerHTML = grades[i];
          grade.appendChild(option);
        }
        form.appendChild(br);
        form.appendChild(newInput);
        form.appendChild(grade);
      }
  const new_br = document.createElement("br");
  form.appendChild(new_br);
  const newButton = document.createElement("input");
  newButton.type="button";
  newButton.id="cg"
  newButton.value="Calculate CGPA";
  // newButton.onclick = myFunction();
  form.appendChild(newButton);
})

function myFunction() {
  console.log(2);
  const _gpa = [];
  const cr = [];
    for(i=0; i<n; i++) {
      const credits = document.getElementById(`course${i + 1}`).value;
      cr.append(credits);
      const gpa = document.getElementById(`grade${i + 1}`).value;
      _gpa[i].append(credits * gpa);

    }
  const cgpa = sum(gpa) / sum(credits);
  const final = document.createElement("p");
  final.value = `Your CGPA is ${cgpa}`;
  final.innerHTML = `Your CGPA is ${cgpa}`;
  form.appendChild(final);
}