//======================== Contagem regressiva
 // Set the date we're counting down to
        var countDownDate = new Date("Aug 11, 2018 17:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("dias").innerHTML = days;
          document.getElementById("horas").innerHTML = hours;
          document.getElementById("minutos").innerHTML = minutes;
          document.getElementById("segundos").innerHTML = seconds;

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("dias").innerHTML = "00";
              document.getElementById("horas").innerHTML = "00";
              document.getElementById("minutos").innerHTML = "00";
              document.getElementById("segundos").innerHTML = "00";
            }
        }, 1000);
