import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FindWorkWriting extends React.Component {
    render() { 
        return (
            <div className='find-work-writing'>
                <h1> Find Work </h1>
                <ul>
                    <Link to="/find-work-it"> <li className='major'>Development &amp; IT</li> </Link>
                    <Link to="/find-work-creative"> <li className='major'>Creative &amp; Design </li> </Link>
                    <Link to="/find-work-sales"> <li className='major'>Sales &amp; Marketing </li> </Link>
                    <Link to="/find-work-writing"> <li className='major'>Writing &amp; Translation</li> </Link>

                    <button className='minor-1'> <li> Business Writing </li> </button>
                    <button className='minor-2'> <li> Language Localization </li> </button>
                    <button className='minor-3'> <li> Creative Writing </li> </button>
                    <button className='minor-4'> <li> Editing &amp; Proofreading </li> </button>

                </ul>
            </div>
        );
    }
}
 
export default FindWorkWriting;