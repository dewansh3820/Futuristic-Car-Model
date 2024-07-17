

AFRAME.registerComponent("car", {
    schema: {
      modelRef: { type: "string", default: "../future_car/scene.gltf" }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 35, z: 175 };
      const rotation = { x: 0, y: -224, z: 0 };
      const scale = { x:10, y:10, z:10 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale", scale)
    }
})