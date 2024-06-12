import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MdOutlineEdit } from 'react-icons/md'

const Projectspopup = () => {
  return (
    <>
        <Row>
            <Col>
                <div className='skillsDivWrapper'>
                    <div className='skillsDivMain'>
                        <div>
                            <h5>Projects</h5>
                        </div>
                        <div>
                            <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                            <span>Add Projects</span>
                        </div>
                    </div>
                            
                    {/* projects inner */}
                    <div className='projectsInnerDiv'>
                        <span>Stand out to employers by adding details about projects that you have done so far</span>
                    </div>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default Projectspopup