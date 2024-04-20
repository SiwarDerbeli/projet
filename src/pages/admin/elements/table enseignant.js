import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button } from 'antd';

const originData = [
  {
    key: '1',
    nom: 'Edward 1',
    prénom: 'John 1',
    email: 'edward1@example.com',
    num_tel: '1234567890',
    chef_departement: 'Department 1',
  },
  {
    key: '2',
    nom: 'Edward 2',
    prénom: 'John 2',
    email: 'edward2@example.com',
    num_tel: '1234567891',
    chef_departement: 'Department 2',
  },
  {
    key: '3',
    nom: 'Edward 3',
    prénom: 'John 3',
    email: 'edward3@example.com',
    num_tel: '1234567892',
    chef_departement: 'Department 3',
  },
  {
    key: '4',
    nom: 'Edward 4',
    prénom: 'John 4',
    email: 'edward4@example.com',
    num_tel: '1234567893',
    chef_departement: 'Department 4',
  },
  {
    key: '5',
    nom: 'Edward 5',
    prénom: 'John 5',
    email: 'edward5@example.com',
    num_tel: '1234567894',
    chef_departement: 'Department 5',
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Remplir les champs ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableEns = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      nom: '',
      prénom: '',
      email: '',
      num_tel: '',
      chef_departement: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleAdd = () => {
    const newData = {
      key: (data.length + 1).toString(),
      nom: 'Edward New',
      prénom: 'John New',
      email: 'example@example.com',
      num_tel: '9876543210',
      chef_departement: 'New Department',
    };
    setData([...data, newData]);
  };

  const handleDelete = key => {
    setData(data.filter(item => item.key !== key));
  };

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
     
      editable: true,
    },
    {
      title: 'Prénom',
      dataIndex: 'prénom',
     
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    
      editable: true,
    },
    {
      title: 'Num Tél',
      dataIndex: 'num_tel',
      
      editable: true,
    },
    {
      title: 'Chef Département',
      dataIndex: 'chef_departement',
   
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'operation',
     
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              OK
            </Typography.Link>
            <Popconfirm title="Sure d'annuler?" onConfirm={cancel}>
              <a>Annuler</a>
            </Popconfirm>
          </span>
        ) : (
          <span className='flex space-x-10'>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
              style={{
                marginRight: 8,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>

            </Typography.Link>
            <Popconfirm
              title="Sure de supprimer ?"
              onConfirm={() => handleDelete(record.key)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
              </svg>

            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'num_tel' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div >
      <Button
        onClick={handleAdd}
        type="primary"
        style={{ marginBottom: 16 }}
        className="flex text-lg items-center space-x-2"
      >
        <h1>Ajouter enseignant</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Form form={form} component={false}>
        <Table
        
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};

export default TableEns;

