class dashboards {
  constructor(value) {
    this.line = value;
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
