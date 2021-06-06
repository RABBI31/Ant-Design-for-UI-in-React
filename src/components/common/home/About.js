import React from 'react'
import {Row,Col} from 'antd'

function About() {
    const items = [
        {
            id : 1,
            icon: <i className='fas fa-desktop'></i>,
            title : 'Lorem ipsum dolor sit amet',
            content: 'consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, . '
        },
        {
            id : 2,
            icon: <i className='fas fa-database'></i>,
            title : 'Lorem ipsum dolor sit amet',
            content: 'consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, . '
        },
        {
            id : 3,
            icon: <i className='fas fa-book'></i>,
            title : 'Lorem ipsum dolor sit amet',
            content: 'consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, '
        }
       ]
    return (
        <div className='block aboutBlock'>
            <div className='container-fluid'>
                <div className= 'titleHolder'>
                    <h2>
                       About Us
                    </h2>
                    <p>Feel the charm of existence in this spot</p>
                </div>
                <div className='contentHolder'>
                    <p>so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item=>{
                        return(
                            <Col span={8}>
                                <div className='content'>
                                    <div className='icon'>
                                        {item.icon}
                                    </div>

                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        )
                    })}
                    
                </Row>

            </div>
            
        </div>
    )
}

export default About
