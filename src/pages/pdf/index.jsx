import React from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import { Button } from 'antd-mobile';
import ReactDOM from 'react-dom';

export default class Pdf extends React.Component {
  constructor() {
    super();
    this.state = {
      local: false,
      text: false,
    };
  }

  componentDidMount() {

    // setTimeout(() => {
    //   ReactDOM.render(
    //     <MobilePDFReader
    //       url={require('../../assets/test.pdf')}
    //       isShowHeader={false}
    //     />,
    //     document.body,
    //   );
    // }, 2000);
    
  }

  render() {
    const { local, text } = this.state;

    return (
      <>
        <Button
          onClick={() => this.setState({ local: !local, text: !text })}
          type="primary"
          size="large"
        >
          {text ? '关闭本地pdf' : '访问本地pdf'}
        </Button>

        {local && (
          <MobilePDFReader
            url={require('../../assets/test.pdf')}
            isShowHeader={false}
          />
        )}
      </>
    );
  }
}
