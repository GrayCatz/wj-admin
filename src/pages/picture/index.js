import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { router } from 'utils'
import { connect } from 'dva'
import { Button, Col, message, Popconfirm, Row, Table } from 'antd'
import { withI18n } from '@lingui/react'
import { Page } from 'components'
import { stringify } from 'qs'
import Filter from './components/Filter'
import Modal from './components/Modal'
import styles from './components/List.less'


const { Column, ColumnGroup } = Table

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}]


@withI18n()
@connect(({ user, loading }) => ({ user, loading }))
class User extends PureComponent {
  render() {
    const { location, dispatch, user, loading, i18n } = this.props
    const { query, pathname } = location
    const {
      list,
      pagination,
      currentItem,
      modalVisible,
      modalType,
      selectedRowKeys,
    } = user

    const handleRefresh = newQuery => {
      router.push({
        pathname,
        search: stringify(
          {
            ...query,
            ...newQuery,
          },
          { arrayFormat: 'repeat' },
        ),
      })
    }
    const success = () => {
      message.loading('上传图片中', 2.5)
        .then(() => {
          message.success('上传成功', 2.5)
          dispatch({
            type: 'user/hideModal',
          })
        })
      // .then(() => message.info('上传结束', 2.5));
    }
    const modalProps = {
      item: modalType === 'create' ? {} : currentItem,
      visible: modalVisible,
      cancelText: '取消',
      okText: '确认',
      maskClosable: false,
      confirmLoading: loading.effects[`user/${modalType}`],
      title: `${
        modalType === 'create' ? i18n.t`添加图片` : i18n.t`Update User`
        }`,
      centered: true,
      onOk(data) {
        success()

        // dispatch({
        //   type: `user/${modalType}`,
        //   payload: data,
        // }).then(() => {
        //   handleRefresh()
        // })
      },
      onCancel() {
        console.log(2222)
        dispatch({
          type: 'user/hideModal',
        })
      },
    }

    const listProps = {
      dataSource: list,
      loading: loading.effects['user/query'],
      pagination,
      onChange(page) {
        handleRefresh({
          page: page.current,
          pageSize: page.pageSize,
        })
      },
      onDeleteItem(id) {
        dispatch({
          type: 'user/delete',
          payload: id,
        }).then(() => {
          handleRefresh({
            page:
              list.length === 1 && pagination.current > 1
                ? pagination.current - 1
                : pagination.current,
          })
        })
      },
      onEditItem(item) {
        dispatch({
          type: 'user/showModal',
          payload: {
            modalType: 'update',
            currentItem: item,
          },
        })
      },
      rowSelection: {
        selectedRowKeys,
        onChange: keys => {
          dispatch({
            type: 'user/updateState',
            payload: {
              selectedRowKeys: keys,
            },
          })
        },
      },
    }

    const filterProps = {
      filter: {
        ...query,
      },
      onFilterChange(value) {
        handleRefresh({
          ...value,
          page: 1,
        })
      },
      onAdd() {
        dispatch({
          type: 'user/showModal',
          payload: {
            modalType: 'create',
          },
        })
      },
    }

    const handleDeleteItems = () => {
      dispatch({
        type: 'user/multiDelete',
        payload: {
          ids: selectedRowKeys,
        },
      }).then(() => {
        handleRefresh({
          page:
            list.length === selectedRowKeys.length && pagination.current > 1
              ? pagination.current - 1
              : pagination.current,
        })
      })
    }

    return (
      <Page inner className={styles.table}>
        <Filter {...filterProps} />
        {selectedRowKeys.length > 0 && (
          <Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
            <Col>
              {`Selected ${selectedRowKeys.length} items `}
              <Popconfirm
                title="Are you sure delete these items?"
                placement="left"
                onConfirm={handleDeleteItems}
              >
                <Button type="primary" style={{ marginLeft: 8 }}>
                  Remove
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        )}
        {/*<List {...listProps} />*/}
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        <img className={'img-dev'}
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550172484054&di=96bb6cb6d2b28152b2e608bd4fcc5962&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZZ5EGyuUCp9hBPk6_s4Ehg%3D%3D%2F5727171351132208489.jpg"/>
        {modalVisible && <Modal {...modalProps} />}
        {/*<Table dataSource={data} >*/}
        {/*<ColumnGroup title="Name" style={{display:'none'}}>*/}
        {/*<Column*/}
        {/*title="First Name"*/}
        {/*dataIndex="firstName"*/}
        {/*key="firstName"*/}
        {/*/>*/}
        {/*<Column*/}
        {/*title="Last Name"*/}
        {/*dataIndex="lastName"*/}
        {/*key="lastName"*/}
        {/*/>*/}
        {/*</ColumnGroup>*/}
        {/*<Column*/}
        {/*title="Age"*/}
        {/*dataIndex="age"*/}
        {/*key="age"*/}
        {/*style={{display:'none'}}*/}
        {/*/>*/}
        {/*<Column*/}
        {/*title="Address"*/}
        {/*dataIndex="address"*/}
        {/*key="address"*/}
        {/*style={{display:'none'}}*/}
        {/*/>*/}
        {/*<Column*/}
        {/*style={{display:'none'}}*/}
        {/*title="Tags"*/}
        {/*dataIndex="tags"*/}
        {/*key="tags"*/}
        {/*render={tags => (*/}
        {/*<span>*/}
        {/*{tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}*/}
        {/*</span>*/}
        {/*)}*/}
        {/*/>*/}
        {/*<Column*/}
        {/*style={{display:'none'}}*/}
        {/*title="Action"*/}
        {/*key="action"*/}
        {/*render={(text, record) => (*/}
        {/*<span>*/}
        {/*<a href="javascript:;">Invite {record.lastName}</a>*/}
        {/*<Divider type="vertical" />*/}
        {/*<a href="javascript:;">Delete</a>*/}
        {/*</span>*/}
        {/*)}*/}
        {/*/>*/}
        {/*</Table>*/}
      </Page>
    )
  }
}

User.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default User
