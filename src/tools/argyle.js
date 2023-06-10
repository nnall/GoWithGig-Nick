import React, { useEffect } from 'react';

function ArgyleComponent() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://plugin.argyle.com/argyle.web.v5.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const linkInstance = window.Argyle.create({
        linkKey: '01880252-1bf4-1396-a763-ff106de9c0c6',
        userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIwMTg4MDI1Mi0xOGViLWI3OTktNGIzZS04OTkyYTUyMDgzMmMiLCJleHAiOjE2ODUyMTk3NzUsImZpZCI6IjhkN2E3OWQ2LTFlZTYtNDdhYS04MjE5LTQ0OTNlZDk5Njc2OCIsImlhdCI6MTY4NTIxNjE3NSwiaXNzIjoiYXJneWxlLWNvcmUtYXV0aC1wcm9kIiwianRpIjoiM2I3Zjk0NGMtOWIyZS00MWVmLTk2YWEtNGE1OTU2NGUwODk0Iiwic3ViIjoiMDE4ODVlYjYtMjUyZC1lNTM0LTBjMzEtNWY4NzRhNjg2M2M1IiwidXNlcl9pZCI6IjAxODg1ZWI2LTI1MmQtZTUzNC0wYzMxLTVmODc0YTY4NjNjNSJ9.T9r3fY1rqYROWtq5HYIzqgn5lPaCb3ITYDeR4h8KCZ4',
        sandbox: true, // Set to false for production environment.
        // (Optional) Callback examples:
        onAccountConnected: (payload) => console.log('onAccountConnected', payload),
        onAccountCreated: (payload) => console.log('onAccountCreated', payload),
        onAccountError: (payload) => console.log('onAccountError', payload),
        onAccountRemoved: (payload) => console.log('onAccountRemoved', payload),
        onDDSError: (payload) => console.log('onDDSError', payload),
        onDDSSuccess: (payload) => console.log('onDDSSuccess', payload),
        onCantFindItemClicked: (payload) => console.log('onCantFindItemClicked', payload),
        onClose: () => console.log('onClose'),
        onDocumentsSubmitted: (payload) => console.log('onDocumentsSubmitted', payload),
        onFormSubmitted: (payload) => console.log('onFormSubmitted', payload),
        onUIEvent: (payload) => console.log('onUIEvent', payload),
        onError: (payload) => console.log('onError', payload),
        onTokenExpired: (updateToken) => {
          console.log('onTokenExpired');
          // Generate a new user token.
          // updateToken("<New user token>")
        },
      });

      linkInstance.open();
	  	console.log('Argyle closed');
      // linkInstance.close() // Manually close Link (typically the user closes Link).
    };

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return <div />;
}

export default ArgyleComponent;
