class Of {
  constructor(value) {
    this.of = value;
  }
  tick() {
    this.value = this.value === 0 ? 30 : this.value - 1;
  }
  reset() {
    this.value = 30;
  }
  getNumber() {
    return this.of;
  }
  setValue(value) {
    this.value = value;
  }
}
