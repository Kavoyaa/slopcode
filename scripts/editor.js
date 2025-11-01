// Show/hide output window logic

var output_state = "hidden"
const output_btn = document.getElementById("show-hide-btn");
const output_content = document.getElementById("output-content");
const output_heading = document.getElementById("output-heading");

function toggle_output_window() {
    // Revealing
    if (output_state === "hidden") {
        output_state = "unhidden";
        output_content.style = "display: block;"
        output_heading.style = "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;";
        output_btn.innerHTML = "<p>[HIDE]</p>";
    }
    // Hiding
    else {
        output_state = "hidden";
        output_content.style = "display: none;"
        output_heading.style = "border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;";
        output_btn.innerHTML = "<p>[SHOW]</p>";
    }
}

output_btn.addEventListener("click", toggle_output_window);


// Logic for "Run" button
const run_btn = document.getElementById("run-btn");

async function run_code() {
    var code = document.getElementById("code-editor").value;

    const request = new Request("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            language: "javascript",
            version: "18.15.0",
            files: [{
                name: "main.js",
                content: code
            }]
        })
    });

    const result = await fetch(request);
    const res = await result.json();
    output_content.innerText = res.run.output;

    if (output_state === "hidden") {
        toggle_output_window();
    }
}

run_btn.addEventListener("click", run_code);