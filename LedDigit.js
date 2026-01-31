const digitMap = {
  0: ["a", "b", "c", "d", "e", "f"],
  1: ["b", "c"],
  2: ["a", "b", "g", "e", "d"],
  3: ["a", "b", "g", "c", "d"],
  4: ["f", "g", "b", "c"],
  5: ["a", "f", "g", "c", "d"],
  6: ["a", "f", "e", "d", "c", "g"],
  7: ["a", "b", "c"],
  8: ["a", "b", "c", "d", "e", "f", "g"],
  9: ["a", "b", "c", "d", "f", "g"],
};

class LedDigit {
  segmentClasses = ["a", "b", "c", "d", "e", "f", "g"];
  constructor(wrapperElement) {
    this.digit = document.createElement("div");
    this.digit.classList.add("digit");
    this.segments = [];
    this.segmentMap = {};
    for (let cls of this.segmentClasses) {
      const seg = document.createElement("div");
      seg.classList.add("seg", cls);
      this.segments.push(seg);
      this.digit.appendChild(seg);
      this.segmentMap[cls] = seg;
    }
    wrapperElement.appendChild(this.digit);
  }
  render(activeSegments) {
    this.segments.forEach((seg) => seg.classList.remove("on"));

    activeSegments.forEach((letter) => {
      this.segmentMap[letter].classList.add("on");
    });
  }

  setValue(num) {
    this.render(digitMap[num] || []);
  }
}
