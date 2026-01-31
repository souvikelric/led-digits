const DIGIT_HEIGHT = 120;
const DIGIT_GAP = 12;

class ScrollingDigit {
  constructor(wrapper) {
    this.window = document.createElement("div");
    this.window.classList.add("digit-window");

    this.stack = document.createElement("div");
    this.stack.classList.add("digit-stack");

    this.digits = [];

    // create digits 0–9
    for (let i = 0; i <= 9; i++) {
      const digit = new LedDigit(this.stack);
      digit.setValue(i);
      this.digits.push(digit);
    }

    this.window.appendChild(this.stack);
    wrapper.appendChild(this.window);

    this.current = 0;
  }

  set(num) {
    this.current = num;
    this.stack.style.transform = `translateY(-${num * (DIGIT_HEIGHT + DIGIT_GAP)}px)`;
  }
}
