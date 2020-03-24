import React from 'react';
import HeaderBar from "../components/ui/HeaderBar"

export const DefaultHeaderOptions = (navData) => {
    return {
        headerLeft: () => (<HeaderBar navData={navData} />)
    }
}