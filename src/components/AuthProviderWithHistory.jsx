// auth0-provider.js
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <Auth0Provider
    domain="dev-bgjbg30zgs3i64j5.us.auth0.com"
    clientId="AP90zOu0DwrXA9jXyN9PWGHLtNYJ70iA"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
