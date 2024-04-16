import React, { useState } from 'react';
import { Select, Space, Table, Input } from 'antd';
import Selectt from './select';
import SelectMatiere from './SelectMatiere';

const TableNotes = () => {
  const [dataSource, setDataSource] = useState([
    {
        key: '0',
        name:'Ameni Gharbi',
        fil:'ING A1',
        grp:'groupe 1',
        ds:0,
        tp:0,
        ex:0,
        moyenne: 0 // Ajout de la clé moyenne avec une valeur par défaut
    },
    {
      key: '1',
      name:'Siwar Derbeli',
      fil:'ING A1',
      grp:'groupe 2',
      ds:0,
      tp:0,
      ex:0,
      moyenne: 0 // Ajout de la clé moyenne avec une valeur par défaut
    },
    {
        key: '2',
        name:'Siwar Derbeli',
        fil:'ING A2',
        grp:'groupe 1',
        ds:0,
        tp:0,
        ex:0,
        moyenne: 0 // Ajout de la clé moyenne avec une valeur par défaut
    },
  ]);

  const [selectedFilere, setSelectedFilere] = useState(null);
  const [selectedGroupe, setSelectedGroupe] = useState(null);
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [editingKey, setEditingKey] = useState('');

  const handleFilereChange = (value) => {
    setSelectedFilere(value);
  };

  const handleSecondGroupeChange = (value) => {
    setSelectedGroupe(value);
  };
  const handleMatiereChange = (value) => {
    setSelectedMatiere(value);
  };

  const filteredDataSource = dataSource.filter(item => {
    return (!selectedFilere || item.fil === selectedFilere) && (!selectedGroupe || item.grp === selectedGroupe);
  });

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = (key) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => key === item.key);
    if (index > -1) {
      // Calcul de la moyenne selon la condition
      const { ds, tp, ex } = newData[index];
      newData[index].moyenne = tp === 0 ? (0.3 * ds + 0.7 * ex) : (0.2 * ds + 0.3 * tp + 0.5 * ex);
      setDataSource(newData);
      setEditingKey('');
    }
  };

  const handleInputChange = (e, dataIndex, record) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => record.key === item.key);
    if (index > -1) {
      newData[index][dataIndex] = e.target.value;
      // Calcul de la moyenne en temps réel lors de la modification des valeurs
      newData[index].moyenne = record.tp === 0 ? (0.3 * record.ds + 0.7 * record.ex) : (0.2 * record.ds + 0.3 * record.tp + 0.5 * record.ex);
      setDataSource(newData);
    }
  };

  const columns = [
    {
      title: 'nom',
      dataIndex: 'name',
      width: '30%',
    },
    {
      title: 'Filiére',
      dataIndex: 'fil',
    },
    {
      title: 'Groupe',
      dataIndex: 'grp',
    },
    
    {
      title:'Note DS',
      dataIndex:'ds',
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            value={text}
            autoFocus
            onChange={(e) => handleInputChange(e, 'ds', record)}
            onPressEnter={() => save(record.key)}
          />
        ) : (
          <div
            onClick={() => edit(record)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </div>
        );
      },
    },
    {
      title:'Note TP',
      dataIndex:'tp',
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            value={text}
            autoFocus
            onChange={(e) => handleInputChange(e, 'tp', record)}
            onPressEnter={() => save(record.key)}
          />
        ) : (
          <div
            onClick={() => edit(record)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </div>
        );
      },
    },
    {
      title:'Note Ex',
      dataIndex:'ex',
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            value={text}
            autoFocus
            onChange={(e) => handleInputChange(e, 'ex', record)}
            onPressEnter={() => save(record.key)}
          />
        ) : (
          <div
            onClick={() => edit(record)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </div>
        );
      },
    },
    {
      title:'Moyenne',
      dataIndex:'moyenne',
    }
  ];

  return (
    <div className="text-xl p-10 bg-white pr-44 mt-6 space-y-6">
    <h1 className="text-blue-500 mb-2">Choisir matiére :</h1>
   <SelectMatiere onMatiereChange={handleMatiereChange} />
    <h1 className="text-blue-500 mb-2">Choisir groupe :</h1>
      <Selectt 
        onFilereChange={handleFilereChange} 
        onSecondGroupeChange={handleSecondGroupeChange}
      />
      <Space direction="vertical" style={{ marginTop: '1rem' }}>
        <Table
          dataSource={filteredDataSource}
          columns={columns}
          bordered
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Space>
    </div>
  );
};

export default TableNotes;
