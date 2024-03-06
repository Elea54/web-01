
  export class ScoreComponent {
    constructor() {
      var params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }

    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    }

  }
