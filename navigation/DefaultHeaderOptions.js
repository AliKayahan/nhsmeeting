import React from 'react';
import { BurgerMenu, NotificationBell } from "../components/ui/HeaderBar"

export const DefaultHeaderOptions = (navData) => {
    return {
        headerLeft: () => (<BurgerMenu navData={navData} />),
        headerRight: () => (<NotificationBell navData={navData} />)
    }
}