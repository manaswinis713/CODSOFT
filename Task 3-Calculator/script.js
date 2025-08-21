let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string).toString();
      } catch {
        string = "Error";
      }
    } else if (value === 'C') {
      string = "";
    } else if (value === '←') {
      string = string.slice(0, -1);
    } else {
      string += value;
    }
    document.querySelector('input').value = string;
  });
});
