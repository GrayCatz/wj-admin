import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, message, Modal, Select, Upload } from 'antd'
import { withI18n } from '@lingui/react'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJPG && isLt2M
}

class Avatar extends React.Component {
  state = {
    loading: false,
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }))
    }
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'}/>
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const imageUrl = this.state.imageUrl
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img style={{ width: '85px' }} src={imageUrl} alt="avatar"/> : uploadButton}
      </Upload>
    )
  }
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
          // action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage}/>
        </Modal>
      </div>
    )
  }
}


const Option = Select.Option

function handleChange(value) {
  console.log(`selected ${value}`)
}


const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

@withI18n()
@Form.create()
class UserModal extends PureComponent {
  handleOk = () => {
    success()
    // const { item = {}, onOk, form } = this.props
    // const { validateFields, getFieldsValue } = form
    //
    // validateFields(errors => {
    //   if (errors) {
    //     return
    //   }
    //   const data = {
    //     ...getFieldsValue(),
    //     key: item.key,
    //   }
    //   data.address = data.address.join(' ')
    //   onOk(data)
    // })
  }

  render() {
    const { item = {}, onOk, form, i18n, ...modalProps } = this.props
    const { getFieldDecorator } = form

    return (
      <Modal {...modalProps} onOk={onOk}>
        <Form layout="horizontal">
          <FormItem label={i18n.t`图片名`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [
                {
                  required: false,
                },
              ],
            })(<Input/>)}
          </FormItem>
          <FormItem label={i18n.t`图片类型`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('address', {
              initialValue: item.address && item.address.split(' '),
              rules: [
                {
                  required: false,
                },
              ],
            })(
              <div>
                <Select defaultValue="lucy" style={{ width: 200 }}>
                  <Option value="jack">产品图</Option>
                  <Option value="lucy">产品鉴别图标</Option>
                  {/*<Option value="disabled" disabled>Disabled</Option>*/}
                  <Option value="Yiminghe">产品鉴别示例图</Option>
                </Select>
              </div>,
            )}
          </FormItem>
          <FormItem label={i18n.t`图片类型`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('address', {
              initialValue: item.address && item.address.split(' '),
              rules: [
                {
                  required: false,
                },
              ],
            })(
              <Avatar/>,
              // <PicturesWall />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
