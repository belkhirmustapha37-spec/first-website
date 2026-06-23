document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("chatButton");

  let box = document.getElementById("chatBox");

  let input = document.getElementById("userMessage");

  button.onclick = function () {
    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  };

  window.sendMessage = function () {
    let message = input.value;

    let reply = "";

    if (message.includes("سعر")) {
      reply = "يمكنك التواصل معنا لمعرفة الأسعار والعروض.";
    } else if (message.includes("خدمة")) {
      reply = "نقدم تنظيف المنازل والمكاتب والسيارات والسجاد.";
    } else if (message.includes("مرحبا")) {
      reply = "أهلاً بك 👋 كيف يمكنني مساعدتك؟";
    } else {
      reply = "شكراً لسؤالك، سيتواصل معك فريقنا قريباً.";
    }

    let newMessage = document.createElement("p");

    newMessage.innerHTML = "🤖 " + reply;

    box.appendChild(newMessage);

    input.value = "";
  };
});
