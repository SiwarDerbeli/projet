import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { BookOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';

const Cellule = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const [matiere, setMatiere] = useState("");
  const [groupe, setGroupe] = useState("");
  const [salle, setSalle] = useState("");
  const [ok,setOk]=useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    setOk(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = document.querySelector('.ant-modal-content')?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <div className='flex items-center mt-1  p-10  rounded'>
      {ok ? (
        <div className='text-sm '>
             <h1 className='text-blue-500'>{salle}</h1>
             <h1>{matiere}</h1>
             <h1>{groupe}</h1></div>
      ) : (
        <Button onClick={showModal} className=' bg-blue-400 text-white  text-3xl font-bold  p-6 flex items-center'>+</Button>
      )}
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Remplir les champs ..
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div>{modal}</div>
          </Draggable>
        )}
      >
        <div className='space-y-4 text-xl'>
          <Input className='p-4' placeholder=" matiére .." value={matiere} onChange={(e) => setMatiere(e.target.value)} prefix={<BookOutlined />} />
          <Input className='p-4' placeholder=" salle .." value={salle} onChange={(e) => setSalle(e.target.value)} prefix={<HomeOutlined />} />
          <Input className='p-4' placeholder=" groupe .." value={groupe} onChange={(e) => setGroupe(e.target.value)} prefix={<UsergroupAddOutlined />} />
        </div>
      </Modal>
    </div>
  );
};

export default Cellule;
