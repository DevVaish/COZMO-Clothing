function openChat() {
  document.getElementById("chatbot").style.display = "flex";
  document.getElementById("chat-icon").style.display = "none";
}

function closeChat() {
  document.getElementById("chatbot").style.display = "none";
  document.getElementById("chat-icon").style.display = "flex";
}

function sendMessage() {
  let input = document.getElementById("user-input");
  let msg = input.value.trim();
  if(msg === "") return;

  addUserMessage(msg);
  botReply(msg);
  input.value = "";
}

function sendQuick(text) {
  addUserMessage(text);
  botReply(text);
}

function addUserMessage(text) {
  let chatBody = document.getElementById("chat-body");
  let div = document.createElement("div");
  div.className = "user";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotMessage(text) {
  let chatBody = document.getElementById("chat-body");
  let div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = text; // Use innerHTML so links work
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// -------- UPDATED BOT REPLY FUNCTION --------
function botReply(message) {
  message = message.toLowerCase();

  // PRODUCT CATEGORY REPLIES
  if(message.includes("product")) {
    addBotMessage(
      "🛍️ We offer multiple categories of products. Choose one:<br>" +
      "• <a href='shop.html' target='_blank'>Electronics</a><br>" +
      "• <a href='shop.html' target='_blank'>Fashion</a><br>" +
      "• <a href='shop.html' target='_blank'>Accessories</a>"
    );
  }
  else if(message.includes("electronics")) {
    addBotMessage("💻 Explore the latest Electronics: <a href='shop.html' target='_blank'>Shop Electronics</a>");
  }
  else if(message.includes("fashion")) {
    addBotMessage("👗 Check out trendy Fashion collection: <a href='shop.html' target='_blank'>Shop Fashion</a>");
  }
  else if(message.includes("accessories")) {
    addBotMessage("🎧 Find your perfect Accessories here: <a href='shop.html' target='_blank'>Shop Accessories</a>");
  }

  // OFFERS
  else if(message.includes("offer")) {
    addBotMessage("💸 Which product category's offer would you like to know about? Choose: Electronics, Fashion, Accessories");
  }

  // TRACK & RETURN
  else if(message.includes("track") || message.includes("return")) {
    addBotMessage("📦 Please enter your valid Order ID to track or process return.");
  }

  // FALLBACK
  else {
    addBotMessage("❓ Sorry, I didn’t understand that. Please choose an option or type 'Products', 'Offers', 'Track Order', 'Return Policy'.");
  }
}
