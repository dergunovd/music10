const TRACKS_PER_GAME = 10;

export class Result {
  progress: boolean[] = [];

  isEnd = false;

  updateProgress(isGuess: boolean) {
    this.progress.push(isGuess);
    if (this.progress.length >= TRACKS_PER_GAME) {
      this.isEnd = true;
    }
  }
}
