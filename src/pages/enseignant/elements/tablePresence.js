import React, { useState } from 'react';
import { Select, Space, Table, Input, Checkbox,Button } from 'antd'; // Import Checkbox from antd
import Selectt from './select';
import SelectMatiere from './SelectMatiere';

const TablePresence = () => {
  const currentDate= new Date();
  const formattedDate=currentDate.toLocaleDateString()
  const [dataSource, setDataSource] = useState([
    {
        key: '0',
        name:'Ameni Gharbi',
        fil:'ING A1',
        grp:'groupe 1',
        presence:false
    },
    {
        key: '3',
        name:'flen',
        fil:'ING A1',
        grp:'groupe 1',
        presence:false
    },
    {
        key: '4',
        name:'fleeeeeeen',
        fil:'ING A1',
        grp:'groupe 1',
        presence:false
    },
    {
        key: '5',
        name:'chaima trad',
        fil:'ING A1',
        grp:'groupe 1',
        presence:false
    },
    
    {
      key: '1',
      name:'Siwar Derbeli',
      fil:'ING A1',
      grp:'groupe 2',
      presence:false
    },
    {
        key: '2',
        name:'Siwar Derbeli',
        fil:'ING A2',
        grp:'groupe 1',
        presence:false
    },
  ]);

  const [selectedFilere, setSelectedFilere] = useState(null);
  const [selectedGroupe, setSelectedGroupe] = useState(null);
 

  const handleFilereChange = (value) => {
    setSelectedFilere(value);
  };

  const handleSecondGroupeChange = (value) => {
    setSelectedGroupe(value);
  };

  const handlePresenceChange = (key) => {
    setDataSource(dataSource.map(item => {
      if (item.key === key) {
        return {
          ...item,
          presence: !item.presence
        };
      }
      return item;
    }));
  };

  const filteredDataSource = dataSource.filter(item => {
    return (!selectedFilere || item.fil === selectedFilere) && (!selectedGroupe || item.grp === selectedGroupe);
  });

  const columns = [
    {
      title: 'nom',
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: 'Filiére',
      dataIndex: 'fil',
      width: '25%',
    },
    {
      title: 'Groupe',
      dataIndex: 'grp',
      width: '25%',
    },
    {
      title: 'Presence',
      dataIndex: 'presence',
      width: '25%',
      render: (presence, record) => (
        <Checkbox checked={presence} 
                  onChange={() => handlePresenceChange(record.key)}
                  style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center'}} />
      ),
    },
  ];

  return (
    <div className="text-xl p-10 bg-white pr-44 mt-6 space-y-6">
       <h1 className="text-blue-900 mb-2 text-2xl font-bold">{formattedDate}</h1>
      <h1 className="text-blue-500 mb-2">Matiére :<span className='text-blue-900'>Conception</span></h1>
      <h1 className="text-blue-500 mb-2">Salle :<span className='text-blue-900'>K12</span></h1>
      <h1 className="text-blue-500 mb-2">Choisir groupe :</h1>
      <Selectt 
        onFilereChange={handleFilereChange} 
        onSecondGroupeChange={handleSecondGroupeChange}
      />
      
      <Space direction="vertical" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center'}}>
        
        <Table
          dataSource={filteredDataSource}
          columns={columns}
          bordered
          rowClassName="editable-row"
          
        />
         
      </Space>
      <Button style={{paddingInline:'50px'}} type="primary">send</Button>
    </div>
  );
};

export default TablePresence;
