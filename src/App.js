const App = () => {
  return (
      <div className="app">
        <section className="side-bar">
            <button>+ New Chat</button>
            <ul className="history">
                <li>Abcxyz</li>
            </ul>
          <nav>
            <p>Made by padwhen <a href="https://github.com/padwhen">github.com/padwhen</a></p>
            <p>Tutorial by Ania Kubow.</p>
          </nav>
        </section>
        <section className="main">
            <h1>PadWhen GPT</h1>
            <ul className="feed">

            </ul>

                <div className="bottom-section">
                        <div className="input-container">
                            <input />
                            <div id="submit">></div>
                        </div>
                        <p className="info">
                            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.<u>ChatGPT Mar 23 Version</u>
                        </p>
                </div>
        </section>
      </div>
  )
}
export default App