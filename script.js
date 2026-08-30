document.addEventListener("DOMContentLoaded", () => {
  // Tela do envelope
  const openInvitation = document.getElementById("openInvitation");

  if (openInvitation) {
    openInvitation.addEventListener("click", () => {
      openInvitation.classList.add("opening");
      setTimeout(() => {
        window.location.href = "convite.html";
      }, 260);
    });
  }

  // Botões do convite
  const locationButton = document.getElementById("locationButton");
  const confirmButton = document.getElementById("confirmButton");

  if (typeof conviteConfig !== "undefined") {
    if (locationButton) locationButton.href = conviteConfig.localizacao;
    if (confirmButton) confirmButton.href = conviteConfig.confirmacao;
  }

  // Pequenas partículas douradas para dar vida ao fundo
  const sparkles = document.getElementById("sparkles");
  if (sparkles) {
    const amount = window.innerWidth < 500 ? 18 : 30;

    for (let i = 0; i < amount; i++) {
      const spark = document.createElement("span");
      spark.className = "spark";
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.top = `${Math.random() * 100}%`;
      spark.style.setProperty("--duration", `${3 + Math.random() * 5}s`);
      spark.style.animationDelay = `${Math.random() * 5}s`;
      spark.style.transform = `scale(${0.5 + Math.random() * 1.2})`;
      sparkles.appendChild(spark);
    }
  }
});
