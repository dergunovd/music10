import { Result } from '../entities/result.entity';

export interface ChooseResult {
  correct: number;
  result: Pick<Result, 'isEnd' | 'progress'>;
}
