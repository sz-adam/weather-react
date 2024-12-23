import Weather from './pages/Weather'
import store from './redux/store'
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
     <Weather />
    </Provider>
  )
}

export default App
