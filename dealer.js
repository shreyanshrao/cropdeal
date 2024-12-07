document.getElementById("apply-filters").addEventListener("click", function () {
    alert("Filters applied! Feature in development.");
});

document.getElementById("send-message").addEventListener("click", function () {
    const chatInput = document.querySelector("#chat-input input");
    const message = chatInput.value.trim();
    if (message) {
        const chatBox = document.getElementById("chat-box");
        const newMessage = document.createElement("div");
        newMessage.classList.add("chat-message");
        newMessage.innerHTML = `<span class="dealer">You:</span> ${message}`;
        chatBox.appendChild(newMessage);
        chatInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
