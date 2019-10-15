import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

const Widget = ({ widget, widget_click,  display_widget_in_dashboard }) => {

    const handleClick = (widgetName) => {
        widget_click(widgetName)
        display_widget_in_dashboard(widgetName)
    }

    return <img
        src={widget.image}
        alt={`${widget.name} image`}
        className='widget-icon'
        onClick={event => handleClick(widget.name)}
    />
}

export default connect(null, actions)(Widget)