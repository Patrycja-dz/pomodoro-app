import "./style.css";

import { TimerStateNames } from "./types/timer.ts";
import { PomodoroCommandsNames } from "./enums/TimerState.ts";
import settings from "../assets/icon-settings.svg";
import { closeDialog, openDialog } from "./dialog.ts";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const container = document.createElement("div");

  const title = document.createElement("p");
  title.textContent = TimerStateNames.pomodoro;
  container.appendChild(title);

  const controlButtons = document.createElement("div");
  controlButtons.classList.add("control-buttons");

  const pomodoroButton = document.createElement("button");
  pomodoroButton.textContent = TimerStateNames.pomodoro;
  controlButtons.appendChild(pomodoroButton);

  const shortBreakButton = document.createElement("button");
  shortBreakButton.textContent = TimerStateNames.shortBreak;
  controlButtons.appendChild(shortBreakButton);

  const longBreakButton = document.createElement("button");
  longBreakButton.textContent = TimerStateNames.longBreak;
  controlButtons.appendChild(longBreakButton);

  container.appendChild(controlButtons);

  const timerBox = document.createElement("div");
  timerBox.classList.add("app-counter-box");
  timerBox.id = "timer";

  const timerText = document.createElement("p");
  timerText.innerHTML = `<span class="minutes">25</span>:<span class="seconds">00</span>`;
  timerBox.appendChild(timerText);

  container.appendChild(timerBox);

  const startButton = document.createElement("button");
  startButton.textContent = PomodoroCommandsNames.start;
  container.appendChild(startButton);

  const dialog = document.createElement("dialog");
  dialog.id = "dialog";

  const dialogText = document.createElement("p");
  dialogText.textContent = "This modal dialog has a groovy backdrop!";
  dialog.appendChild(dialogText);

  const closeButton = document.createElement("button");
  closeButton.id = "close";
  closeButton.textContent = "Close";
  dialog.appendChild(closeButton);

  container.appendChild(dialog);

  const settingsButton = document.createElement("button");
  settingsButton.id = "settings";

  const settingsImage = document.createElement("img");
  settingsImage.src = settings;
  settingsImage.alt = "settings";
  settingsButton.appendChild(settingsImage);

  container.appendChild(settingsButton);

  app.appendChild(container);

  settingsButton.addEventListener("click", () => dialog.showModal());
  openDialog(dialog, settingsButton);
  closeDialog(dialog, closeButton);
}
