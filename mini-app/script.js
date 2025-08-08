const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("welcome").textContent = `Hi ${tg.initDataUnsafe.user.first_name}!`;

document.getElementById("postBtn").addEventListener("click", async () => {
    const statusText = document.getElementById("status").value.trim();
    if (!statusText) {
        alert("Status cannot be empty!");
        return;
    }

    try {
        await fetch("YOUR_BACKEND_URL/status", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: tg.initDataUnsafe.user.id,
                name: tg.initDataUnsafe.user.first_name,
                status: statusText
            })
        });
        alert("✅ Status posted!");
        tg.close();
    } catch (err) {
        alert("⚠️ Failed to post status");
    }
});
