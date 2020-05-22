import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

export default () => {
    return (
        <form>
            <label>
                Message:
                <textarea name="message" cols="30" rows="5"></textarea>
            </label>
            <input type="submit" name="submit" value="Submit" />
        </form>
    )
}