const problem = `
FizzBuzz

Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

Example 2:

Input: n = 5 Output: ["1","2","Fizz","4","Buzz"]

Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
`



const submit_btn = document.getElementById("submit-btn");
const result_popup = document.getElementById("result-popup");



async function submit_btn_click() {
    var code = document.getElementById("code-editor").value;

    const request = new Request("http://127.0.0.1:5000/gen", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            problem: problem,
            code: code
        })
    });

    const result = await fetch(request);
    const res = await result.json();
    console.log(res)

    result_popup.style.display = "flex";
    result_popup.innerHTML = `
    <h3>Your code is</h3>
    <h1>${res.rating}% SLOP</h1>
    `;
}

submit_btn.addEventListener("click", submit_btn_click);


