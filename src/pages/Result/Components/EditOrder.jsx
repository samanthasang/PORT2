import React, {useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Row, Col, Popover, Divider, Typography, Switch, Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import OriginForm from '../../Home/components/OriginForm';
import GoodsForm from '../../Home/components/GoodsForm';
import LoadForm from '../../Home/components/LoadForm';
import {
  ExclamationCircleOutlined,
  ArrowLeftOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const EditOrder = ({visible, onCancel}) => {
  const [CheckSwitch1, setCheckSwitch1] = useState(false);
  const [CheckSwitch2, setCheckSwitch2] = useState(false);
  const [CheckSwitch3, setCheckSwitch3] = useState(true);
  const [CheckSwitch4, setCheckSwitch4] = useState(true);
  const {Title, Text, Link} = Typography;
  const popoverContent1 = (
    <div>
      <Text>
        کشتی‌های شناخته شده توسط TSA بررسی شده‌اند و می‌توانند نرخ‌های هوایی را
        برای هواپیماهای مسافربری و باری رزرو کنند. اگر نرخ مسافر را رزرو کنید و
        وضعیت شما به عنوان یک فرستنده شناخته شده تأیید نشده باشد، حمل و نقل شما
        لغو می شود.
      </Text>
      <a href="" className="popoverContent-link">
        بیشتر بدانید{' '}
      </a>
    </div>
  );
  const popoverContent2 = (
    <div>
      <Text>
        حمل و نقل بدون بیمه خطرناک است. اگر تصمیم به خرید بیمه ندارید، مسئولیت
        هرگونه ادعای احتمالی برای اقلام گم شده یا آسیب دیده به عهده شما خواهد
        بود. کالاهای خود را از طریق ارائه دهنده شخص ثالث مورد اعتماد ما
        <Link href=""> xcover.com</Link> پوشش دهید یا پوشش خود را ترتیب دهید.
      </Text>
      <a href="" className="popoverContent-link">
        بیشتر بدانید{' '}
      </a>
    </div>
  );
  return (
    <Modal
      width={'80%'}
      visible={visible}
      onCancel={onCancel}
      title={'Edit Order'}
      className="modalEdit"
      okText={'جستجوی مجدد'}
      cancelText={'انصراف'}
      cancelButtonProps={{type: 'danger'}}
    >
      <Row className="centerMenu">
        <Col span={5}>
          <Popover
            content={<OriginForm origin={true} />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5 style={{color: 'red'}}>اصلی</h5>
                <ExclamationCircleOutlined />
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>کارخانه/ انبار</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<OriginForm origin={false} />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>مقصد</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>به کجا حمل می کنید؟</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<LoadForm />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>بار</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>چه چیزی ارسال می کنید؟</p>
            </div>
          </Popover>
        </Col>

        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<GoodsForm />}
            placement="bottomLeft"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>کالاها و خدمات</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>از اجناس خود به ما بگویید</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={2}>
          <div id="small-col-div">
            <Link to="/home">
              <ArrowLeftOutlined />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="centerMenu-recommendedServices">
        <Col span={8}>
          <Title level={4}>خدمات توصیه شده</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text>
            ما تمام خدماتی را که برای ارسال کالاهای خود از{' '}
            <Text strong>کارخانه/انبار</Text> به <Text strong>آدرس تجاری</Text>{' '}
            نیاز دارید انتخاب کرده ایم. لطفاً قبل از دریافت نتایج خود را بررسی و
            تأیید کنید.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}></Col>
        <Col span={1.5} className="Switch-button">
          <Switch
            defaultChecked={CheckSwitch1}
            onClick={() => setCheckSwitch1(!CheckSwitch1)}
          ></Switch>
        </Col>
        <Col span={10} className="Switch-text">
          {CheckSwitch1 ? (
            <Text>من با TSA به عنوان یک فرستنده شناخته شده تأیید شده ام</Text>
          ) : (
            <Text>من یک فرستنده شناخته شده نیستم</Text>
          )}
          <Popover content={popoverContent1}>
            <QuestionCircleOutlined className="questionCircle" />
          </Popover>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Title level={5}>درب آسانسور</Title>
        </Col>
      </Row>
      <Row>
        <Col span={1.5} className="Switch-button">
          <Switch
            defaultChecked={CheckSwitch2}
            onClick={() => setCheckSwitch2(!CheckSwitch2)}
          ></Switch>
        </Col>
        <Col span={10} className="Switch-text">
          {CheckSwitch2 ? (
            <Text>بله - در وانت بار یک درب آسانسور اضافه کنید</Text>
          ) : (
            <Text>خیر - یک اسکله بارگیری در وانت وجود دارد</Text>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={1.5} className="Switch-button">
          <Switch
            defaultChecked={CheckSwitch3}
            onClick={() => setCheckSwitch3(!CheckSwitch3)}
          ></Switch>
        </Col>
        <Col span={10} className="Switch-text">
          {CheckSwitch3 ? (
            <Text>بله - در هنگام تحویل یک درب آسانسور اضافه کنید </Text>
          ) : (
            <Text>خیر - یک اسکله بارگیری در زمان تحویل وجود دارد</Text>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Title style={{display: 'inline'}} level={5}>
            بیمه
          </Title>
          <Popover content={popoverContent2}>
            <QuestionCircleOutlined className="questionCircle" />
          </Popover>
        </Col>
      </Row>
      <Row>
        <Col span={1.5} className="Switch-button">
          <Switch
            defaultChecked={CheckSwitch4}
            onClick={() => setCheckSwitch4(!CheckSwitch4)}
          ></Switch>
        </Col>
        <Col span={10} className="Switch-text">
          {CheckSwitch4 ? (
            <Text>
              بله - بیمه اضافه کنید (ارزش ترکیبی کالا و هزینه های حمل و نقل
              اولیه تا 500 هزار دلار را پوشش می دهد، با 10 درصد کسر بیش از 5001
              دلار)
            </Text>
          ) : (
            <Text>
              خیر - من یا بیمه شده ام یا مسئولیت کامل محموله گم شده یا آسیب دیده
              را بر عهده می گیرم
            </Text>
          )}
        </Col>
      </Row>
    </Modal>
  );
};
export default EditOrder;
