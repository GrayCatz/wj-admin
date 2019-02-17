/* global document */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Trans, withI18n } from '@lingui/react'
import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
const ButtonGroup = Button.Group
const { Search } = Input
const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

@withI18n()
@Form.create()
class Filter extends PureComponent {

  render() {
    const { onAdd, filter, form, i18n } = this.props
    const { getFieldDecorator } = form
    const { name, address } = filter

    let initialCreateTime = []
    if (filter.createTime && filter.createTime[0]) {
      initialCreateTime[0] = moment(filter.createTime[0])
    }
    if (filter.createTime && filter.createTime[1]) {
      initialCreateTime[1] = moment(filter.createTime[1])
    }

    return (
      <Row gutter={24}>
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            {getFieldDecorator('name', { initialValue: name })(
              <Search
                placeholder={i18n.t`鉴定单号`}
                onSearch={this.handleSubmit}
              />,
            )}
          </Col>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            {getFieldDecorator('name', { initialValue: name })(
              <Search
                placeholder={i18n.t`鉴定师`}
                onSearch={this.handleSubmit}
              />,
            )}
          </Col>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            {getFieldDecorator('name', { initialValue: name })(
              <Search
                placeholder={i18n.t`产品名`}
                onSearch={this.handleSubmit}
              />,
            )}
          </Col>
          <Col
            {...TwoColProps}
            xl={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row type="flex" align="middle" justify="space-between">
              <div>
                <Button
                  type="primary"
                  className="margin-right"
                  onClick={this.handleSubmit}
                >
                  <Trans>查询</Trans>
                </Button>
                {/*<Button type="ghost" className="margin-right" onClick={onAdd}>*/}
                {/*<Trans>添加</Trans>*/}
                {/*</Button>*/}
              </div>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          {/*<ButtonGroup>*/}
            {/*<Button>全部</Button>*/}
            {/*<Button>待鉴定</Button>*/}
            {/*<Button>已鉴定</Button>*/}
            {/*<Button>违规</Button>*/}
          {/*</ButtonGroup>*/}
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">全部</Radio.Button>
            <Radio.Button value="b">待鉴定</Radio.Button>
            <Radio.Button value="c">已鉴定</Radio.Button>
            <Radio.Button value="d">违规</Radio.Button>
          </Radio.Group>
        </Row>
      </Row>

    )
  }
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Filter
