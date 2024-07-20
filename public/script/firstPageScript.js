function funcq1() {
  let str = '';
  str += document.getElementById('q1b1').value.toLowerCase();
  str += document.getElementById('q1b2').value.toLowerCase();
  str += document.getElementById('q1b3').value.toLowerCase();

  document.querySelectorAll('.abc').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1) {
        const nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value.length === 0) {
        const prevInput = inputs[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
    });
  });
  if (str === 'one') {
    document.querySelectorAll('.first').forEach((ele) => {
      ele.style.backgroundColor = 'blue';
      ele.style.color = 'white';
      ele.style.border = 'none';
    });
    document.getElementById('a4b1').value = 'O';
    document.getElementById('q1b1').setAttribute('disabled', 'true');
    document.getElementById('q1b2').setAttribute('disabled', 'true');
    document.getElementById('q1b3').setAttribute('disabled', 'true');
    document.getElementById('a4b1').style.backgroundColor = '#663dff';
    document.getElementById('a4b1').style.backgroundImage =
      'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)';
    document.getElementById('a4b1').style.color = 'white';
    document.getElementById('a4b1').style.border = 'none';

    func4();
    //         background-color: #663dff;
    // background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);

    window.scrollTo(0, 0);
  }
}
function funcq2() {
  let str = '';
  str += document.getElementById('q2b1').value.toLowerCase();
  str += document.getElementById('q2b2').value.toLowerCase();
  str += document.getElementById('q2b3').value.toLowerCase();
  str += document.getElementById('q2b4').value.toLowerCase();
  str += document.getElementById('q2b5').value.toLowerCase();
  if (str === 'camel') {
    document.querySelectorAll('.second').forEach((ele) => {
      ele.style.backgroundColor = 'blue';
      ele.style.color = 'white';
      ele.style.border = 'none';
    });
    document.getElementById('a4b2').value = 'J';
    document.getElementById('q2b1').setAttribute('disabled', 'true');
    document.getElementById('q2b2').setAttribute('disabled', 'true');
    document.getElementById('q2b3').setAttribute('disabled', 'true');
    document.getElementById('q2b4').setAttribute('disabled', 'true');
    document.getElementById('q2b5').setAttribute('disabled', 'true');
    document.getElementById('a4b2').style.backgroundColor = '#663dff';
    document.getElementById('a4b2').style.backgroundImage =
      'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)';
    document.getElementById('a4b2').style.color = 'white';
    document.getElementById('a4b2').style.border = 'none';
    window.scrollTo(0, 0);
    func4();
  }
}
function funcq3() {
  let str = '';
  str += document.getElementById('q3b1').value.toLowerCase();
  str += document.getElementById('q3b2').value.toLowerCase();
  str += document.getElementById('q3b3').value.toLowerCase();
  str += document.getElementById('q3b4').value.toLowerCase();
  str += document.getElementById('q3b5').value.toLowerCase();
  str += document.getElementById('q3b6').value.toLowerCase();
  str += document.getElementById('q3b7').value.toLowerCase();
  str += document.getElementById('q3b8').value.toLowerCase();
  str += document.getElementById('q3b9').value.toLowerCase();
  str += document.getElementById('q3b10').value.toLowerCase();
  if (str === 'typewriter') {
    document.querySelectorAll('.third').forEach((ele) => {
      ele.style.backgroundColor = 'blue';
      ele.style.color = 'white';
      ele.style.border = 'none';
    });
    document.getElementById('a4b3').value = 'A';
    document.getElementById('q3b1').setAttribute('disabled', 'true');
    document.getElementById('q3b2').setAttribute('disabled', 'true');
    document.getElementById('q3b3').setAttribute('disabled', 'true');
    document.getElementById('q3b4').setAttribute('disabled', 'true');
    document.getElementById('q3b5').setAttribute('disabled', 'true');
    document.getElementById('q3b6').setAttribute('disabled', 'true');
    document.getElementById('q3b7').setAttribute('disabled', 'true');
    document.getElementById('q3b8').setAttribute('disabled', 'true');
    document.getElementById('q3b9').setAttribute('disabled', 'true');
    document.getElementById('q3b9').setAttribute('disabled', 'true');
    // document.getElementById("a4b3").style.backgroundColor="#0f0ade";
    document.getElementById('a4b3').style.backgroundColor = '#663dff';
    document.getElementById('a4b3').style.backgroundImage =
      'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)';
    document.getElementById('a4b3').style.color = 'white';
    document.getElementById('a4b3').style.border = 'none';
    document.getElementById('a4b3').focus();
    window.scrollTo(0, 0);

    func4();
  }
}

