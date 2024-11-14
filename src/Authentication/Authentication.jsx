import React, { createContext } from 'react';

export const AuthContext = createContext();
const Authentication = ({ children }) => {
    const name = 'jaber';

    const authInfo = {
        name
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;