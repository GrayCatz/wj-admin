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
    name: '2018限量版口红',
    category: '口红',
    brand: '迪奥',
    createTime: '2019-02-03',
    creator: '陈奕迅',
  }]


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
        title: <Trans>产品</Trans>,
        dataIndex: 'name',
        key: 'name',
        width: 80,
        // fixed: 'left',
        // render: text => <Avatar style={{ marginLeft: 8 }} src={text}/>,
      },
      {
        title: <Trans>类别</Trans>,
        dataIndex: 'category',
        width: 80,
        key: 'category',
        // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: <Trans>品牌</Trans>,
        dataIndex: 'brand',
        width: 80,
        key: 'brand',
      },
      {
        title: <Trans>创建时间</Trans>,
        dataIndex: 'createTime',
        width: 80,
        key: 'createTime',
      },
      {
        title: <Trans>创建人</Trans>,
        dataIndex: 'creator',
        width: 80,
        key: 'creator',
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
                { key: '3', name: i18n.t`详情` },
                { key: '1', name: i18n.t`编辑` },
                { key: '2', name: i18n.t`禁用` },
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
