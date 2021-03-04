const { default: Color } = require("./components/Color");
const { default: Counter } = require("./components/Counter");
const { default: Dollar } = require("./components/Dollar");
const { default: Family } = require("./components/Family");
const { default: Fontsize } = require("./components/Fontsize");
const { default: InputColor } = require("./components/InputColor");
const { default: InputLength } = require("./components/InputLength");
const { default: InputRange } = require("./components/InputRange");
const { default: List } = require("./components/List");
const { default: List2 } = require("./components/List2");
const { default: Massive } = require("./components/Massive");
const { default: Name } = require("./components/Name");
const { default: Rute } = require("./components/Rute");
const { default: Table } = require("./components/Table");
const { default: Temp } = require("./components/Temp");
const { default: Upper } = require("./components/Upper");
const { default: Wealth } = require("./components/Wealth");
const { default: ColorSlider } = require("./components/ColorSlider");
const { default: Transform } = require("./components/Transform");



function App() {
  let richPeople = ["Elon Musk", "Jeff Besos", "Bill Gates"];
  let peopleWelth = [
    {name: "Elon Musk", wealth: 234234234234},
    {name: "Jeff Besos", wealth: 234234234234},
    {name: "Bill Gates", wealth: 234234234234},
  ];
  let number = [4, 6, 1, 9, 2];
  let family = ["M", "K", "J", "S", "Y", "A", "P", "Y"]

  return (
    <div className="App">
      <Counter/>
      <Name/>
      <Massive/>
      <InputLength value="test"/>
      <InputColor/>
      <InputRange min='5' max='10'/>
      <Dollar/>
      <Temp/>
      <Fontsize/>
      <Color/>
      <ColorSlider/>
      <Transform/>
    </div>
  );
}

export default App;
