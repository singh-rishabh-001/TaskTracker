import React from 'react'

export default function Logo() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 225">
                <defs>
                    <filter id="LogoBox" x="0" y="0" width="226" height="225" filterUnits="userSpaceOnUse">
                        <feOffset dx="3" dy="2" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="7.5" result="blur" />
                        <feFlood flood-color="#fff" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#0343db" />
                        <stop offset="1" stop-color="#00005d" />
                    </radialGradient>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#0343db" />
                        <stop offset="1" stop-color="#000048" />
                    </linearGradient>
                </defs>
                <g id="TodoLogo" transform="translate(19.5 20.5)" style={{ "isolation": "isolate" }}>
                    <g transform="matrix(1, 0, 0, 1, -19.5, -20.5)" filter="url(#LogoBox)">
                        <g id="LogoBox-2" data-name="LogoBox" transform="translate(19.5 20.5)" fill="#fff" stroke="#230077"
                            stroke-width="3">
                            <rect width="181" height="180" rx="15" stroke="none" />
                            <rect x="1.5" y="1.5" width="178" height="177" rx="13.5" fill="none" />
                        </g>
                    </g>
                    <g id="RectangleGrid" transform="translate(24 12)">
                        <g class="Rectangle">
                            <g id="Rectangle-1" stroke="#230077" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                fill="url(#radial-gradient)">
                                <rect width="43" height="39" rx="3" stroke="none" />
                                <rect x="0.75" y="0.75" width="41.5" height="37.5" rx="2.25" fill="none" />
                            </g>
                        </g>
                        <g class="Rectangle">
                            <g id="Rectangle-2" transform="translate(0 59)" stroke-linecap="round" fill="url(#radial-gradient)">
                                <path
                                    d="M 40 38.25 L 3 38.25 C 1.759349942207336 38.25 0.75 37.24065017700195 0.75 36 L 0.75 3 C 0.75 1.759349942207336 1.759349942207336 0.75 3 0.75 L 40 0.75 C 41.24065017700195 0.75 42.25 1.759349942207336 42.25 3 L 42.25 36 C 42.25 37.24065017700195 41.24065017700195 38.25 40 38.25 Z"
                                    stroke="none" />
                                <path
                                    d="M 3 1.5 C 2.172901153564453 1.5 1.5 2.172901153564453 1.5 3 L 1.5 36 C 1.5 36.82709884643555 2.172901153564453 37.5 3 37.5 L 40 37.5 C 40.82709884643555 37.5 41.5 36.82709884643555 41.5 36 L 41.5 3 C 41.5 2.172901153564453 40.82709884643555 1.5 40 1.5 L 3 1.5 M 3 0 L 40 0 C 41.6568489074707 0 43 1.343151092529297 43 3 L 43 36 C 43 37.6568489074707 41.6568489074707 39 40 39 L 3 39 C 1.343151092529297 39 0 37.6568489074707 0 36 L 0 3 C 0 1.343151092529297 1.343151092529297 0 3 0 Z"
                                    stroke="none" fill="#230077" />
                            </g>
                        </g>
                        <g class="Rectangle">
                            <g id="Rectangle-3" transform="translate(0 118)" stroke="#230077" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="1.5" fill="url(#radial-gradient)">
                                <rect width="43" height="39" rx="3" stroke="none" />
                                <rect x="0.75" y="0.75" width="41.5" height="37.5" rx="2.25" fill="none" />
                            </g>
                        </g>
                    </g>
                    <g id="TickGrid" transform="translate(104.23)">
                        <path id="Tick-1"
                            d="M270.648,292.9c-.623-.64,47.683,0,47.683,0V279.461H285.607V261.546H270.648S271.271,293.538,270.648,292.9Z"
                            transform="matrix(0.839, -0.545, 0.545, 0.839, -369.427, -45.975)" stroke="#230077"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="url(#linear-gradient)" />
                        <path id="Tick-2"
                            d="M270.648,292.9c-.623-.64,47.683,0,47.683,0V279.461H285.607V261.546H270.648S271.271,293.538,270.648,292.9Z"
                            transform="matrix(0.839, -0.545, 0.545, 0.839, -369.427, 11.025)" stroke="#230077"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="url(#linear-gradient)" />
                        <path id="Tick-3"
                            d="M270.648,292.9c-.623-.64,47.683,0,47.683,0V279.461H285.607V261.546H270.648S271.271,293.538,270.648,292.9Z"
                            transform="matrix(0.839, -0.545, 0.545, 0.839, -369.427, 68.025)" stroke="#230077"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="url(#linear-gradient)" />
                    </g>
                </g>
            </svg>
        </div>
    )
}
