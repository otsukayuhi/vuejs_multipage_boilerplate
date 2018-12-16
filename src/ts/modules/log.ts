class ConsoleLog {
  private message: string;

  constructor({message = 'No Property'} = {message: 'No Parameter'}) {
    this.message = message;
  };

  init() {console.log(this.message);}
};

export default ConsoleLog;

/*
  // モジュール呼び出し
  import Log from '../modules/log';

  // コンストラクタ関数を new して、インスタンス作成
  const LOG = new Log({
    message: 'hogehoge'
  });

  // initメソッドを実行
  LOG.init();
*/