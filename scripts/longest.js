const problem = `
FInd the longest word in an inputted string.<br>

Example:
Input: hello i am worlds
Output: worlds
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


