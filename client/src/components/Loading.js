import React from 'react'

import '../style/Loading.css'

const Loading = () => {
    return (
        <div class="lds-css ng-scope">
            <div class="lds-spinner" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading