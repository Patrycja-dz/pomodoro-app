import { TimerState } from "../enums/TimerState";
export type PomodoroDuration = {
  [TimerState.pomodoro]: number;
  [TimerState.shortBreak]: number;
  [TimerState.longBreak]: number;
};

export type PomodoroCommands = {
  start: string;
  pause: string;
  reset: string;
};

export type PomodoroState = {
  state: TimerState;
  duration: PomodoroDuration;
  commands: PomodoroCommands;
  readableName: string;
};
