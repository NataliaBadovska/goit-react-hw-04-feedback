import React from "react";
import css from './Section.module.css'

function Section({ children, title }) {
     return (
            <div className={css.section}>
                <h1 className={css.section__title}>{title}</h1>
                {children}
            </div>
            )
    
}

export default Section;