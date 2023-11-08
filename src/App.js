import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <header>
        <h1>Auth0 React App</h1>
        <nav>
          <ul>
            <li> 
              {isAuthenticated ? (
                <button onClick={() => logout()}>Log Out</button>
              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {isAuthenticated ? (
          <div>
            <p>You are logged in!</p>
            {/* Add your authenticated content here */}
          </div>
        ) : (
          <p>Please log in to access this app.</p>
        )}
      </main>
    </div>
  );
}

export default App;
