const tabs=document.querySelectorAll(".donate__button");tabs.forEach((t=>{t.addEventListener("click",(()=>{tabs.forEach((t=>{t.classList.remove("donate__button--active")})),t.classList.add("donate__button--active")}))}));