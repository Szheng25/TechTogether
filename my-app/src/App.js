import logo from './securityLock.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Secure Me
        </h1>
        <p>
          Have you been hacked?
        </p>
        <p>
          If you've experienced any of these, you may be compromised:
        </p>
        <div class="flex-container">
          <div>1. Unknown files or applications on your computer. </div>
          <div>2. Any login attempts that were not made by you. </div>
          <div>3. Lagging or slowed down traffic. </div>
        </div>
        <p>
          Next steps you can take:
        </p>
        <div class="flex-container">
          <div>1. Stay up to date on any updates and patches. </div>
          <div>2. Use a password manager and create strong, unique passwords. </div>
          <div>3. Delete any malicious files or applications you find. </div>
        </div>

      </header>
    </div>
  );
}

export default App;
