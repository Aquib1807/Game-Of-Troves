function fun2(boxId) {
  document.getElementById(boxId).style.color = 'black';
  document.getElementById(boxId).style.backgroundColor = 'white';
}
let count = 0;
function fun1(boxId, buttonId) {
  let x = document.getElementById(boxId);
  let ans = x.value.trim().toLowerCase();
  if (
    (boxId == 'ans1' && ans === 'red') ||
    (boxId === 'ans2' && ans === 'italy') ||
    (boxId === 'ans3' && ans === 'european union')
  ) {
    x.style.backgroundColor = 'green';
    x.style.color = 'white';

    document.getElementById(boxId).disabled = true;
    document.getElementById(buttonId).disabled = true;
    count++;
    if (count === 3) {
      let permissionValue = 'e';
      for (let i = 0; i < 9; i++) {
        permissionValue += String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        );
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
        permissionValue +
        '; iamgotkeyforojasse=' +
        cookiesObject['iamgotkeyforojass'] +
        '; ' +
        expires +
        '; path=/';
      window.location.href = `/ufhsdhbfdhshnneodrishti`;
    }
  } else {
    x.style.backgroundColor = 'red';
    x.style.color = 'white';
  }
}
