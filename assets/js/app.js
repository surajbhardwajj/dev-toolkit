// ======================================
// DevToolkit - JSON Formatter
// ======================================

// Elements
const jsonInput = document.getElementById("jsonInput");
const jsonOutput = document.getElementById("jsonOutput");

const formatBtn = document.getElementById("formatBtn");
const minifyBtn = document.getElementById("minifyBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// ================================
// Format JSON
// ================================
function formatJSON() {

    try {

        const parsedJSON = JSON.parse(jsonInput.value);

        jsonOutput.value = JSON.stringify(parsedJSON, null, 4);

    } catch (error) {

        jsonOutput.value = "❌ Invalid JSON\n\n" + error.message;

    }

}

// ================================
// Minify JSON
// ================================
function minifyJSON() {

    try {

        const parsedJSON = JSON.parse(jsonInput.value);

        jsonOutput.value = JSON.stringify(parsedJSON);

    } catch (error) {

        jsonOutput.value = "❌ Invalid JSON\n\n" + error.message;

    }

}

// ================================
// Copy Output
// ================================
async function copyOutput() {

    if (!jsonOutput.value.trim()) {

        alert("Nothing to copy.");

        return;

    }

    try {

        await navigator.clipboard.writeText(jsonOutput.value);

        alert("Copied successfully.");

    } catch (error) {

        alert("Copy failed.");

    }

}

// ================================
// Clear
// ================================
function clearEditor() {

    jsonInput.value = "";
    jsonOutput.value = "";

    jsonInput.focus();

}

// ================================
// Events
// ================================
formatBtn.addEventListener("click", formatJSON);

minifyBtn.addEventListener("click", minifyJSON);

copyBtn.addEventListener("click", copyOutput);

clearBtn.addEventListener("click", clearEditor);