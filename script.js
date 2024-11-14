function sendText() {
    var text = document.getElementById("inputText").value;

    fetch("https://96cb-35-236-236-151.ngrok-free.app/check_toxicity", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("toxicity-bar").value = data.result.toxicity[0];
        document.getElementById("toxicity-percent").innerText = (data.result.toxicity[0] * 100).toFixed(2) + "%";
        
        document.getElementById("severe_toxicity-bar").value = data.result.severe_toxicity[0];
        document.getElementById("severe_toxicity-percent").innerText = (data.result.severe_toxicity[0] * 100).toFixed(2) + "%";

        document.getElementById("obscene-bar").value = data.result.obscene[0];
        document.getElementById("obscene-percent").innerText = (data.result.obscene[0] * 100).toFixed(2) + "%";

        document.getElementById("identity_attack-bar").value = data.result.identity_attack[0];
        document.getElementById("identity_attack-percent").innerText = (data.result.identity_attack[0] * 100).toFixed(2) + "%";

        document.getElementById("insult-bar").value = data.result.insult[0];
        document.getElementById("insult-percent").innerText = (data.result.insult[0] * 100).toFixed(2) + "%";

        document.getElementById("threat-bar").value = data.result.threat[0];
        document.getElementById("threat-percent").innerText = (data.result.threat[0] * 100).toFixed(2) + "%";

        document.getElementById("sexual_explicit-bar").value = data.result.sexual_explicit[0];
        document.getElementById("sexual_explicit-percent").innerText = (data.result.sexual_explicit[0] * 100).toFixed(2) + "%";
    })
    .catch(error => console.error("Erro:", error));
}

