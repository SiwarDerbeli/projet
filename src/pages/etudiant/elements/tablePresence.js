import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Matière',
    dataIndex: 'matiere',
    key: 'matiere',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombre absences',
    dataIndex: 'nb',
    key: 'nb',
    render: (text) => {
      const numericValue = parseInt(text);
      return (
        <span style={{ color: numericValue > 3 ? 'red' : 'inherit' }}>
          {text}
        </span>
      );
    },
  },
];

const data = [
  {
    key: '1',
    matiere: 'c2i',
    nb: 5,
  },
  {
    key: '2',
    matiere: 'Sécurité des réseaux',
    nb: 0,
  },
  {
    key: '3',
    matiere: 'Conception',
    nb: 2,
  },
];

const TablePres = () => <Table columns={columns} dataSource={data} />;

export default TablePres;
