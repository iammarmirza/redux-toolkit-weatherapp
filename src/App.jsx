import store from "./app/store"
import { WeatherApp } from "./components/WeatherApp"
import { Provider } from'react-redux'

function App() {

  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  )
}

export default App
