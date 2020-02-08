import React from 'react';

const AuthContext = React.createContext({
    handleDelete: () => { console.log('person delete clicked!') },
    add: 'Mumbai',
});

export default AuthContext;