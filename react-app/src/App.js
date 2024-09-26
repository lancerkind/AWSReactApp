import logo from './logo.svg'
import './App.css'
import Message from './components/Message.js'
import StreamingDataComponent from './components/StreamingDataComponent.js'

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Message />
        <StreamingDataComponent />
        </p>
      </header>
    </>
  )
}

export default App