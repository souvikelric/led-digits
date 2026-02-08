const DIGIT_HEIGHT = 120;
const DIGIT_GAP = 12;

class ScrollingDigit {
  constructor(wrapper, maxValue = 9) {
    this.maxValue = maxValue;
    this.window = document.createElement("div");
    this.window.classList.add("digit-window");

    this.stack = document.createElement("div");
    this.stack.classList.add("digit-stack");

    this.digits = [];

    // create digits 0–maxValue
    for (let i = 0; i <= this.maxValue; i++) {
      const digit = new LedDigit(this.stack, false);
      digit.setValue(i);
      this.digits.push(digit);
    }

    const fakeZero = new LedDigit(this.stack, false);
    fakeZero.setValue(0);

    this.window.appendChild(this.stack);
    wrapper.appendChild(this.window);

    requestAnimationFrame(() => {
      this.stepheight =
        this.digits[0].digit.offsetHeight +
        parseInt(getComputedStyle(this.stack).gap);
    });
    this.current = 0;
  }

  set(num) {
    this.stack.style.transition = "transform 0.4s ease-in-out";
    this.stack.style.transform = `translateY(-${this.stepheight * num}px)`;

    if (this.current === this.maxValue && num === 0) {
      this.stack.style.transform = `translateY(-${(this.maxValue + 1) * this.stepheight}px)`;

      // after animation ends, snap back
      setTimeout(() => {
        this.stack.style.transition = "none";
        this.stack.style.transform = "translateY(0px)";
      }, 400);
    }

    this.current = num;
  }
}
