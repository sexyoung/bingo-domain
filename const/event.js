export const SocketEvent = {
  Room: {
    ReqRoom: 'RoomReqRoom',
    ResRoom: 'RoomResRoom',
    Denied: 'RoomDenied',
    PlayerJoin: 'RoomPlayerJoin',
    PlayerUpdate: 'RoomPlayerUpdate',
    UpdateProcess: 'RoomUpdateProcess',
    MessageSend: 'RoomMessageSend',
    MessageUpdate: 'RoomMessageUpdate',
    CountDown: 'RoomCountDown', // ← 遊戲開始前的倒數
    CountDownStop: 'RoomCountDownStop',
    CountDownEnd: 'RoomCountDownEnd',
    CountDownCancel: 'RoomCountDownCancel',
    StartGame: 'RoomStartGame',
    SaveMatrix: 'RoomSaveMatrix',
    TriggerCountDown: 'RoomTriggerCountDown',
    TriggerStartGame: 'RoomTriggerStartGame',
  },
  User: {
    ResUser: 'UserResUser',
    ChangeName: 'UserChangeName',
  },
  Game: {
    ReqGame: 'GameReqGame',
    GoJoin: 'GameGoJoin',
    RePlay: 'GameRePlay',
    Turn: 'GameTurn',
    CheckNum: 'GameCheckNum',
    SelfMatrix: 'GameSelfMatrix',
    FetchMatrix: 'GameFetchMatrix',
    UpdateChecked: 'GameUpdateChecked',
  }
};