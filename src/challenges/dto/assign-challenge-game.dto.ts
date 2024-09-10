import { IsNotEmpty } from 'class-validator';
import { Result } from '../interfaces/challenge.interface';
import { Player } from 'src/players/players.schema';

export class AssignChallengeGameDto {
  @IsNotEmpty()
  def: Player;

  @IsNotEmpty()
  result: Result[];
}
