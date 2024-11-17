import { TimerState } from "../enums/TimerState";

export const TimerStateNames: Record<TimerState, string> = {
  [TimerState.pomodoro]: "pomodoro",
  [TimerState.shortBreak]: "short break",
  [TimerState.longBreak]: "long break",
};
