import React from 'react'
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Flag from '@material-ui/icons/Flag';

const Head = () => {
    return (
        <>
            <div className="parent-head  w-100 d-none  d-sm-flex pt-3 ">
                <div className='left'>
                    <ul>
                        <li>
                            <span className='  icons-head'><Phone  className="fs-6" /></span> <span> </span>
                        </li>
                        <li>
                            <span  className='  icons-head'> <Email  className="fs-6" /></span> <span></span>
                        </li>
                      
                    </ul>
                </div>
                <div className='right text-black'>
                    <ul>
                        <li>
                            Theme-FAQ,S
                        </li>
                        <li>
                           NEED-Helps
                        </li>
                        <li className='d-flex align-items-center'>
                              <Flag  className="fs-6"/><span>EN</span>
                        </li>
                        <li>
                             <span>USD</span>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Head