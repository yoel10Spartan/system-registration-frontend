import React, { createContext } from 'react'
import Connection from '../connect/connection';

const ServerContext = createContext();

const ServerProvider = ({ children }) => {

    const serverConnection = new Connection();

    return (
        <ServerContext.Provider
            value={{
                serverConnection
            }}
        >
            { children }
        </ServerContext.Provider>
    )
}

export {
    ServerContext,
    ServerProvider
}