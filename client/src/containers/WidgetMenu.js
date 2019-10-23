import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Widget from '../components/widgets/Widget'

import '../style/WidgetMenu.css'


const WidgetMenu = ({widgets, closeWidgetMenu}) => {

    return (
        <div className='widget-menu'>
            {
                widgets.map(widget => <Widget key={widget.name} widget={widget} closeWidgetMenu={closeWidgetMenu} />)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    widgets: state.widgets.filter(widget => !widget.enabled)
})

export default connect(mapStateToProps, actions)(WidgetMenu)