import React from 'react'

function CircleSvg() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 34 34">

                <circle cx="16" cy="16" r="15.9155"
                    class="progress-bar__background" />

                <circle cx="16" cy="16" r="15.9155"
                    class="progress-bar__progress 
                 js-progress-bar" />
            </svg>
        </>
    )
}

export default CircleSvg
