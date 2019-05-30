import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  dicreaseCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World From App And Alex</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={() => this.increaseCount()}>
          Press To Increase Count
        </button>
        <button onClick={() => this.dicreaseCount()}>
          Press To Dicrease Count
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)
