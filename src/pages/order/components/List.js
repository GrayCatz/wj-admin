import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Table } from 'antd'
import { DropOption } from 'components'
import { Trans, withI18n } from '@lingui/react'
import styles from './List.less'

const { confirm } = Modal


const dataSource = [
  {
    id: 1,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },
  {
    id: 2,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },
  {
    id: 3,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },
  {
    id: 4,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },
  {
    id: 5,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },
  {
    id: 6,
    serial: 'wj1234546',
    wxSerial: '无',
    brand: 'Dior',
    product: '口红',
    creator: '可乐',
    master: '紫霞仙子',
    status: '待鉴定',
  },]


@withI18n()
class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem, i18n } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: i18n.t`确认删除该品牌：` + record.name + '?',
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, i18n, ...tableProps } = this.props

    const columns = [

      {
        title: <Trans>鉴定单号</Trans>,
        dataIndex: 'serial',
        key: 'serial',
        width: 80,
        // fixed: 'left',
        // render: text => <Avatar style={{ marginLeft: 8 }} src={text}/>,
      },
      {
        title: <Trans>微信单号</Trans>,
        dataIndex: 'wxSerial',
        width: 80,
        key: 'wxSerial',
        // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: <Trans>品牌名</Trans>,
        dataIndex: 'brand',
        width: 80,
        key: 'brand',
      },
      {
        title: <Trans>产品名</Trans>,
        dataIndex: 'product',
        width: 80,
        key: 'product',
      },
      {
        title: <Trans>创建人</Trans>,
        dataIndex: 'creator',
        width: 80,
        key: 'creator',
      },
      {
        title: <Trans>鉴定师</Trans>,
        dataIndex: 'master',
        width: 80,
        key: 'master',
      },
      {
        title: <Trans>状态</Trans>,
        dataIndex: 'status',
        width: 80,
        key: 'status',
      },
      {
        title: <Trans>操作</Trans>,
        key: 'operation',
        width: 80,
        // fixed: 'right',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: i18n.t`处理` },
                { key: '2', name: i18n.t`详情` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        dataSource={dataSource}
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
