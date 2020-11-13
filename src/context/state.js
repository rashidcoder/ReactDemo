import React from 'react'
import Context from './context'
//import sidebarReducer from './sidebarReducer'
//import { MENU_CLICK } from "../types";
export const State = (props) => {
    const initialState = {
        dashboardState: { 
          
                title: 'Dashboard',
                link: '#',
                icon: ' tim-icons icon-chart-pie-36',
                className: 'active'
             
          }
    }
    //  const [state, dispatch] = useReducer(sidebarReducer, initialState)

    // //Menu_Click
    // const menu_click = dashboardState => {
    //     dashboardState.id = Date.now()
    //     dashboardState.isconfirm = false
    //     dispatch({
    //         type: MENU_CLICK,
    //         payload: dashboardState
    //     })
    // }
    return (
        <Context.Provider
            value={{
                dashboardState: initialState.dashboardState
            }}
        >
            {props.children}</Context.Provider>
    )
}
export default State