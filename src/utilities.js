export const drawRect = (detections, ctx) => {
  // Loop through each prediction
  detections.forEach((prediction) => {
    // Extract boxes and classes
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];
    // db
    const apple =
      "Apple: 1. Apples May Lower High Cholesterol and Blood Pressure. 2.Eating Foods With Fiber, Including Apples, Can Aid Digestion. 3.Apples Can Support a Healthy Immune System. 4.Apples Are a Diabetes-Friendly Fruit. 5.The Antioxidants in Apples May Play a Role in Cancer";

    const orange =
      "Orange 1. Protects your cells from damage. 2.Helps your body make collagen, a protein that heals wounds and gives you smoother skin. 2.Makes it easier to absorb iron to fight anemia. 3.Boosts your immune system, your body's defense against germs.";
    console.log(prediction["class"]);

    if (text === text) {
      // console.log(orange);
      console.log(apple);
    }

    // Set styling
    const color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = "#" + color;
    ctx.font = "18px Arial";

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = "#" + color;
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
