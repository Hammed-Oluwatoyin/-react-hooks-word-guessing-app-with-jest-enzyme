import React from 'react';
import PropTypes from 'prop-types'
import stringModule from './helpers/string';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} -Rendered component (or null if `success` prop is )
 */

 const Congrats = () => {
     const [success ]= successContext.useSuccess();
    const language = React.useContext(languageContext)
    if (success) {
        return (
            <div>
                <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                {stringModule.getStringByLanguage(language, 'congrats')}
                </span>
                </div>
            </div>
        );} else {

            return (
                <div data-test ="component-congrats" />
            );
        }
    
   
 }

 

 export default Congrats;