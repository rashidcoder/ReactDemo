import React from 'react'
import Content from '../_partials/content/content'
import NavBar from '../_partials/navbar/navbar'
import NavBarMobile from '../_partials/navbar/navbarmobile'
const Demo = () => {
    return (
        <div className="">
            <NavBar />
            <NavBarMobile/>
            <Content/>
        </div>
    )
}
export default Demo
