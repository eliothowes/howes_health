import { useState } from 'react'

const useWidgetMenu = () => {
    const [displayWidgetMenu, setSisplayWidgetMenu] = useState(false)

    const openWidgetMenu = () => setSisplayWidgetMenu(true)
    const closeWidgetMenu = () => setSisplayWidgetMenu(false)

    return [displayWidgetMenu, openWidgetMenu, closeWidgetMenu]
}

export default useWidgetMenu