function funcq4() {
  let str = '';
  str += document.getElementById('q4b1').value.toLowerCase();
  str += document.getElementById('q4b2').value.toLowerCase();
  str += document.getElementById('q4b3').value.toLowerCase();
  str += document.getElementById('q4b4').value.toLowerCase();
  str += document.getElementById('q4b5').value.toLowerCase();
  if (str === 'rinki') {
    document.querySelectorAll('.fourth').forEach((ele) => {
      ele.style.backgroundColor = 'blue';
      ele.style.color = 'white';
      ele.style.border = 'none';
    });
    document.getElementById('a4b4').value = 'S';
    document.getElementById('q4b1').setAttribute('disabled', 'true');
    document.getElementById('q4b2').setAttribute('disabled', 'true');
    document.getElementById('q4b3').setAttribute('disabled', 'true');
    document.getElementById('q4b4').setAttribute('disabled', 'true');
    document.getElementById('q4b5').setAttribute('disabled', 'true');
    // document.getElementById("a4b3").style.backgroundColor="#0f0ade";
    document.getElementById('a4b4').style.backgroundColor = '#663dff';
    document.getElementById('a4b4').style.backgroundImage =
      'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)';
    document.getElementById('a4b4').style.color = 'white';
    document.getElementById('a4b4').style.border = 'none';
    document.getElementById('a4b4').focus();
    window.scrollTo(0, 0);

    func4();
  }
}

function funcq5() {
  let str = '';
  str += document.getElementById('q5b1').value.toLowerCase();
  str += document.getElementById('q5b2').value.toLowerCase();
  str += document.getElementById('q5b3').value.toLowerCase();
  str += document.getElementById('q5b4').value.toLowerCase();
  str += document.getElementById('q5b5').value.toLowerCase();
  str += document.getElementById('q5b6').value.toLowerCase();
  if (str === 'burari') {
    document.querySelectorAll('.fifth').forEach((ele) => {
      ele.style.backgroundColor = 'blue';
      ele.style.color = 'white';
      ele.style.border = 'none';
    });
    document.getElementById('a4b5').value = 'S';
    document.getElementById('q5b1').setAttribute('disabled', 'true');
    document.getElementById('q5b2').setAttribute('disabled', 'true');
    document.getElementById('q5b3').setAttribute('disabled', 'true');
    document.getElementById('q5b4').setAttribute('disabled', 'true');
    document.getElementById('q5b5').setAttribute('disabled', 'true');
    document.getElementById('q5b6').setAttribute('disabled', 'true');
    // document.getElementById("a4b3").style.backgroundColor="#0f0ade";
    document.getElementById('a4b5').style.backgroundColor = '#663dff';
    document.getElementById('a4b5').style.backgroundImage =
      'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)';
    document.getElementById('a4b5').style.color = 'white';
    document.getElementById('a4b5').style.border = 'none';
    document.getElementById('a4b5').focus();
    window.scrollTo(0, 0);

    func4();
  }
}

function func4() {
  let str = '';
  str += document.getElementById('a4b1').value.toLowerCase();
  str += document.getElementById('a4b2').value.toLowerCase();
  str += document.getElementById('a4b3').value.toLowerCase();
  str += document.getElementById('a4b4').value.toLowerCase();
  str += document.getElementById('a4b5').value.toLowerCase();

  if (str === 'ojass') {
    document.getElementById('clap').style.cssText =
      'visibility: visible;transition: 2s;font-size:50px';
    setTimeout(() => {
      let x = 'b';
      for (let i = 0; i < 9; i++) {
        x += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }

      const expirationDate = new Date();
      expirationDate.setTime(
        expirationDate.getTime() + 2 * 24 * 60 * 60 * 1000
      );
      const expires = 'expires=' + expirationDate.toUTCString();

      const cookiesString = document.cookie;
      const cookiesArray = cookiesString.split(';');

      const cookiesObject = {};
      for (const cookie of cookiesArray) {
        const [name, value] = cookie.trim().split('=');
        cookiesObject[name] = value;
      }

      document.cookie =
        'permission=' +
        x +
        '; iamgotkeyforojass=' +
        cookiesObject['iamgotkeyforojass'] +
        '; ' +
        expires +
        '; path=/';

      window.location.href = '/uhhdfnskhdneodrishti';
    }, 4000);
  }
}

/*
 */