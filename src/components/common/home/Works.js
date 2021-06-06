import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function Works() {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  }
    return (
        <div className='block worksBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h1>How it works</h1>
                    <p>This is a very good company for solving problem</p>
                </div>

                <div className='contentHolder'>
                <Button type="primary" onClick={showModal}>
                    <i className='fas fa-play'></i>
                </Button>
                </div>
                <Modal
                 title="Python Project"
                  visible={isModalVisible} 
                  onCancel={handleCancel}
                  footer={null}
                  >

                  <iframe title='Python Project' width='100%'
                  height='350'
                  src="https://www.youtube.com/watch?v=p0G_ED0XR2M&t=148s">
                  
                  </iframe>
                 
                </Modal>
            </div>
        </div>

    )
}

export default Works
