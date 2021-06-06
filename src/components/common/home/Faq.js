import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Faq() {
    return (
        <div className='block faqBlock'>
            <div className= 'container-fluid'>
                <div className='titleHolder'>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <Collapse accordion>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <div className='quickSupport'>
                    <h3>For Help</h3>
                    <p>Search for the keywords to learn more about each warning.</p>
                    <Button type="primary"><i className='fas fa-envelope'></i>Email for more support</Button>
                </div>
            </div>
        </div>
    )
}

export default Faq
