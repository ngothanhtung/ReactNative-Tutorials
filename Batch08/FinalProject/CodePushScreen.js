import React from 'react';
import codePush from 'react-native-code-push';
import App from './src/app';
import CodePushUpdateScreen from './CodePushUpdateScreen';

class CodepushScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      // CODEPUSH
      ready: __DEV__ ? true : false,
      progress: { totalBytes: 100, receivedBytes: 0 },
      syncStatus: codePush.SyncStatus.CHECKING_FOR_UPDATE,
    };
  }

  componentDidMount() {
    // CODEPUSH
    codePush.sync(
      {
        // updateDialog: {
        //   appendReleaseDescription: true,
        //   title: 'Thông báo',
        //   descriptionPrefix: '\n',
        //   mandatoryUpdateMessage: 'Có phiên bản mới cần được cập nhật.',
        //   mandatoryContinueButtonLabel: 'Cập nhật',
        // },

        mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESTART,
      },
      this.codePushStatusDidChange,
      this.codePushDownloadDidProgress,
    );
  }

  codePushStatusDidChange = (status) => {
    const stateModel = { syncStatus: status, ready: false };
    if (status === codePush.SyncStatus.UP_TO_DATE) {
      stateModel.ready = true;
      this.setState(stateModel);
    } else {
      this.setState(stateModel);
      if (status === codePush.SyncStatus.UPDATE_INSTALLED) {
        setTimeout(codePush.restartApp, 1000);
      }
    }
  };

  onPressRestart = () => {
    codePush.restartApp();
  };

  codePushDownloadDidProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    const { ready, progress, syncStatus } = this.state;
    if (ready === false) {
      // if (true) {
      return <CodePushUpdateScreen progress={progress} syncStatus={syncStatus} />;
    }
    return <App />;
  }
}
export default codePush(CodepushScreen);
