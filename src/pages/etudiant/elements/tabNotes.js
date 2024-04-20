import React from 'react';
import { Table } from 'antd';

function TableNotes(props) {

  const data = [
    {
      key: '1',
      matiere: 'c2i',
      coeff: 1,
      moy: 11,
    },
    {
      key: '2',
      matiere: 'Sécurité des réseaux',
      coeff: 2,
      moy: 12,
    },
    {
      key: '3',
      matiere: 'Conception',
      coeff: 2,
      moy: 13.75,
    },
  ];

  // Calcul de la somme des produits (moyenne * coefficient) et la somme des coefficients
  let sommeProduits = 0;
  let sommeCoefficients = 0;

  data.forEach(item => {
    sommeProduits += item.moy * item.coeff;
    sommeCoefficients += item.coeff;
  });

  // Calcul de la moyenne finale
  const moyenneFinale = sommeProduits / sommeCoefficients;

  // Colonnes de la table
  const columns = [
    {
      title: 'Matière',
      dataIndex: 'matiere',
      key: 'matiere',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Coefficient Matière',
      dataIndex: 'coeff',
      key: 'coeff',
    },
    {
      title: 'Moyenne',
      dataIndex: 'moy',
      key: 'moy',
    },
  ];

  return (
    <div>
      <h1>{props.nomSemestre}</h1>
      <h1>Moyenne : <span>{moyenneFinale.toFixed(2)}</span></h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TableNotes;
