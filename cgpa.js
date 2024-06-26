import { course_details, grades_details } from "./datasheet.js" // Import Datasheet

// Refresh input value
window.onload = function() {
  document.getElementById('coarse').value = '';
  }

// First elements
const button = document.getElementById('button');
const form = document.getElementById("cgpa");


// Get the total number of courses
console.log(course_details);
const l = Object.keys(course_details['courseDetails']).length;
console.log(l);

// Add course codes to an array
const arr  = [];
for (let i=0; i<l; i++) {
  arr[i] = course_details['courseDetails'][i].code
}
console.log(arr);

// All keys in a list
console.log(grades_details);
const grades = Object.keys(grades_details);
// Number of possible grades
const m = grades.length;
console.log(m);


// Dynamic input fields
button.addEventListener("click", () => {
  const n = document.getElementById('coarse').value;
    for (let i = 0; i < n; i++) {
        const br = document.createElement("br");

        // Select course code from dropdown
        const newInput = document.createElement("select");
        newInput.id = `course${i+1}`;
        newInput.className = "courses";

        // Select menu
        for (let i=0; i<l; i++) {
          const option = document.createElement("option");
          option.value = course_details['courseDetails'][i].credits;
          option.innerHTML = arr[i];
          newInput.appendChild(option);
        }

        // Chore
        newInput.addEventListener('change', (e) => {
          document.getElementById('cg').disabled=false;
          const k = document.getElementById('final');
          k.value = '';
          k.innerHTML='';
        })

        // Select grade from drop-down
        const grade = document.createElement('select');
        grade.id = `grade${i+1}`;
        grade.className = 'grades';
        grade.placeholder = "Enter your Grade"

        // Dropdown
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

  // Calculate CGPA
  const newButton = document.createElement("input");
  newButton.type="button";
  newButton.id="cg"
  newButton.value="Calculate CGPA";
  form.appendChild(newButton);

  newButton.addEventListener('click', (e) => {

      e.target.disabled = true; // Chore
      const _gpa = [];
      const cr = [];

      // Total number of credits and weighted GPA in two arrays -- could have been one
      for(let i=0; i<n; i++) {
        const credits = document.getElementById(`course${i + 1}`).value;
        cr.push(Number(credits));
        const gpa = document.getElementById(`grade${i + 1}`).value;
        _gpa.push(credits * gpa);
  
      }
      console.log(_gpa);
      console.log(cr);

      // Sum of weighted GPA and total credits
      let gpa_sum = 0;
      let cr_sum = 0;

      for(let i=0; i<n; i++) {
        gpa_sum += _gpa[i];
        cr_sum += cr[i];
      }

      console.log(gpa_sum);
      console.log(cr_sum);

      // The computation
      const cgpa = gpa_sum / cr_sum;
      const final = document.createElement("p");
      final.id = 'final';
      final.value = `Your CGPA is ${cgpa}`;
      final.innerHTML = `Your CGPA is ${cgpa}`;
      form.appendChild(final);
  })
})

