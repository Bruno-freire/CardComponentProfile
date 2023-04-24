import Card from './Components/Card'
import "./styles/card.css"

function App() {
  return (
    <div className="main">
      <Card
        name="Bruno Freire"
        position="Full-stack javascript developer"
        number="+55068992031894"
        email="brunofreire1717@gmail.com"
        links={{github: "https://github.com/Bruno-freire", linkedin: "https://www.linkedin.com/in/bruno-freire-174294240/"}}
      />
    </div>
  )
}

export default App
