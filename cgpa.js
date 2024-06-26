import { course_details, grades_details } from "./datasheet.js"

window.onload = function() {
  document.getElementById('coarse').value = '';
  }

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


console.log(arr);

console.log(grades_details);

button.addEventListener("click", () => {
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
        newInput.addEventListener('change', (e) => {
          document.getElementById('cg').disabled=false;
          const k = document.getElementById('final');
          k.value = '';
          k.innerHTML='';
          
        })
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
  form.appendChild(newButton);
  newButton.addEventListener('click', (e) => {
      console.log(e);
      e.target.disabled = true;
      const _gpa = [];
      const cr = [];

      for(let i=0; i<n; i++) {
        const credits = document.getElementById(`course${i + 1}`).value;
        cr.push(Number(credits));
        const gpa = document.getElementById(`grade${i + 1}`).value;
        _gpa.push(credits * gpa);
  
      }
      console.log(_gpa);
      console.log(cr);
      let cr_sum = 0;
      let gpa_sum = 0;
      for(let i=0; i<n; i++) {
        cr_sum += cr[i];
        gpa_sum += _gpa[i];
      }
      console.log(cr_sum);
      console.log(gpa_sum);
      const cgpa = gpa_sum / cr_sum;
      const final = document.createElement("p");
      final.id = 'final';
      final.value = `Your CGPA is ${cgpa}`;
      final.innerHTML = `Your CGPA is ${cgpa}`;
      form.appendChild(final);
  })
})

