import React from 'react';

import PropTypes from 'prop-types';


const UserTemplate = (props) => {
    console.log(props)
    return (
        <div>
            Template
        </div>
    );
};

UserTemplate.propTypes = {
    name:PropTypes.string,
    lastname:PropTypes.string,
    age:PropTypes.number,
    hobbies:PropTypes.array
}

//oneOf(['','']) we are looking for certain values
//object, func, bool are also possible
//oneOfType([type,type2, ..oneOf()]) can take many checks
//arrayOf(PropTypes.string) will check if it is array of type
//how to make multiple conditions met?

export default UserTemplate;