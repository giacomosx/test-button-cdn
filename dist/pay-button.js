const link=document.createElement("link");link.rel="stylesheet",link.href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",document.head.appendChild(link),document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("[data-artpay-button]");if(!t)return void console.warn("ArtPay: Nessun elemento target trovato per il bottone.");const e=document.createElement("button");e.className="artpay-button",e.innerHTML="Paga con ArtPay",e.style.backgroundColor="#241C3A",e.style.color="white",e.style.border="none",e.style.padding="8px 24px",e.style.textAlign="center",e.style.fontSize="18px",e.style.cursor="pointer",e.style.width="100%",e.style.borderRadius="16px",e.style.fontFamily="Inter",e.style.transition="background-color 0.3s ease",e.addEventListener("mouseover",(function(){e.style.backgroundColor="#30264E"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="#241C3A"})),e.addEventListener("click",(function(){const t=new CustomEvent("artpay:click",{detail:{message:"Bottone ArtPay cliccato",timestamp:Date.now()}});document.dispatchEvent(t)})),t.appendChild(e)}));