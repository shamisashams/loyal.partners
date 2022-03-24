import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({color: '#d54f57'})

createInertiaApp({
    resolve: name => require(`./pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props}/>, el)
    }
});


