import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Widget from '../components/widgets/Widget'

import '../style/WidgetMenu.css'


const WidgetMenu = ({widgets, closeWidgetMenu}) => {

    return (
        <div className='widget-menu'>
            <img src="https://howes-health.s3.eu-west-2.amazonaws.com/up-arrow.png" alt="" className='arrow'/>
            <div className='widget-contents'>
            {
                widgets.map(widget => <Widget key={widget.name} widget={widget} closeWidgetMenu={closeWidgetMenu} />)
            }
            </div>
            <img src="https://howes-health.s3.eu-west-2.amazonaws.com/down-arrow.png" alt="" className='arrow'/>
        </div>
    )
}

const mapStateToProps = state => ({
    widgets: state.widgets.filter(widget => !widget.enabled)
})

export default connect(mapStateToProps, actions)(WidgetMenu)