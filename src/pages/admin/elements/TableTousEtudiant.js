import React, { useState } from 'react';
import { Space, Table, Tag, InputNumber, Button } from 'antd';
import Selectt from './select';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function TableTousEtudiant() {
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const [numberOfGroups, setNumberOfGroups] = useState(1);

  const columns = [   
    {
      title: 'Num Inscription',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Filière',
      dataIndex: 'fil',
      key: 'fil',
      render: (text) => <a>{text}</a>,
    },
  ];

  const data = [
    {
      key: '1',
      num: 12342111,
      nom: 'Flena Foulaneya',
      genre: 'femme',
      fil: 'ING A1'
    },
    {
      key: '2',
      num: 12342111,
      nom: 'Ben Yahya Ameni',
      genre: 'femme',
      fil: 'ING A1'
    },
    {
        key: '3',
        num: 12342111,
        nom: 'Flen Fouleniii',
        genre: 'homme',
        fil: 'ING A1'
      },
    {
      key: '4',
      num: 12342111,
      nom: 'Flen Fouleni',
      genre: 'homme ',
      fil: 'ING A2'
    },
  ];

  const filteredData = selectedFiliere ? data.filter(item => item.fil === selectedFiliere) : data;
  // Trier les données par nom dans l'ordre alphabétique
  filteredData.sort((a, b) => a.nom.localeCompare(b.nom));

  //diviser les données en groupes
  const splitDataIntoGroups = () => {
    const groups = Array.from({ length: numberOfGroups }, () => []);
    filteredData.forEach((student, index) => {
      const groupIndex = index % numberOfGroups;
      groups[groupIndex].push(student);
    });
    return groups;
  };

  const groups = splitDataIntoGroups();

  // Fonction pour générer un PDF pour un groupe spécifique
  const handleGeneratePDF = (groupIndex) => {
    const doc = new jsPDF();
    const header = columns.map(col => col.title);
    const groupData = groups[groupIndex - 1];

    doc.autoTable({
      head: [header],
      body: groupData.map(item => columns.map(col => item[col.dataIndex])),
    });

    doc.save(`Groupe_${groupIndex}.pdf`);
  };

  return ( 
    <div className='space-y-4'>
      <Selectt setSelectedFiliere={setSelectedFiliere} />
      <h1>Nombre des étudiants: <span>{filteredData.length}</span></h1>
      <InputNumber
        min={1}
        defaultValue={1}
        onChange={(value) => setNumberOfGroups(value)}
      />
      {groups.map((group, index) => (
        <div key={index}>
          <h2>Groupe {index + 1}</h2>
          <Table columns={columns} dataSource={group} />
          <Button onClick={() => handleGeneratePDF(index + 1)}>Générer PDF</Button>
        </div>
      ))}
    </div>
  );
}

export default TableTousEtudiant;



