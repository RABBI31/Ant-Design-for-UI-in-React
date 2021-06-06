import React from 'react'
import image1 from '../../../assets/images/modern-design.jpg'
import image2 from '../../../assets/images/clean-design.jpg'
import image3 from '../../../assets/images/easy-customise.jpg'
import image4 from '../../../assets/images/great-support.jpg'
import image5 from '../../../assets/images/unlimited-features.jpg'
import image6 from '../../../assets/images/advanced-option.jpg'

import {Row, Col} from 'antd'
import { Card } from 'antd';

const { Meta } = Card;

function AppFeatures() {
    return (
       
        <div className='block featuresBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>
                        Key Features
                    </h2>
                    <p>
                        Welcome to our Company.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image1} />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image2} />}
                        >
                            <Meta title="Clean Code" description="" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image3} />}
                        >
                            <Meta title="Easy Customization" description="" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image4} />}
                        >
                            <Meta title="Great Support" description="" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image5} />}
                        >
                            <Meta title="Advanced Options" description="" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={image6} />}
                        >
                            <Meta title="Unlimited Services" description="" />
                        </Card>
                    </Col>
                    
                   
                </Row>

            </div>


    )
        </div>
    )
}

export default AppFeatures
