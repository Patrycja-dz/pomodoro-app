import { PomodoroCommandsNames, TimerState } from "../enums/TimerState";
import { PomodoroState } from "../types/PomodoroTypes";

export class PomodoroTimer {
  private timeLeft: number = 0;
  private state: PomodoroState;
  private isPaused: boolean = false;
  private intervalId: number | null = null;
  constructor(initialDurations: PomodoroState["duration"]) {
    this.state = {
      state: TimerState.pomodoro,
      duration: initialDurations,
      commands: PomodoroCommandsNames,
      readableName: TimerState.pomodoro,
    };
    this.timeLeft = initialDurations[TimerState.pomodoro] * 60;
  }
  public startPomodoro() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      console.log(this.timeLeft);
      if (this.timeLeft <= 0) {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          this.stopPomodoro();
          this.switchPomodoroState();
        }
      }
    });
  }
  public stopPomodoro() {
    clearInterval(this.intervalId ?? 0);
    this.intervalId = null;
  }
  private switchPomodoroState() {
    switch (this.state.state) {
      case TimerState.pomodoro:
    }
  }
}
