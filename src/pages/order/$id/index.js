import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Page } from 'components'
import styles from './index.less'
import { Card, Col, Row } from 'antd'

const { Meta } = Card
let picCard = {
  // width: '100px',
  width: '100px',
  borderRadius: '5px',
  marginBottom: '10px',
  // border: '1px solid #ccc',
  pic: {
    width: '100px', height: '150px',
  },
  sp: {
    textAlign: 'center',
  },
}

@connect(({ userDetail }) => ({ userDetail }))
class UserDetail extends PureComponent {
  render() {
    const { userDetail } = this.props
    const { data } = userDetail
    const content = []
    for (let key in data) {
      if ({}.hasOwnProperty.call(data, key)) {
        content.push(
          <div key={key} className={styles.item}>
            <div>{key}</div>
            <div>{String(data[key])}</div>
          </div>,
        )
      }
    }
    return (
      <Page inner className={styles.content}>
        <div className="gutter-example">
          <Row gutter={8}>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">产品名：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">圣诞限量版口红</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">创建时间：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">2018-24-03</div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">品牌：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">YSL</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">创建人：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">陈奕迅</div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">类别：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">口红</div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">产品示例图：</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                     style={{ width: '100px', height: '140px' }}></img>
              </div>
            </Col>
          </Row>
        </div>
        {/*<div className={styles.content}>{content}</div>*/}

        <div style={{ marginTop: '20px' }}>
          <Card
            title="鉴别图必填"
            // extra={<a href="#">More</a>}
            style={{ width: '100%' }}
          >
            <Row gutter={16}>

              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
            </Row>

          </Card>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Card
            title="鉴别图选填"
            // extra={<a href="#">More</a>}
            style={{ width: '100%' }}
          >
            <Row gutter={16}>

              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={3}>
                <div style={picCard}>
                  <div>
                    <img src="http://wx2.sinaimg.cn/orj480/006xz6tOly1ffpvldz56qj308w0fs3yk.jpg"
                         style={picCard.pic}></img>
                  </div>
                  <div>
                    <div style={picCard.sp}>管体正面</div>
                  </div>
                </div>
              </Col>
            </Row>

          </Card>
        </div>
      </Page>
    )
  }
}

UserDetail.propTypes = {
  userDetail: PropTypes.object,
}

export default UserDetail
